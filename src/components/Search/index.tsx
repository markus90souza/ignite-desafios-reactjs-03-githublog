import { Container } from './styles'

export function Search() {
  return (
    <Container>
      <header>
        <strong>Publicações</strong>
        <span>6 publicações</span>
      </header>

      <input type="search" placeholder="Buscar conteúdo" />
    </Container>
  )
}
