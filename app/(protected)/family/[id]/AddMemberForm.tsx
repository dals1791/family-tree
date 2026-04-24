'use client'

import { useState } from 'react'
import { createMember, type Member } from '@/lib/api'
import styles from './TreeDetail.module.css'

interface Props {
	treeId: string
	token: string
	onCreated: (member: Member) => void
}

export default function AddMemberForm({ treeId, token, onCreated }: Props) {
	const [open, setOpen] = useState(false)
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [gender, setGender] = useState('')
	const [birthYear, setBirthYear] = useState('')
	const [error, setError] = useState<string | null>(null)
	const [loading, setLoading] = useState(false)

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault()
		if (!firstName.trim()) return
		setLoading(true)
		setError(null)
		try {
			const member = await createMember(treeId, token, {
				firstName: firstName.trim(),
				lastName: lastName.trim() || undefined,
				gender: (gender as Member['gender']) || undefined,
				birthYear: birthYear ? parseInt(birthYear) : undefined,
			})
			onCreated(member)
			setFirstName('')
			setLastName('')
			setGender('')
			setBirthYear('')
			setOpen(false)
		} catch (err: any) {
			setError(err.message)
		} finally {
			setLoading(false)
		}
	}

	if (!open) {
		return (
			<button className={styles.addButton} onClick={() => setOpen(true)}>
				+ Add Member
			</button>
		)
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<h3 className={styles.formTitle}>New Member</h3>

			<div className={styles.formRow}>
				<input
					className={styles.input}
					placeholder="First name *"
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
					required
				/>
				<input
					className={styles.input}
					placeholder="Last name"
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
				/>
			</div>

			<div className={styles.formRow}>
				<select
					className={styles.select}
					value={gender}
					onChange={(e) => setGender(e.target.value)}
				>
					<option value="">Gender (optional)</option>
					<option value="MALE">Male</option>
					<option value="FEMALE">Female</option>
					<option value="OTHER">Other</option>
					<option value="PREFER_NOT_TO_SAY">Prefer not to say</option>
				</select>
				<input
					className={styles.input}
					placeholder="Birth year"
					type="number"
					value={birthYear}
					onChange={(e) => setBirthYear(e.target.value)}
				/>
			</div>

			{error && <p className={styles.error}>{error}</p>}

			<div className={styles.formActions}>
				<button type="submit" className={styles.submitButton} disabled={loading}>
					{loading ? 'Adding…' : 'Add'}
				</button>
				<button type="button" className={styles.cancelButton} onClick={() => setOpen(false)}>
					Cancel
				</button>
			</div>
		</form>
	)
}
