import { Handle, Position, type NodeProps, type Node } from '@xyflow/react'
import type { Member } from '@/lib/api'

export type MemberNodeData = { member: Member; isSelected: boolean }
export type MemberNodeType = Node<MemberNodeData, 'member'>

const GENDER_COLOR: Record<string, string> = {
	MALE: '#3b82f6',
	FEMALE: '#ec4899',
	OTHER: '#8b5cf6',
	PREFER_NOT_TO_SAY: '#6b7280',
}

export function MemberNode({ data }: NodeProps<MemberNodeType>) {
	const { member, isSelected } = data
	const color = GENDER_COLOR[member.gender ?? ''] ?? '#9ca3af'
	const name = [member.firstName, member.lastName].filter(Boolean).join(' ')
	const years =
		member.birthYear && member.deathYear
			? `${member.birthYear}–${member.deathYear}`
			: member.birthYear
			? `b. ${member.birthYear}`
			: ''

	return (
		<div
			style={{
				background: 'white',
				border: `2px solid ${isSelected ? '#1d4ed8' : color}`,
				borderRadius: 8,
				padding: '8px 12px',
				width: 170,
				minHeight: 72,
				boxShadow: isSelected
					? '0 0 0 3px rgba(29,78,216,0.2), 0 2px 6px rgba(0,0,0,0.1)'
					: '0 1px 4px rgba(0,0,0,0.1)',
				cursor: 'pointer',
			}}
		>
			{/* Top — receives parent edge when no couple node is involved */}
			<Handle type="target" id="top" position={Position.Top} style={{ background: color, width: 8, height: 8 }} />
			{/* Left / Right — connect to couple junction node */}
			<Handle type="source" id="right" position={Position.Right} style={{ background: '#ec4899', width: 8, height: 8, right: -4 }} />
			<Handle type="target" id="left" position={Position.Left} style={{ background: '#ec4899', width: 8, height: 8, left: -4 }} />
			<div style={{ fontWeight: 600, fontSize: 13, color: '#111827', lineHeight: 1.3 }}>{name}</div>
			{years && <div style={{ fontSize: 11, color: '#6b7280', marginTop: 3 }}>{years}</div>}
			{member.status === 'CLAIMED' && (
				<div style={{ fontSize: 10, color: '#16a34a', marginTop: 2, fontWeight: 500 }}>● claimed</div>
			)}
			{/* Bottom — fallback parent-child when no couple node */}
			<Handle type="source" id="bottom" position={Position.Bottom} style={{ background: color, width: 8, height: 8 }} />
		</div>
	)
}
