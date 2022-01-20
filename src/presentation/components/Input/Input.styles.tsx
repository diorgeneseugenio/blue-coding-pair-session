import styled from 'styled-components'
import tw from 'twin.macro'

export interface IInputStyledProps {
  full?: boolean
}

export const InputStyled = styled.input(
  ({ full = true }: IInputStyledProps) => [
    tw`px-4 py-2 border`,
    full && tw`w-full`
  ]
)
