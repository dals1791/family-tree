import { Suspense } from 'react'
import FamilyDetailPage from '@/components/FamilyDetailPage'

type FamilyProps = {
	params: {
        id: string
    }
}

export default async function Page({ params }: FamilyProps) {
    const { id } = await params
	return (
		<main className="familyDetail_Page">
			Family Detail Page
			<Suspense
				fallback={
					<div className="flex justify-center items-center min-h-screen">
						<p className="text-lg">Loading...</p>
					</div>
				}
			>
				<FamilyDetailPage familyId={id} />
			</Suspense>
		</main>
	)
}
