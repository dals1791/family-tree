'use client'

import { Handle, Position, type NodeProps, type Node } from '@xyflow/react'

export type CoupleNodeData = Record<string, never>
export type CoupleNodeType = Node<CoupleNodeData, 'couple'>

const SIZE = 12
const PINK = '#ec4899'

export function CoupleNode(_: NodeProps<CoupleNodeType>) {
	return (
		<div
			style={{
				width: SIZE,
				height: SIZE,
				borderRadius: '50%',
				background: PINK,
				border: '2px solid white',
				boxShadow: '0 0 0 2px ' + PINK,
				pointerEvents: 'none',
			}}
		>
			{/* Left — receives edge from left partner */}
			<Handle
				type="target"
				id="left"
				position={Position.Left}
				style={{ background: PINK, width: 6, height: 6, left: -3 }}
			/>
			{/* Right — receives edge from right partner */}
			<Handle
				type="target"
				id="right"
				position={Position.Right}
				style={{ background: PINK, width: 6, height: 6, right: -3 }}
			/>
			{/* Bottom — children connect from here */}
			<Handle
				type="source"
				id="bottom"
				position={Position.Bottom}
				style={{ background: '#9ca3af', width: 6, height: 6, bottom: -3 }}
			/>
		</div>
	)
}
