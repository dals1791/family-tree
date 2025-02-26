import { getFamily } from '@/api'
import { decodeId } from '@/utils/slugs'
// import styles from './familyDetailPage.css'

type familyDetailPageProps = {
	familyId: string
}

const FamilyDetailPage = async ({ familyId }: familyDetailPageProps) => {
	const decodedId = decodeId(familyId)
	const family = await getFamily(decodedId)
	console.log(family, decodedId)
	// const [familyMemberCount]
	// return (
	//     <div className={styles.familyMetaData}>
	// 			{/* If new family have create fields to create and connect the memebrs to the family */}
	// 			{/* IF update family, have family member search field. display relations, spouse, parents, children for single memeber. */}
	// 			<button
	// 				type="button"
	// 				className={styles.addFamilyMemberButton}
	// 				onClick={() => setFamilyMemberCount((prev) => prev + 1)}
	// 			>
	// 				+
	// 			</button>
	// 			{Array.from({ length: familyMemberCount }).map((_, i) => (
	// 				<CreateFamilyMember key={i} formCount={i} setFamilyMembers={setFamilyMembers} />
	//         ))}
	//     </div>
	// )
	return <div>{family?.name}</div>
}

export default FamilyDetailPage
