'use client'
import React, { useState, ReactNode } from 'react'
import classNames from 'classnames'
import { useMutation } from '@apollo/client'
import { CREATE_FAMILY, CreateFamilyMutation } from '@/api/graphql'
import { CreateFamily, CreateFamilyMember } from './partials'
import styles from './FamilyForm.module.css'

interface CreateFamilyMutationVariables {
	input: Array<{
		name: string
	}>
}

const FamilyForm = (): ReactNode => {
	const [familyName, setFamilyName] = useState<string>('')
	const [formType, setFormType] = useState<string>('CREATE')
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const [createFamily] = useMutation<CreateFamilyMutation, CreateFamilyMutationVariables>(
		CREATE_FAMILY
	)

	const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		setIsLoading(true)
		try { 
			if (formType === 'CREATE') {
				const createFamilyResponse = await createFamily({
					variables: {
						input: [
							{
								name: familyName
							}
						]
					}
				})

				console.log('CREATE_FAMILY', createFamilyResponse)
			}

			if (formType === 'UPDATE') {
			}
		} catch (error) {
			const errorTitle = formType === 'CREATE' ? 'ERROR CREATING FAMILY' : 'ERROR UPDATING FAMILY'
			console.error(errorTitle, error)
		} finally {
			setIsLoading(false)
			if (formType === 'CREATE') {
				setFamilyName('')
			}
		}
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
			{isLoading && <h4>...isLoading</h4>}
			<div className={styles.familyNameInput}>
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
			<div className={styles.familyMetaData}>
				{/* If new family have create fields to create and connect the memebrs to the family */}
				{/* IF update family, have family member search field. display relations, spouse, parents, children for single memeber. */}
				<div className={styles.familyMember}>
					<div>name</div>
					<div>+</div>
				</div>
			</div>
			<button type="button" onClick={handleSubmit}>
				{formType === 'CREATE' ? 'Create Family' : 'UPDATE'}
			</button>
		</div>
	)
}

export { FamilyForm }
