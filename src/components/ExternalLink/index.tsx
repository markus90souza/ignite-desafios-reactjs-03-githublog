import { ComponentProps } from 'react'
import { Container } from './styles'

import { FaExternalLinkAlt } from 'react-icons/fa'

type ExternalLinkProps = ComponentProps<typeof Container> & {
  title: string
}

export function ExternalLink({ title, ...rest }: ExternalLinkProps) {
  return (
    <Container {...rest}>
      {title} <FaExternalLinkAlt />
    </Container>
  )
}
