export function encodeId(id: string): string {
	// Simple encoding example - use more secure methods in production
	return Buffer.from(id)
		.toString('base64')
		.replace(/=/g, '')
		.replace(/\+/g, '-')
		.replace(/\//g, '_')
}

export function decodeId(encodedId: string): string {
	// Add padding if needed
	const padding = encodedId.length % 4
	const padded = padding ? encodedId + '='.repeat(4 - padding) : encodedId
	const normalized = padded.replace(/-/g, '+').replace(/_/g, '/')
	return Buffer.from(normalized, 'base64').toString()
}
