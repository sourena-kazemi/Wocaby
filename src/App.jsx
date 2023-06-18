import { useState } from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Navbar from "./components/navbar"
import Footer from "./components/footer"

import HomePage from "./pages/Home.jsx"
import AuthPage from "./pages/Auth.jsx"
// import ErrorPage from "./pages/Error.jsx"
// import PracticePage from "./pages/Practice.jsx"
function App() {
  return (
    <BrowserRouter>
      <Navbar isUserLogin={false}></Navbar>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App