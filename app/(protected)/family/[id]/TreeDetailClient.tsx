'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import type { Member, ParentEdge, PartnershipEdge } from '@/lib/api'
import AddMemberForm from './AddMemberForm'
import AddRelationshipForm from './AddRelationshipForm'
import styles from './TreeDetail.module.css'

// React Flow uses browser APIs — must be loaded client-side only
const FamilyGraph = dynamic(
	() => import('@/components/FamilyGraph/FamilyGraph'),
	{ ssr: false, loading: () => <div className={styles.graphLoading}>Loading graph…</div> },
)

interface Props {
	treeId: string
	treeName: string
	token: string
	initialMembers: Member[]
	initialParentEdges: ParentEdge[]
	initialPartnershipEdges: PartnershipEdge[]
}

export default function TreeDetailClient({
	treeId,
	treeName,
	token,
	initialMembers,
	initialParentEdges,
	initialPartnershipEdges,
}: Props) {
	const [members, setMembers] = useState<Member[]>(initialMembers)
	const [parentEdges, setParentEdges] = useState<ParentEdge[]>(initialParentEdges)
	const [partnershipEdges, setPartnershipEdges] = useState<PartnershipEdge[]>(initialPartnershipEdges)
	const [selectedId, setSelectedId] = useState<string | null>(initialMembers[0]?.id ?? null)

	const memberMap = Object.fromEntries(members.map((m) => [m.id, m]))
	const selected = selectedId ? memberMap[selectedId] : null

	const parents = parentEdges.filter((e) => e.childId === selectedId).map((e) => e.parentId)
	const children = parentEdges.filter((e) => e.parentId === selectedId).map((e) => e.childId)
	const partnerships = partnershipEdges.filter(
		(e) => e.member1Id === selectedId || e.member2Id === selectedId,
	)

	function memberName(id: string) {
		const m = memberMap[id]
		return m ? [m.firstName, m.lastName].filter(Boolean).join(' ') : id
	}

	return (
		<div className={styles.layout}>
			{/* ── Graph (main) ───────────────────────────────────────────────── */}
			<div className={styles.graphArea}>
				<div className={styles.graphHeader}>
					<h1 className={styles.treeName}>{treeName}</h1>
					<div className={styles.graphActions}>
						<AddMemberForm
							treeId={treeId}
							token={token}
							onCreated={(m) => {
								setMembers((prev) => [...prev, m])
								setSelectedId(m.id)
							}}
						/>
						<AddRelationshipForm
							treeId={treeId}
							token={token}
							members={members}
							onParentChildAdded={(parentId, childId) =>
								setParentEdges((prev) => [...prev, { parentId, childId }])
							}
							onPartnershipAdded={(edge) =>
								setPartnershipEdges((prev) => [...prev, edge])
							}
						/>
					</div>
				</div>
				<div className={styles.graphCanvas}>
					<FamilyGraph
						members={members}
						parentEdges={parentEdges}
						partnershipEdges={partnershipEdges}
						selectedId={selectedId}
						onSelectMember={setSelectedId}
					/>
				</div>
			</div>

			{/* ── Detail panel (right sidebar) ───────────────────────────────── */}
			<aside className={styles.detailPanel}>
				{selected ? (
					<>
						<h2 className={styles.detailName}>
							{[selected.firstName, selected.maidenName ? `"${selected.maidenName}"` : null, selected.lastName]
								.filter(Boolean)
								.join(' ')}
						</h2>
						{(selected.birthYear || selected.deathYear) && (
							<p className={styles.detailYears}>
								{selected.birthYear ?? '?'}
								{selected.deathYear ? ` – ${selected.deathYear}` : ''}
							</p>
						)}
						{selected.gender && (
							<p className={styles.detailMeta}>{selected.gender.toLowerCase().replace(/_/g, ' ')}</p>
						)}

						<hr className={styles.divider} />

						{parents.length > 0 && (
							<div className={styles.relGroup}>
								<span className={styles.relGroupLabel}>Parents</span>
								{parents.map((id) => (
									<div key={id} className={styles.relEntry}>{memberName(id)}</div>
								))}
							</div>
						)}
						{children.length > 0 && (
							<div className={styles.relGroup}>
								<span className={styles.relGroupLabel}>Children</span>
								{children.map((id) => (
									<div key={id} className={styles.relEntry}>{memberName(id)}</div>
								))}
							</div>
						)}
						{partnerships.length > 0 && (
							<div className={styles.relGroup}>
								<span className={styles.relGroupLabel}>Partners</span>
								{partnerships.map((p) => {
									const partnerId = p.member1Id === selectedId ? p.member2Id : p.member1Id
									return (
										<div key={p.id} className={styles.relEntry}>
											{memberName(partnerId)}
											{p.type && (
												<span className={styles.relType}>
													{' '}— {p.type.toLowerCase().replace(/_/g, ' ')}
												</span>
											)}
										</div>
									)
								})}
							</div>
						)}
						{parents.length === 0 && children.length === 0 && partnerships.length === 0 && (
							<p className={styles.noRels}>No relationships yet.</p>
						)}
					</>
				) : (
					<p className={styles.noRels}>Click a node to see details.</p>
				)}
			</aside>
		</div>
	)
}
