// 'use client'
// import { useQuery } from '@apollo/client';
import { Family } from '@/types/family';
import { GET_ALL_FAMILIES } from '@/api/graphql/queries'
import { query } from '@/api/ApolloClient'
// import { useSuspenseQuery } from '@apollo/client'

interface GetFamiliesData {
  getFamilies: Family[];
}

const FamilyList = async () => {
	// const { data } = useSuspenseQuery<GetFamiliesData>(GET_ALL_FAMILIES)
	const { data } = await query<GetFamiliesData>({ query: GET_ALL_FAMILIES })
	console.log('DATA', data)

	return <section>HelloWorld</section>
}

export default FamilyList