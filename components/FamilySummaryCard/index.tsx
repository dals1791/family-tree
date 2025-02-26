'use client'
import { useRouter } from 'next/navigation'
import { FamilyMember } from '@/types/__generated__/graphql'
import styles from './FamilySummaryCard.module.css'

type FamilySummaryCardProps = {
	id: string
	name: string
	members: FamilyMember[]
}

const FamilySummaryCard = ({ id = '', name = '', members = [] }: FamilySummaryCardProps) => {
	const router = useRouter()

	const handleClick = (): void => {
		router.push(`family/${id}`)
	}

	return (
		<div className={styles.familyCardContainer} onClick={handleClick}>
			<h2>{name}</h2>
			<ul className={styles.familyMembersContainer}>
				{members.map((member) => (
					<li key={`familyMember-${member.id}`}>
						{member.firstName} {member.lastName}
					</li>
				))}
			</ul>
		</div>
	)
}

export default FamilySummaryCard
