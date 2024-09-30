import { useState } from 'react'
import { ThemeProvider } from "styled-components"
import { Container } from './components/styles/Container.styled'
import GlobalStyles from './components/styles/Global.styled'
import Header from './components/Header'
import Card from './components/Card'
import data from '../data.json'


function App() {

  const theme = {
    colors: {
      body: 'hsl(20, 50%, 98%)',
      footer: '#003333'
    },
    mobile: '768px'
  }

  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyles />
      <Header />
      <Container>
          {data.map((item, index) => (
            <Card key={index} item={item}/>
          ))}
      </Container>
      </>
    </ThemeProvider>
  )
}

export default App
