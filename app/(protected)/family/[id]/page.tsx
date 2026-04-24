import { createClient } from '@/lib/supabase/server'
import { listMembers, getGraph } from '@/lib/api'
import TreeDetailClient from './TreeDetailClient'

type Props = { params: Promise<{ id: string }> }

async function getTreeName(treeId: string, token: string): Promise<string> {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/trees/${treeId}`, {
			headers: { Authorization: `Bearer ${token}` },
			cache: 'no-store',
		})
		if (!res.ok) return 'Family Tree'
		const tree = await res.json()
		return tree.name ?? 'Family Tree'
	} catch {
		return 'Family Tree'
	}
}

export default async function FamilyDetailPage({ params }: Props) {
	const { id: treeId } = await params
	const supabase = await createClient()
	const { data: { session } } = await supabase.auth.getSession()

	if (!session) return <p>Not authenticated.</p>

	const token = session.access_token

	// Fetch tree name + members in parallel
	const [treeName, members] = await Promise.all([
		getTreeName(treeId, token),
		listMembers(treeId, token).catch(() => []),
	])

	// Fetch graph anchored on first member (to get edges)
	let parentEdges: { childId: string; parentId: string }[] = []
	let partnershipEdges: { id: string; member1Id: string; member2Id: string; type?: any; startDate?: string; endDate?: string }[] = []

	if (members.length > 0) {
		try {
			const graph = await getGraph(treeId, token, members[0].id)
			parentEdges = graph.parentEdges
			partnershipEdges = graph.partnershipEdges
		} catch (err) {
			console.error('[FamilyDetailPage] graph fetch failed:', err)
		}
	}

	return (
		<TreeDetailClient
			treeId={treeId}
			treeName={treeName}
			token={token}
			initialMembers={members}
			initialParentEdges={parentEdges}
			initialPartnershipEdges={partnershipEdges}
		/>
	)
}
