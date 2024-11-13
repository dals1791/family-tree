export enum FormType {
	FAMILY = 'FAMILY',
	FAMILY_MEMBER = 'FAMILY_MEMBER',
	PARTNERSHIP = 'PARTNERSHIP'
}

export interface BaseFormProps {
	onSuccess?: () => void
	onError?: (error: string) => void
}

export interface FormState {
	error: string | null
	success: string | null
	loading: boolean
}
