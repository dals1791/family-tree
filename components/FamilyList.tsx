import { getAllFamilies } from '@/api'

const FamilyList = async () => {
	await getAllFamilies()

	return (
		<section>
			
		</section>
	)
}

export default FamilyList