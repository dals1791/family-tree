'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import GoogleButton from '@/components/GoogleButton/GoogleButton'
import styles from './signup.module.css'

export default function SignupForm() {
	const router = useRouter()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState<string | null>(null)
	const [loading, setLoading] = useState(false)
	const [submitted, setSubmitted] = useState(false)

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault()
		setError(null)
		setLoading(true)

		const supabase = createClient()
		const { data, error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `${window.location.origin}/auth/callback`
			}
		})

		if (error) {
			setError(error.message)
			setLoading(false)
			return
		}

		// With email confirmation on, Supabase silently "succeeds" for existing emails
		// but returns a user with no identities to avoid enumeration attacks.
		// Surface a clear message instead of leaving the user confused.
		if (data.user?.identities?.length === 0) {
			setError('An account with this email already exists.')
			setLoading(false)
			return
		}

		// Email confirmation is disabled — session is returned immediately
		if (data.session) {
			router.push('/')
			router.refresh()
			return
		}

		setSubmitted(true)
	}

	if (submitted) {
		return (
			<div className={styles.page}>
				<div className={styles.card}>
					<h1 className={styles.title}>Check your email</h1>
					<p className={styles.confirmText}>
						We sent a confirmation link to <strong>{email}</strong>. Click it to finish
						creating your account.
					</p>
					<p className={styles.footer}>
						Wrong address?{' '}
						<button className={styles.link} onClick={() => setSubmitted(false)}>
							Go back
						</button>
					</p>
				</div>
			</div>
		)
	}

	return (
		<div className={styles.page}>
			<div className={styles.card}>
				<h1 className={styles.title}>Create account</h1>
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
							autoComplete="new-password"
							minLength={6}
						/>
					</label>
					{error && <p className={styles.error}>{error}</p>}
					<button className={styles.button} type="submit" disabled={loading}>
						{loading ? 'Creating account…' : 'Create account'}
					</button>
				</form>
				<p className={styles.footer}>
					Already have an account?{' '}
					<Link href="/auth/login" className={styles.link}>
						Sign in
					</Link>
				</p>
			</div>
		</div>
	)
}
