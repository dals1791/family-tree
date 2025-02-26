import { Family, QueryFamiliesArgs } from '../types/__generated__/graphql'
import { GET_ALL_FAMILIES, GET_FAMILY } from './graphql'
import { query } from '@/api/ApolloClient'

interface GetFamiliesData {
	families: Family[]
}

export const getAllFamilies = async () => {
	const { data } = await query<GetFamiliesData>({ query: GET_ALL_FAMILIES })
	return data.families
}

export const getFamily = async (familyId: string) => {
	try {
		const { data } = await query<GetFamiliesData, QueryFamiliesArgs>({
			query: GET_FAMILY,
			variables: {
				where: {
					id: familyId
				}
			}
		})
	
		return data?.families?.[0]
	} catch (err) {
		console.error(err)
	}
}
