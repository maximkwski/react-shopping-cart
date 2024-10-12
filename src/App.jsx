import { ThemeProvider } from "styled-components"
import { Container } from './components/styles/Container.styled'
import { StyledMain } from './components/styles/Main.styled'
import GlobalStyles from './components/styles/Global.styled'
import Header from './components/Header'
import Cart from './components/Cart'
import Card from './components/Card'
import data from '../data.json'
import { CartProvider } from './CartContext';
import { StyledCardList } from './components/styles/CardList.styled'

function App() {

  const theme = {
    colors: {
      body: 'hsl(20, 50%, 98%)',
      footer: '#003333'
    },
    mobile: '375px',
    tablet: '768px',
    desktop: '1024px'
  }

  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <GlobalStyles />
        <Header />
        <Container>
          <StyledMain>
            <StyledCardList >
                {data.map((item, index) => (
                  <Card key={index} item={item}/>
                ))}
            </StyledCardList>
            <Cart />
          </StyledMain>
        </Container>
      </CartProvider>
    </ThemeProvider>
  )
}

export default App
