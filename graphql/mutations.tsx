import { gql } from '@/types/__generated__'
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
