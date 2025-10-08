import './styles/theme.css'
import './styles/global.css'
import { Container } from './components/Container/Container'
import { Heading } from './components/Heading/Heading'

export function App() {

  return (
    <>
      <Container>
        <Heading>
          LOGO
        </Heading>
      </Container>

      <Container>
        <Heading>
          MENU
        </Heading>
      </Container>
    </>
  )
}

