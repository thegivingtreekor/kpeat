import { useState } from 'react'
import './styles/App.css'
import Header from "./components/layout/Header.jsx"
import Hero from "./components/layout/Hero.jsx"
import Quick from './components/layout/Quick.jsx'
import NewsLetter from './components/layout/NewsLetter.jsx'
import Promotion from './components/layout/Promotion.jsx'
import Footer from './components/layout/Footer.jsx'
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Quick />
      <NewsLetter />
      <Promotion />
      <Footer />
    </>
  )
}

export default App
