import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import NavBar from '@/components/NavBar/NavBar'

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
	const supabase = await createClient()
	const {
		data: { user }
	} = await supabase.auth.getUser()

	if (!user) {
		redirect('/auth/login')
	}

	return (
		<>
			<NavBar userEmail={user.email ?? ''} />
			<main>{children}</main>
		</>
	)
}
