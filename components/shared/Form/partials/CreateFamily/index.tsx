'use client'
import React, { useState, ReactNode } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_FAMILY, CreateFamilyMutation } from '@/api/graphql'

interface CreateFamilyMutationVariables {
	input: Array<{
		name: string
	}>
}

const CreateFamily = (): ReactNode => {
	const [familyName, setFamilyName] = useState<string>('')
	const [createFamily] = useMutation<
		CreateFamilyMutation,
		CreateFamilyMutationVariables
	>(
		CREATE_FAMILY
	)

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		// setLoading(true)

		try {
			const response = await createFamily({
				variables: {
					input: [
						{
							name: familyName
						}
					]
				}
			})

			console.log('RESPONSE_MUTATION', response)
			setFamilyName('')
		} catch (error) {
			console.log(error)
		} finally {
			// setLoading(false)
		}
	}
	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			<div className="space-y-2">
				<label htmlFor="familyName" className="block text-sm font-medium">
					Family Name
				</label>
				<input
					type="text"
					id="familyName"
					value={familyName}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setFamilyName(e.target.value)
					}}
					className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
					required
				/>
			</div>

			<button
				type="submit"
				className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
			>
				Create Family
			</button>
		</form>
	)
}

export { CreateFamily }
