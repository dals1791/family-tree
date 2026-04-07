type Props = { params: Promise<{ id: string }> }

export default async function FamilyDetailPage({ params }: Props) {
	const { id } = await params
	return (
		<div style={{ padding: '2rem' }}>
			<h2>Family Tree</h2>
			<p>Tree ID: {id}</p>
		</div>
	)
}
