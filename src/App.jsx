import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import Header from "./components/layout/Header.jsx"
import Hero from "./components/layout/Hero.jsx"
import Quick from './components/layout/Quick.jsx'
import NewsLetter from './components/layout/NewsLetter.jsx'
import Footer from './components/layout/Footer.jsx'
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Quick />
      <NewsLetter />
      <Footer />
    </>
  )
}

export default App
