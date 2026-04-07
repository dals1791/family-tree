'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import GoogleButton from '@/components/GoogleButton/GoogleButton'
import styles from './login.module.css'

export default function LoginForm() {
	const router = useRouter()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState<string | null>(null)
	const [loading, setLoading] = useState(false)

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault()
		setError(null)
		setLoading(true)

		const supabase = createClient()
		const { error } = await supabase.auth.signInWithPassword({ email, password })

		if (error) {
			setError(error.message)
			setLoading(false)
			return
		}

		router.push('/')
		router.refresh()
	}

	return (
		<div className={styles.page}>
			<div className={styles.card}>
				<h1 className={styles.title}>Sign in</h1>
				<GoogleButton />
				<div className={styles.divider}>
					<span>or</span>
				</div>
				<form onSubmit={handleSubmit} className={styles.form}>
					<label className={styles.label}>
						Email
						<input
							className={styles.input}
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							autoComplete="email"
						/>
					</label>
					<label className={styles.label}>
						Password
						<input
							className={styles.input}
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							autoComplete="current-password"
						/>
					</label>
					{error && <p className={styles.error}>{error}</p>}
					<button className={styles.button} type="submit" disabled={loading}>
						{loading ? 'Signing in…' : 'Sign in'}
					</button>
				</form>
				<p className={styles.footer}>
					No account?{' '}
					<Link href="/auth/signup" className={styles.link}>
						Sign up
					</Link>
				</p>
			</div>
		</div>
	)
}
