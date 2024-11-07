import { gql } from '@/types/__generated__'

export const GET_ALL_FAMILIES = gql(`
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
