import { gql, DocumentType } from '@/types/__generated__'
import { DocumentNode } from '@apollo/client'

export const CREATE_FAMILY = gql(`
	mutation CreateFamily($input: [FamilyCreateInput!]!) {
    	createFamilies(input: $input) {
			families {
				id
				name
				members {
					id
					firstName
				}
			}
		}
	}
`) as DocumentNode 


// export const ADD_FAMILY_MEMBER = gql(`
// 	mutation AddFamilyMember(
// 		$firstName: String!
// 		$lastName: String!
// 		$birthDate: Date
// 		$gender: Gender
// 		$familyId: ID!
// 	) {
// 		createFamilyMember(
// 			firstName: $firstName
// 			lastName: $lastName
// 			birthDate: $birthDate
// 			gender: $gender
// 			families: { connect: { where: { id: $familyId } } }
// 		) {
// 			id
// 			firstName
// 			lastName
// 		}
// 	}
// `)

// Type assertion using DocumentType
export type CreateFamilyMutation = DocumentType<typeof CREATE_FAMILY>
