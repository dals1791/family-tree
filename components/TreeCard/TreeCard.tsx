import Link from 'next/link'
import styles from './TreeCard.module.css'

type AccessRole = 'OWNER' | 'EDITOR' | 'VIEWER'

interface TreeCardProps {
	id: string
	name: string
	description: string | null
	role: AccessRole
	createdAt: string
}

const roleLabel: Record<AccessRole, string> = {
	OWNER: 'Owner',
	EDITOR: 'Editor',
	VIEWER: 'Viewer'
}

export default function TreeCard({ id, name, description, role, createdAt }: TreeCardProps) {
	const year = new Date(createdAt).getFullYear()

	return (
		<Link href={`/family/${id}`} className={styles.card}>
			<div className={styles.header}>
				<h3 className={styles.name}>{name}</h3>
				<span className={`${styles.role} ${styles[role.toLowerCase() as Lowercase<AccessRole>]}`}>
					{roleLabel[role]}
				</span>
			</div>
			{description && <p className={styles.description}>{description}</p>}
			<p className={styles.meta}>Created {year}</p>
		</Link>
	)
}
