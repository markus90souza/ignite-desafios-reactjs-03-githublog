import { Post } from '../../components/Post'
import { Search } from '../../components/Search'
import { Profile } from './components/Profile'
import { Container, PostsContainer } from './styles'

export function Home() {
  return (
    <Container>
      <Profile />
      <Search />

      <PostsContainer>
        <Post />
        <Post />
        <Post />

        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </PostsContainer>
    </Container>
  )
}
