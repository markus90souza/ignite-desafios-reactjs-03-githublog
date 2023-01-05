import { Container } from './styles'

interface PostProps {}

export function Post({}: PostProps) {
  return (
    <Container>
      <header>
        <strong>JavaScript data types and data structures</strong>
        <span>Há 1 dia</span>
      </header>

      <p>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
      </p>
    </Container>
  )
}
