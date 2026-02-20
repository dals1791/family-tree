import { gql as generatedGql } from '@/types/__generated__'
import { gql as apolloGql } from '@apollo/client'

export const GET_ALL_FAMILIES = generatedGql(`
	query GetAllFamilies {
		families {
			id
			name
			members {
				id
				firstName
				lastName
			}
		}
	}
`)

export const GET_FAMILY = apolloGql`
	query GetFamily($where: FamilyWhere) {
		families(where: $where) {
			id
			name
			members {
				id
				firstName
				lastName
			}
		}
	}
`
