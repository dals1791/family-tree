'use client'
import React, { useState, ReactNode } from 'react'
import classNames from 'classnames'
import { FormType } from '@/types/form'
import { CreateFamily, CreateFamilyMember } from './partials'
import styles from './FamilyForm.module.css'

const FamilyForm = (): ReactNode => {
	const [isNewFamily, setIsNewFamily] = useState<boolean>(true)
	const [familyName, setFamilyName] = useState<string>('')
	const [formType, setFormType] = useState<string>('CREATE')

	// const renderForm = (): ReactNode => {
	// 	switch (formType) {
	// 		case FormType.FAMILY:
	// 			return <CreateFamily  />
	// 		case FormType.FAMILY_MEMBER:
	// 			return <CreateFamilyMember />
	// 		default:
	// 			return <CreateFamily />
	// 	}
	// }

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		// setLoading(true)

		// try {
		// 	const response = await createFamily({
		// 		variables: {
		// 			input: [
		// 				{
		// 					name: familyName
		// 				}
		// 			]
		// 		}
		// 	})

		// 	console.log('RESPONSE_MUTATION', response)
		// 	setFamilyName('')
		// } catch (error) {
		// 	console.log(error)
		// } finally {
		// 	// setLoading(false)
		// }
	}

	const toggleClasses = classNames(styles.toggleSlider, {
		[styles.toggleSliderCreate]: formType === 'CREATE'
	})
	const toggleCreateClasses = classNames(styles.toggleButton, styles.toggleButton__create, {
		[styles.isSelected]: formType === 'CREATE'
	})
	const toggleUpdateClasses = classNames(styles.toggleButton, styles.toggleButton__update, {
		[styles.isSelected]: formType === 'UPDATE'
	})

	return (
		<div className={styles.familyManagementContainer}>
			<div>
				<h2>Family Management</h2>
				<div className={styles.formToggleContainer}>
					<button className={toggleCreateClasses} onClick={() => setFormType('CREATE')}>
						Create
					</button>
					<button className={toggleUpdateClasses} onClick={() => setFormType('UPDATE')}>
						Update
					</button>
					<div className={toggleClasses} />
				</div>
			</div>
			<div>
				<label htmlFor="familyName">Family Name</label>
				<input
					type="text"
					id="familyName"
					value={familyName}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setFamilyName(e.target.value)
					}}
					required
				/>
			</div>
			<div>
				{/* If new family have create fields to create and connect the memebrs to the family */}
				{/* IF update family, have family member search field. display relations, spouse, parents, children for single memeber. */}
				<div>
					<div>name</div>
					<div>+</div>
				</div>
			</div>
			<button>{isNewFamily ? 'create' : 'search'}</button>
		</div>
	)
}

export { FamilyForm }
