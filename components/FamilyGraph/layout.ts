import type { Node } from '@xyflow/react'

export const NODE_W = 170
export const NODE_H = 72

const COUPLE_GAP = 24   // gap between two partners (tight)
const FAMILY_GAP = 80   // gap between separate family groups in a row
const Y_GAP = NODE_H + 90

/**
 * Family-tree layout — no external dependencies.
 *
 * Rules:
 *  - Every node in the same generation shares the same Y.
 *  - Partners are placed immediately side-by-side (COUPLE_GAP).
 *  - Children are sorted under their parents, centred below the couple/parent.
 *  - Unrelated groups within a generation are separated by FAMILY_GAP.
 */
export function layoutGraph(
	nodes: Node[],
	parentEdges: { source: string; target: string }[],
	partnershipEdges: { source: string; target: string }[],
): Node[] {
	if (nodes.length === 0) return nodes

	const nodeIds = nodes.map((n) => n.id)

	// ── Build adjacency maps ──────────────────────────────────────────────────
	const parentsOf: Record<string, string[]> = {}
	const childrenOf: Record<string, string[]> = {}
	const partnersOf: Record<string, string[]> = {}

	for (const e of parentEdges) {
		;(parentsOf[e.target] ??= []).push(e.source)
		;(childrenOf[e.source] ??= []).push(e.target)
	}
	for (const e of partnershipEdges) {
		;(partnersOf[e.source] ??= []).push(e.target)
		;(partnersOf[e.target] ??= []).push(e.source)
	}

	// ── Assign generation numbers via BFS from roots ──────────────────────────
	const genOf: Record<string, number> = {}
	const roots = nodeIds.filter((id) => !parentsOf[id]?.length)
	const queue: string[] = [...roots]
	for (const id of roots) genOf[id] = 0

	while (queue.length > 0) {
		const id = queue.shift()!
		for (const childId of childrenOf[id] ?? []) {
			if (genOf[childId] === undefined) {
				genOf[childId] = genOf[id] + 1
				queue.push(childId)
			}
		}
	}
	// Nodes not reachable from roots (isolated or partner-only) default to 0
	for (const id of nodeIds) genOf[id] ??= 0

	// ── Group by generation ───────────────────────────────────────────────────
	const byGen: Record<number, string[]> = {}
	for (const id of nodeIds) (byGen[genOf[id]] ??= []).push(id)
	const maxGen = Math.max(...Object.keys(byGen).map(Number))

	// ── Position each generation ──────────────────────────────────────────────
	const posMap: Record<string, { x: number; y: number }> = {}

	for (let g = 0; g <= maxGen; g++) {
		const members = byGen[g] ?? []
		const y = g * Y_GAP

		// Sort members by the average x of their parents so siblings cluster
		// under their parents. Members with no positioned parents go last.
		const parentCentreX = (id: string): number => {
			const ps = (parentsOf[id] ?? []).filter((p) => posMap[p])
			if (ps.length === 0) return Infinity
			return ps.reduce((s, p) => s + posMap[p].x, 0) / ps.length
		}
		const sorted = [...members].sort((a, b) => parentCentreX(a) - parentCentreX(b))

		// Build ordered groups: [solo] or [partner1, partner2]
		const seen = new Set<string>()
		const groups: string[][] = []

		for (const id of sorted) {
			if (seen.has(id)) continue
			seen.add(id)

			const partner = (partnersOf[id] ?? []).find(
				(pid) => genOf[pid] === g && !seen.has(pid),
			)
			if (partner) {
				seen.add(partner)
				groups.push([id, partner])
			} else {
				groups.push([id])
			}
		}

		// Compute width of each group
		const groupW = (gr: string[]) =>
			gr.length === 2 ? NODE_W * 2 + COUPLE_GAP : NODE_W

		const totalW =
			groups.reduce((s, gr) => s + groupW(gr), 0) +
			Math.max(0, groups.length - 1) * FAMILY_GAP

		// Place groups left-to-right, centred at x = 0
		let x = -totalW / 2

		for (const gr of groups) {
			if (gr.length === 2) {
				posMap[gr[0]] = { x, y }
				posMap[gr[1]] = { x: x + NODE_W + COUPLE_GAP, y }
				x += groupW(gr) + FAMILY_GAP
			} else {
				posMap[gr[0]] = { x, y }
				x += NODE_W + FAMILY_GAP
			}
		}
	}

	return nodes.map((n) => ({ ...n, position: posMap[n.id] ?? { x: 0, y: 0 } }))
}
