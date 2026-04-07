import { createClient } from '@/lib/supabase/server'
import TreeCard from '@/components/TreeCard/TreeCard'
import styles from './page.module.css'

interface FamilyTreeWithRole {
	id: string
	name: string
	description: string | null
	role: 'OWNER' | 'EDITOR' | 'VIEWER'
	createdAt: string
}

async function getTrees(accessToken: string): Promise<FamilyTreeWithRole[]> {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/trees`, {
			headers: { Authorization: `Bearer ${accessToken}` },
			cache: 'no-store'
		})
		if (!res.ok) return []
		return res.json()
	} catch {
		return []
	}
}

export default async function HomePage() {
	const supabase = await createClient()
	const {
		data: { session }
	} = await supabase.auth.getSession()

	const trees = session ? await getTrees(session.access_token) : []

	return (
		<div className={styles.page}>
			<section className={styles.hero}>
				<h1 className={styles.heroTitle}>Your Family History, Connected</h1>
				<p className={styles.heroSubtitle}>
					Build and explore your family tree. Invite relatives to contribute, claim your place,
					and navigate generations at a glance.
				</p>
			</section>

			<section className={styles.treesSection}>
				<div className={styles.treesHeader}>
					<h2 className={styles.treesTitle}>My Trees</h2>
					<button className={styles.newTreeButton}>+ New Tree</button>
				</div>

				{trees.length > 0 ? (
					<div className={styles.grid}>
						{trees.map((tree) => (
							<TreeCard key={tree.id} {...tree} />
						))}
					</div>
				) : (
					<div className={styles.empty}>
						<p className={styles.emptyTitle}>No trees yet</p>
						<p className={styles.emptySubtitle}>
							Create your first family tree to get started.
						</p>
					</div>
				)}
			</section>
		</div>
	)
}
