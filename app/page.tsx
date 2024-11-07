import styles from "./page.module.css";
import FamilyList from '@/components/FamilyList'
import { Suspense } from 'react'

export default function Home() {
	return (
		<main className={styles.page}>
			<Suspense
				fallback={
					<div role="status" className="flex justify-center items-center p-4">
						<span className="text-gray-600">Loading...</span>
					</div>
				}
			>
				<FamilyList />
			</Suspense>
		</main>
	)
}
