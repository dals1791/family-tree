import { Suspense } from 'react'
import { Family } from '@/types/__generated__/graphql'
import FamilySummaryCard from '@/components/FamilySummaryCard'
import { getAllFamilies } from '@/api'
import { encodeId } from '@/utils/slugs'
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
						const encodedId = encodeId(family.id)
						return <FamilySummaryCard key={encodedId} {...family} id={encodedId}/>
					})}
				</section>
			</Suspense>
		</main>
	)
}
