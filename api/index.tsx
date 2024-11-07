import { GET_ALL_FAMILIES } from './graphql/queries'
import { useQuery } from '@apollo/client'

export const getAllFamilies = async () => {
    const { loading, data } = useQuery(
        GET_ALL_FAMILIES
    )
    console.log(loading, data)
}