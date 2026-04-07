'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import styles from './NavBar.module.css'

interface NavBarProps {
	userEmail: string
}

export default function NavBar({ userEmail }: NavBarProps) {
	const router = useRouter()

	async function handleSignOut() {
		const supabase = createClient()
		await supabase.auth.signOut()
		router.push('/auth/login')
		router.refresh()
	}

	return (
		<nav className={styles.nav}>
			<Link href="/" className={styles.brand}>
				Family Tree
			</Link>
			<div className={styles.actions}>
				<span className={styles.userEmail}>{userEmail}</span>
				<button className={styles.signOutButton} onClick={handleSignOut}>
					Sign out
				</button>
			</div>
		</nav>
	)
}
