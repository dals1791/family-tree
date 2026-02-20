import { getFamily } from '@/services'
// import styles from './familyDetailPage.css'

type familyDetailPageProps = {
	familyId: string
}

const FamilyDetailPage = async ({ familyId }: familyDetailPageProps) => {
	const family = await getFamily(familyId)
	console.log(family, familyId)
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
