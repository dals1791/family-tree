import { getAllFamilies } from '@/services'

const FamilyList = async () => {
	await getAllFamilies()

	return <section></section>
}

export default FamilyList
