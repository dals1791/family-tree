import React, { FC, useState } from 'react'
import { FormType } from '@/types/form'
import { cn } from '@/utils/classNames'
import styles from './formTypeSelector.module.css'

const FormTypeOptions = [
	{
		type: FormType.FAMILY,
		label: 'Create Family',
		description: 'Create a new family group',
		disabled: false
	},
	{
		type: FormType.FAMILY_MEMBER,
		label: 'Add Family Member',
		description: 'Add a new member to an existing family',
		disabled: false
	}
]

const FormTypeSelector: FC<{
	selectedType: string
	setFormType: (type: string) => void
}> = ({ selectedType = 'FAMILY', setFormType = () => {} }) => {
	const [selected, setSelected] = useState<string>(selectedType)

	const handleClick = (type: string) => {
		setFormType(type)
		setSelected(type)
	}

	const handlekeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, type: string) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault()
			handleClick(type)
		}
	}

	const formTypeSelectorContainerClasses = cn(styles.formSelectorContainer)
	const buttonClasses = cn(styles.button)

	return (
		<div
			role="radiogroup"
			aria-label="Form type selection"
			className={formTypeSelectorContainerClasses}
		>
			{FormTypeOptions.map(({ type, label, disabled }) => {
				const isSelected = selected === type
				const id = `form-type-${type.toLowerCase()}`
				return (
					<button
						key={type}
						id={id}
						onClick={() => handleClick(type)}
						onKeyDown={(e) => handlekeyDown(e, type)}
						className={buttonClasses}
						data-style-active={isSelected}
						data-style-type={type}
						role="radio"
						aria-checked={isSelected}
						aria-disabled={disabled}
						aria-labelledby={`${id}--label`}
						tabIndex={disabled ? -1 : isSelected ? 0 : -1}
						disabled={disabled}
					>
						<span id={`${id}--label`}>{label}</span>
					</button>
				)
			})}
		</div>
	)
}

export { FormTypeSelector }
