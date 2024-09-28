import { useState } from 'react'
import { ThemeProvider } from "styled-components"
import GlobalStyles from './components/styles/Global.styled'

function App() {

  const theme = {
    colors: {
      header: '#ebfbff',
      body: '#fff',
      footer: '#003333'
    },
    mobile: '768px'
  }

  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyles />
      <h1>Shopping Cart</h1>
      </>
    </ThemeProvider>
  )
}

export default App
