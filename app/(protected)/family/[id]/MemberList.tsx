'use client'

import type { Member } from '@/lib/api'
import styles from './TreeDetail.module.css'

interface Props {
	members: Member[]
	selectedId: string | null
	onSelect: (id: string) => void
}

function memberLabel(m: Member) {
	const name = [m.firstName, m.lastName].filter(Boolean).join(' ')
	const years = [m.birthYear, m.deathYear].filter(Boolean).join('–')
	return years ? `${name} (${years})` : name
}

export default function MemberList({ members, selectedId, onSelect }: Props) {
	const sorted = [...members].sort((a, b) =>
		(a.lastName ?? a.firstName).localeCompare(b.lastName ?? b.firstName),
	)

	return (
		<ul className={styles.memberList}>
			{sorted.map((m) => (
				<li
					key={m.id}
					className={`${styles.memberItem} ${m.id === selectedId ? styles.memberItemSelected : ''}`}
					onClick={() => onSelect(m.id)}
				>
					<span className={styles.memberName}>{memberLabel(m)}</span>
					<span className={styles.memberGender}>{m.gender?.toLowerCase() ?? '—'}</span>
				</li>
			))}
		</ul>
	)
}
