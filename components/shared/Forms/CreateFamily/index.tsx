'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useMutation } from '@apollo/client'
import { CREATE_FAMILY } from '@/api/graphql'
import { CreateFamilyMutation } from '@/types/__generated__/graphql'
import styles from './FamilyForm.module.css'

interface CreateFamilyMutationVariables {
	input: Array<{
		name: string
	}>
}

const CreateFamilyForm = () => {
	const router = useRouter()
	const [familyName, setFamilyName] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const [createFamily] = useMutation<CreateFamilyMutation, CreateFamilyMutationVariables>(
		CREATE_FAMILY
	)

	const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		setIsLoading(true)
		try {
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
			const newFamilyId = createFamilyResponse?.data?.createFamilies?.families[0]?.id
			if (newFamilyId) {
				router.push(`/family/${newFamilyId}`)
			}
		} catch (error) {
			const errorTitle = 'ERROR CREATING FAMILY'
			console.error(errorTitle, error)
		} finally {
			setIsLoading(false)
			setFamilyName('')
		}
	}

	return (
		<div className={styles.familyManagementContainer}>
			<div>
				<h2>Family Management</h2>
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
				<button type="button" onClick={handleSubmit}>
					Create Family
				</button>
			</div>
		</div>
	)
}

export { CreateFamilyForm }
