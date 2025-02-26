import { getAllFamilies } from '@/api'

const FamilyList = async () => {
	await getAllFamilies()

	return (
		<section>
			<div>HelloWorld</div>
		</section>
	)
}

export default FamilyList