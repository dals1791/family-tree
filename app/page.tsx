import { Suspense } from 'react'
import { Family } from '@/types/__generated__/graphql'
import FamilySummaryCard from '@/components/FamilySummaryCard'
import { getAllFamilies } from '@/services'
import styles from './page.module.css'

export default async function Home() {
	const families = await getAllFamilies()

	return (
		<main className={styles.main}>
			<Suspense
				fallback={
					<div role="status" className="flex justify-center items-center p-4">
						<span className="text-gray-600">Loading...</span>
					</div>
				}
			>
				<section className={styles.familiesSection}>
					{families?.map((family: Family) => {
						return <FamilySummaryCard key={family.id} {...family} id={family.id} />
					})}
				</section>
			</Suspense>
		</main>
	)
}
