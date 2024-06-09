import React from 'react'


import "./App.css"
import Myheader from "./Components/Header/Myheader"
import Crads from './Components/Cards/Crads'
import Menu from './Components/Our Menu/Menu'
import Drink from './Components/Drinks/Drink'
import Myfooter from './Components/Footer/Myfooter'
import Contact from './Components/Footer/Contact'
import Mynavbar from './Components/Navbars/Mynavbar'
function App() {

  return (
    <>
      <Mynavbar/>
      <Myheader/>
      <Crads/>
      <Menu/>
      <Drink/>
      <Myfooter/>
      <Contact/>
    </>
  )
}

export default App
