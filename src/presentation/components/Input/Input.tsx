import React, { InputHTMLAttributes } from 'react'

import { InputStyled, IInputStyledProps } from './Input.styles'

export const Input = (
  props: InputHTMLAttributes<Element> & IInputStyledProps
) => {
  const { children } = props

  return <InputStyled {...props}>{children}</InputStyled>
}
