const API_URL = process.env.NEXT_PUBLIC_API_URL!

export interface Member {
	id: string
	treeId: string
	firstName: string
	lastName?: string
	maidenName?: string
	gender?: 'MALE' | 'FEMALE' | 'OTHER' | 'PREFER_NOT_TO_SAY'
	birthYear?: number
	deathYear?: number
	birthDate?: string
	deathDate?: string
	status: 'UNCLAIMED' | 'INVITED' | 'CLAIMED'
	claimedByUserId?: string
	createdAt: string
	updatedAt: string
}

export type PartnershipType = 'MARRIAGE' | 'DOMESTIC_PARTNERSHIP' | 'DIVORCED' | 'SEPARATED'

export interface PartnershipEdge {
	id: string
	member1Id: string
	member2Id: string
	type?: PartnershipType
	startDate?: string
	endDate?: string
}

export interface ParentEdge {
	childId: string
	parentId: string
}

export interface FamilyGraphPayload {
	anchorId: string
	members: Member[]
	parentEdges: ParentEdge[]
	partnershipEdges: PartnershipEdge[]
}

// ── Helpers ───────────────────────────────────────────────────────────────────

async function apiFetch<T>(path: string, token: string, init?: RequestInit): Promise<T> {
	const res = await fetch(`${API_URL}${path}`, {
		...init,
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
			...(init?.headers ?? {}),
		},
	})
	if (!res.ok) {
		const body = await res.json().catch(() => ({}))
		throw new Error(body.error ?? `API error ${res.status}`)
	}
	if (res.status === 204) return undefined as T
	return res.json()
}

// ── Members ───────────────────────────────────────────────────────────────────

export function listMembers(treeId: string, token: string): Promise<Member[]> {
	return apiFetch(`/api/trees/${treeId}/members`, token)
}

export function createMember(
	treeId: string,
	token: string,
	data: Omit<Member, 'id' | 'treeId' | 'status' | 'claimedByUserId' | 'createdAt' | 'updatedAt'>,
): Promise<Member> {
	return apiFetch(`/api/trees/${treeId}/members`, token, {
		method: 'POST',
		body: JSON.stringify(data),
	})
}

// ── Relationships ─────────────────────────────────────────────────────────────

export function addParentChild(
	treeId: string,
	token: string,
	parentId: string,
	childId: string,
): Promise<void> {
	return apiFetch(`/api/trees/${treeId}/relationships/parent-child`, token, {
		method: 'POST',
		body: JSON.stringify({ parentId, childId }),
	})
}

export function removeParentChild(
	treeId: string,
	token: string,
	parentId: string,
	childId: string,
): Promise<void> {
	return apiFetch(`/api/trees/${treeId}/relationships/parent-child`, token, {
		method: 'DELETE',
		body: JSON.stringify({ parentId, childId }),
	})
}

export function createPartnership(
	treeId: string,
	token: string,
	data: { member1Id: string; member2Id: string; type?: PartnershipType },
): Promise<PartnershipEdge> {
	return apiFetch(`/api/trees/${treeId}/relationships/partnerships`, token, {
		method: 'POST',
		body: JSON.stringify(data),
	})
}

export function deletePartnership(
	treeId: string,
	token: string,
	partnershipId: string,
): Promise<void> {
	return apiFetch(`/api/trees/${treeId}/relationships/partnerships/${partnershipId}`, token, {
		method: 'DELETE',
	})
}

// ── Graph ─────────────────────────────────────────────────────────────────────

export function getGraph(treeId: string, token: string, anchorId: string): Promise<FamilyGraphPayload> {
	return apiFetch(`/api/trees/${treeId}/graph/${anchorId}`, token)
}
