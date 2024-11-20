import { getAllFamilies } from '@/api'
import { FamilyForm } from './shared'

const FamilyList = async () => {
	await getAllFamilies()

	return (
		<section>
			<div>HelloWorld</div>
			<FamilyForm />
		</section>
	)
}

export default FamilyList