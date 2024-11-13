import { Family } from '@/types/family'
import { GET_ALL_FAMILIES } from './graphql'
import { query } from '@/api/ApolloClient'

interface GetFamiliesData {
	getFamilies: Family[]
}

export const getAllFamilies = async () => {
	const { data } = await query<GetFamiliesData>({ query: GET_ALL_FAMILIES })
	console.log('DATA', data)
}
