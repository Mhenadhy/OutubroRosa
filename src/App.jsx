import { useState } from 'react'
import './App.css'
import styled, { createGlobalStyle } from "styled-components"
import Header from "./Components/Header/Header"
import Main from "./Components/Main/Main"
import Footer from "./Components/Footer/Footer"

const EstiloGlobal = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  /* overflow-y: hidden;
  overflow-x: hidden; */
}
`

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
    <EstiloGlobal />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
