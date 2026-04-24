'use client'

import { useCallback, useEffect, useMemo } from 'react'
import {
	ReactFlow,
	Background,
	Controls,
	useNodesState,
	useEdgesState,
	type Node,
	type Edge,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'

import type { Member, ParentEdge, PartnershipEdge } from '@/lib/api'
import { MemberNode } from './MemberNode'
import { CoupleNode } from './CoupleNode'
import { layoutGraph, NODE_W, NODE_H } from './layout'

const COUPLE_NODE_SIZE = 12
const PINK = '#ec4899'
const GRAY = '#9ca3af'

const nodeTypes = { member: MemberNode, couple: CoupleNode }

interface Props {
	members: Member[]
	parentEdges: ParentEdge[]
	partnershipEdges: PartnershipEdge[]
	selectedId: string | null
	onSelectMember: (id: string) => void
}

function buildGraph(
	members: Member[],
	parentEdges: ParentEdge[],
	partnershipEdges: PartnershipEdge[],
	selectedId: string | null,
) {
	const memberIds = new Set(members.map((m) => m.id))

	const rfMemberNodes: Node[] = members.map((m) => ({
		id: m.id,
		type: 'member' as const,
		position: { x: 0, y: 0 },
		data: { member: m, isSelected: m.id === selectedId },
	}))

	const validParentEdges = parentEdges.filter(
		(e) => memberIds.has(e.parentId) && memberIds.has(e.childId),
	)
	const validPartnerEdges = partnershipEdges.filter(
		(e) => memberIds.has(e.member1Id) && memberIds.has(e.member2Id),
	)

	// ── 1. Layout member nodes ────────────────────────────────────────────────
	const laidOutMembers = layoutGraph(
		rfMemberNodes,
		validParentEdges.map((e) => ({ source: e.parentId, target: e.childId })),
		validPartnerEdges.map((e) => ({ source: e.member1Id, target: e.member2Id })),
	)

	const posMap: Record<string, { x: number; y: number }> = {}
	for (const n of laidOutMembers) posMap[n.id] = n.position

	// ── 2. Build couple nodes ─────────────────────────────────────────────────
	// For each partnership, determine left/right partner by x position,
	// then place a small dot in the gap between them.
	const coupleNodes: Node[] = []
	// Map from canonical partnership key (sorted ids) → couple node id
	const coupleIdForPair: Record<string, string> = {}
	// Map from couple node id → { leftId, rightId }
	const coupleMembers: Record<string, { leftId: string; rightId: string }> = {}

	for (const pe of validPartnerEdges) {
		const posA = posMap[pe.member1Id]
		const posB = posMap[pe.member2Id]
		if (!posA || !posB) continue

		const leftId = posA.x <= posB.x ? pe.member1Id : pe.member2Id
		const rightId = posA.x <= posB.x ? pe.member2Id : pe.member1Id
		const leftPos = posMap[leftId]
		const rightPos = posMap[rightId]

		const coupleNodeId = `couple-${pe.id}`
		// Center horizontally between the two partners, vertically centered on node
		const cx = (leftPos.x + NODE_W + rightPos.x) / 2 - COUPLE_NODE_SIZE / 2
		const cy = leftPos.y + NODE_H / 2 - COUPLE_NODE_SIZE / 2

		coupleNodes.push({
			id: coupleNodeId,
			type: 'couple' as const,
			position: { x: cx, y: cy },
			data: {},
			draggable: false,
			selectable: false,
		})

		const pairKey = [pe.member1Id, pe.member2Id].sort().join('|')
		coupleIdForPair[pairKey] = coupleNodeId
		coupleMembers[coupleNodeId] = { leftId, rightId }
	}

	// ── 3. Build edges ────────────────────────────────────────────────────────
	const edges: Edge[] = []

	// Partnership edges: left partner → couple node (left handle), right partner → couple node (right handle)
	for (const [coupleNodeId, { leftId, rightId }] of Object.entries(coupleMembers)) {
		edges.push({
			id: `${coupleNodeId}-from-left`,
			source: leftId,
			sourceHandle: 'right',
			target: coupleNodeId,
			targetHandle: 'left',
			type: 'straight',
			style: { stroke: PINK, strokeWidth: 2 },
		})
		edges.push({
			id: `${coupleNodeId}-from-right`,
			source: rightId,
			sourceHandle: 'left',
			target: coupleNodeId,
			targetHandle: 'right',
			type: 'straight',
			style: { stroke: PINK, strokeWidth: 2 },
		})
	}

	// Parent-child edges: if a child has two parents that share a couple node,
	// route from couple node bottom. Otherwise route from parent bottom.
	for (const e of validParentEdges) {
		// Find if this child's parents (as a pair) have a couple node
		const sibling = validParentEdges.find(
			(other) => other.childId === e.childId && other.parentId !== e.parentId,
		)

		if (sibling) {
			const pairKey = [e.parentId, sibling.parentId].sort().join('|')
			const coupleNodeId = coupleIdForPair[pairKey]
			if (coupleNodeId) {
				// Only add this edge once per couple→child pair (deduplicate since both parents match)
				const edgeId = `couple-child-${coupleNodeId}-${e.childId}`
				if (!edges.find((ex) => ex.id === edgeId)) {
					edges.push({
						id: edgeId,
						source: coupleNodeId,
						sourceHandle: 'bottom',
						target: e.childId,
						targetHandle: 'top',
						type: 'smoothstep',
						style: { stroke: GRAY, strokeWidth: 1.5 },
					})
				}
				continue
			}
		}

		// No couple node — direct parent → child
		edges.push({
			id: `pc-${e.parentId}-${e.childId}`,
			source: e.parentId,
			sourceHandle: 'bottom',
			target: e.childId,
			targetHandle: 'top',
			type: 'smoothstep',
			style: { stroke: GRAY, strokeWidth: 1.5 },
		})
	}

	const nodes = [...laidOutMembers, ...coupleNodes]
	return { nodes, edges }
}

export default function FamilyGraph({
	members,
	parentEdges,
	partnershipEdges,
	selectedId,
	onSelectMember,
}: Props) {
	const { nodes: initNodes, edges: initEdges } = useMemo(
		() => buildGraph(members, parentEdges, partnershipEdges, selectedId),
		[members, parentEdges, partnershipEdges, selectedId],
	)

	const [nodes, setNodes, onNodesChange] = useNodesState(initNodes)
	const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges)

	useEffect(() => {
		setNodes(initNodes)
		setEdges(initEdges)
	}, [initNodes, initEdges, setNodes, setEdges])

	const onNodeClick = useCallback(
		(_: React.MouseEvent, node: Node) => {
			// Ignore clicks on couple junction nodes
			if (node.type === 'couple') return
			onSelectMember(node.id)
		},
		[onSelectMember],
	)

	if (members.length === 0) {
		return (
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					height: '100%',
					color: '#9ca3af',
					fontStyle: 'italic',
				}}
			>
				No members yet. Add one to get started.
			</div>
		)
	}

	return (
		<ReactFlow
			nodes={nodes}
			edges={edges}
			onNodesChange={onNodesChange}
			onEdgesChange={onEdgesChange}
			onNodeClick={onNodeClick}
			nodeTypes={nodeTypes}
			fitView
			fitViewOptions={{ padding: 0.15 }}
			minZoom={0.2}
			maxZoom={2}
		>
			<Background color="#e5e7eb" gap={20} />
			<Controls />
		</ReactFlow>
	)
}
