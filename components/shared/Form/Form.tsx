'use client'
import React, { useState, ReactNode } from 'react'
import { FormType } from '@/types/form'
import {
    CreateFamily,
    CreateFamilyMember,
    FormTypeSelector
} from './partials'

const GenericForm = (): ReactNode => {
    const [formType, setFormType] = useState<string>('FAMILY')

	const renderForm = (): ReactNode => {
		switch (formType) {
			case FormType.FAMILY:
				return <CreateFamily  />
			case FormType.FAMILY_MEMBER:
				return <CreateFamilyMember />
			default:
				return <CreateFamily />
		}
	}

	return (
		<div className="">
            <FormTypeSelector selectedType={formType} setFormType={setFormType} />
			{renderForm()}
		</div>
	)
}

export { GenericForm }