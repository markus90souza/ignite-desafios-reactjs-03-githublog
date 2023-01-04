import { FaBuilding, FaGithub, FaUserFriends } from 'react-icons/fa'
import { ExternalLink } from '../../../../components/ExternalLink'
import {
  Container,
  Avatar,
  ProfileInfo,
  ProfileHeader,
  Bio,
  ProfileFooter,
} from './styles'

export function Profile() {
  return (
    <Container>
      <Avatar src="https://github.com/markus90souza.png" />

      <ProfileInfo>
        <ProfileHeader>
          <h2>Cameron Williamson</h2>
          <ExternalLink title="github" href="#" />
        </ProfileHeader>

        <Bio>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga atque
          natus nesciunt porro eius? Voluptatum aut facere, ab maiores
          dignissimos hic ducimus nesciunt commodi nobis? Atque illo cum minus
          aspernatur.
        </Bio>

        <ProfileFooter>
          <li>
            <FaGithub />
            markus
          </li>

          <li>
            <FaBuilding />
            markus
          </li>

          <li>
            <FaUserFriends />
            markus
          </li>
        </ProfileFooter>
      </ProfileInfo>
    </Container>
  )
}
