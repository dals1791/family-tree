import classNames from 'classnames'

export const cn = (...inputs: classNames.ArgumentArray) => {
	return classNames(inputs)
}
