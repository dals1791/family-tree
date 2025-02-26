import React, { useState, Dispatch, SetStateAction } from 'react'
import styles from './CreateFamilyMemberForm.module.css'

interface RadioOption {
	value: string
	label: string
}

interface FamilyMember {
	firstName: string
	lastName: string
	relation: string
}

interface CreateFamilyMemberProps {
	setFamilyMembers: Dispatch<SetStateAction<FamilyMember[]>>
	formCount: number
}

const initialFamilyMember: FamilyMember = {
	firstName: '',
	lastName: '',
	relation: ''
}

const CreateFamilyMemberForm: React.FC<CreateFamilyMemberProps> = ({
	setFamilyMembers,
	formCount
}) => {
	const [familyMemberData, setFamilyMemberData] = useState<FamilyMember>(initialFamilyMember)

	const radioOptions: RadioOption[] = [
		{ value: `parent-${formCount}`, label: 'Parent' },
		{ value: `child-${formCount}`, label: 'Child' }
	]

	const handleAddFamilyMember = () => {
		setFamilyMembers((prev) => [...prev, { ...familyMemberData }])
	}

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target
		const matchedKey = name?.match(/^([^-]+)/)
		const dataName = matchedKey ? matchedKey[1] : name
		setFamilyMemberData((prev) => ({
			...prev,
			[dataName]: value
		}))
	}

	return (
		<div className={styles.familyMember}>
			<div>
				<div className={styles.relation}>
					<label htmlFor="firstName">First Name</label>
					<input
						type="text"
						id={`firstName-${formCount}`}
						name={`firstName-${formCount}`}
						value={familyMemberData.firstName}
						onChange={handleInputChange}
					/>
				</div>
				<div className={styles.relation}>
					<label htmlFor={`lastName-${formCount}`}>Last Name</label>
					<input
						type="text"
						id={`lastName-${formCount}`}
						name={`lastName-${formCount}`}
						value={familyMemberData.lastName}
						onChange={handleInputChange}
					/>
				</div>
			</div>

			<div className={styles.relationContainer}>
				{radioOptions.map((option) => (
					<div key={option.value}>
						<label htmlFor={option.value}>{option.label}</label>
						<input
							type="radio"
							id={option.value}
							value={option.value}
							name={`relation-${formCount}`}
							checked={familyMemberData.relation === option.value}
							onChange={handleInputChange}
						/>
					</div>
				))}
			</div>

			<button
				className={styles.addFamilyMemberButton}
				type="button"
				onClick={handleAddFamilyMember}
			>
				+
			</button>
		</div>
	)
}

export { CreateFamilyMemberForm }
