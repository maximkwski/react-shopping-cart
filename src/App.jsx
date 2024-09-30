import { useState } from 'react'
import { ThemeProvider } from "styled-components"
import GlobalStyles from './components/styles/Global.styled'
import Header from './components/Header'

function App() {

  const theme = {
    colors: {
      header: '#ebfbff',
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
      </>
    </ThemeProvider>
  )
}

export default App
