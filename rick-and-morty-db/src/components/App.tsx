import styled from 'styled-components'
import Title from './Title'
import Header from './Header'

const Container = styled.div`
width: 100vw;
height: 100vh;
background-color: #a6cccc;
`

function App() {

  return (
    <>
      <Container>
        <Header>
          <Title>Rick and Morty DB</Title>
        </Header>

      </Container>
    </>
  )
}

export default App
