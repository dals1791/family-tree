// import { gql, DocumentType } from '@/types/__generated__'
import { gql } from '@apollo/client'
// import { DocumentNode } from '@apollo/client'

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

export const GET_FAMILY = gql`
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

// Export the type for use in other files
// export type GetFamilyQuery = DocumentType<typeof GET_FAMILY>
