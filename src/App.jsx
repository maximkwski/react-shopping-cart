import { ThemeProvider } from "styled-components"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from './components/styles/Container.styled'
import { StyledMain } from './components/styles/Main.styled'
import GlobalStyles from './components/styles/Global.styled'
import Header from './components/Header'
import Cart from './components/Cart'
import Card from './components/Card'
import data from '../data.json'
import { CartProvider } from './CartContext';
import { StyledCardList } from './components/styles/CardList.styled'
import { useState, useEffect } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const theme = {
    colors: {
      body: 'hsl(20, 50%, 98%)',
      footer: '#003333'
    },
    mobile: '375px',
    tablet: '768px',
    desktop: '1024px'
  }

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <GlobalStyles />
        <Router>
          <Header />
          <Container>
          {isMobile ? (
              <Routes>
                {/* Home page for mobile */}
                <Route 
                  path="/" 
                  element={
                    <StyledMain>
                      <StyledCardList>
                        {data.map((item, index) => (
                          <Card key={index} item={item} />
                        ))}
                      </StyledCardList>
                    </StyledMain>
                  }
                />
                {/* Separate Cart Page for mobile */}
                <Route path="/cart" element={<Cart />} />
              </Routes>
            ) : (
              // For desktop/tablet, render card list and cart on the same page
              <StyledMain>
                <StyledCardList>
                  {data.map((item, index) => (
                    <Card key={index} item={item} />
                  ))}
                </StyledCardList>
                <Cart />
              </StyledMain>
            )}
          </Container>
        </Router>
      </CartProvider>
    </ThemeProvider>
  )
}

export default App
