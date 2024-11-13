import { getAllFamilies } from '@/api'
import { GenericForm } from './shared'

const FamilyList = async () => {
	await getAllFamilies()

	return (
		<section>
			<div>HelloWorld</div>
			<GenericForm />
		</section>
	)
}

export default FamilyList