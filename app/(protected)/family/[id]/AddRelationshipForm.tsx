'use client'

import { useState } from 'react'
import { addParentChild, createPartnership, type Member, type PartnershipEdge, type PartnershipType } from '@/lib/api'
import styles from './TreeDetail.module.css'

interface Props {
	treeId: string
	token: string
	members: Member[]
	onParentChildAdded: (parentId: string, childId: string) => void
	onPartnershipAdded: (edge: PartnershipEdge) => void
}

type Mode = 'parent-child' | 'partnership'

function memberLabel(m: Member) {
	return [m.firstName, m.lastName].filter(Boolean).join(' ')
}

export default function AddRelationshipForm({
	treeId,
	token,
	members,
	onParentChildAdded,
	onPartnershipAdded,
}: Props) {
	const [open, setOpen] = useState(false)
	const [mode, setMode] = useState<Mode>('parent-child')

	// parent-child state
	const [parentId, setParentId] = useState('')
	const [childId, setChildId] = useState('')

	// partnership state
	const [member1Id, setMember1Id] = useState('')
	const [member2Id, setMember2Id] = useState('')
	const [partnershipType, setPartnershipType] = useState<PartnershipType | ''>('')

	const [error, setError] = useState<string | null>(null)
	const [loading, setLoading] = useState(false)

	function reset() {
		setParentId('')
		setChildId('')
		setMember1Id('')
		setMember2Id('')
		setPartnershipType('')
		setError(null)
	}

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault()
		setLoading(true)
		setError(null)
		try {
			if (mode === 'parent-child') {
				if (!parentId || !childId) { setError('Select both members'); return }
				await addParentChild(treeId, token, parentId, childId)
				onParentChildAdded(parentId, childId)
			} else {
				if (!member1Id || !member2Id) { setError('Select both members'); return }
				const edge = await createPartnership(treeId, token, {
					member1Id,
					member2Id,
					type: partnershipType || undefined,
				})
				onPartnershipAdded(edge)
			}
			reset()
			setOpen(false)
		} catch (err: any) {
			setError(err.message)
		} finally {
			setLoading(false)
		}
	}

	if (!open) {
		return (
			<button className={styles.addButton} onClick={() => setOpen(true)}>
				+ Add Relationship
			</button>
		)
	}

	const sorted = [...members].sort((a, b) => memberLabel(a).localeCompare(memberLabel(b)))

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<h3 className={styles.formTitle}>New Relationship</h3>

			<div className={styles.modeToggle}>
				<button
					type="button"
					className={`${styles.modeButton} ${mode === 'parent-child' ? styles.modeButtonActive : ''}`}
					onClick={() => { setMode('parent-child'); reset() }}
				>
					Parent / Child
				</button>
				<button
					type="button"
					className={`${styles.modeButton} ${mode === 'partnership' ? styles.modeButtonActive : ''}`}
					onClick={() => { setMode('partnership'); reset() }}
				>
					Partnership
				</button>
			</div>

			{mode === 'parent-child' ? (
				<div className={styles.formRow}>
					<select className={styles.select} value={parentId} onChange={(e) => setParentId(e.target.value)} required>
						<option value="">Parent</option>
						{sorted.map((m) => (
							<option key={m.id} value={m.id}>{memberLabel(m)}</option>
						))}
					</select>
					<select className={styles.select} value={childId} onChange={(e) => setChildId(e.target.value)} required>
						<option value="">Child</option>
						{sorted.map((m) => (
							<option key={m.id} value={m.id}>{memberLabel(m)}</option>
						))}
					</select>
				</div>
			) : (
				<>
					<div className={styles.formRow}>
						<select className={styles.select} value={member1Id} onChange={(e) => setMember1Id(e.target.value)} required>
							<option value="">Partner 1</option>
							{sorted.map((m) => (
								<option key={m.id} value={m.id}>{memberLabel(m)}</option>
							))}
						</select>
						<select className={styles.select} value={member2Id} onChange={(e) => setMember2Id(e.target.value)} required>
							<option value="">Partner 2</option>
							{sorted.map((m) => (
								<option key={m.id} value={m.id}>{memberLabel(m)}</option>
							))}
						</select>
					</div>
					<select
						className={styles.select}
						value={partnershipType}
						onChange={(e) => setPartnershipType(e.target.value as PartnershipType | '')}
					>
						<option value="">Type (optional)</option>
						<option value="MARRIAGE">Marriage</option>
						<option value="DOMESTIC_PARTNERSHIP">Domestic Partnership</option>
						<option value="DIVORCED">Divorced</option>
						<option value="SEPARATED">Separated</option>
					</select>
				</>
			)}

			{error && <p className={styles.error}>{error}</p>}

			<div className={styles.formActions}>
				<button type="submit" className={styles.submitButton} disabled={loading}>
					{loading ? 'Saving…' : 'Save'}
				</button>
				<button type="button" className={styles.cancelButton} onClick={() => { reset(); setOpen(false) }}>
					Cancel
				</button>
			</div>
		</form>
	)
}
