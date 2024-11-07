// import { ApolloWrapper } from '@/api/ApolloWrapper'
import './globals.css'

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body>
				{/* Ensure provider doesn't break HTML structure */}
				{/* <ApolloWrapper>{children}</ApolloWrapper> */}
				{children}
			</body>
		</html>
	)
}
