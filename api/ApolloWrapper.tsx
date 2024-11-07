'use client'
// ^ this file needs the "use client" pragma

import { HttpLink, ApolloLink } from '@apollo/client'
import {
	ApolloNextAppProvider,
	ApolloClient,
	InMemoryCache,
	SSRMultipartLink
} from '@apollo/experimental-nextjs-app-support'

function makeClient() {
	const httpLink = new HttpLink({
		uri: 'http://localhost:4000',
		fetchOptions: { cache: 'no-store' }
	})

	return new ApolloClient({
		cache: new InMemoryCache(),
		link:
			typeof window === 'undefined'
				? ApolloLink.from([
						new SSRMultipartLink({
							stripDefer: true
						}),
						httpLink
					])
				: httpLink
	})
}

// you need to create a component to wrap your app in
export function ApolloWrapper({ children }: React.PropsWithChildren) {
	return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>
}
