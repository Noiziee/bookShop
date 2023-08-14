import { Container } from '../Container'
import { Header } from '../Header'
import { Main } from '../Main'
import { Footer } from '../Footer'


export function Layout() {
  return (
    <div className="layout">
      <Header />
      <Main>
        <Container>
          Main
        </Container>
      </Main>
      <Footer />
    </div>
  )
}