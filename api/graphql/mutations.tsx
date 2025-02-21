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

export const CREATE_FAMILY_MEMBERS = gql(`
	mutation CreateFamilyMembers($input: [FamilyMemberCreateInput!]!) {
		createFamilyMembers(input: $input) {
			id
			firstName
			lastName
		}
	}
`) as DocumentNode

// Type assertion using DocumentType
export type CreateFamilyMutation = DocumentType<typeof CREATE_FAMILY>
export type CreateFamilyMemberMutation = DocumentType<typeof CREATE_FAMILY_MEMBERS>
