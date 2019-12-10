import React from 'react'
import Routes from "./Routes"
import Nav from "./components/Layout/Nav"
import Footer from "./components/Layout/Footer"
import styles from "./App.css"

function App() {
  return (
    <div>
      <Nav/>
      <Routes/>
      <Footer/>
    </div>
  )
}

export default App
