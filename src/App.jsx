import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/navbar"
import Footer from "./components/footer"

import HomePage from "./pages/Home.jsx"
import AuthPage from "./pages/Auth.jsx"
import ErrorPage from "./pages/Error.jsx"
import WorkSpacePage from "./pages/WorkSpace.jsx"
import VerificationPage from "./pages/Verification.jsx"

function App() {
  return (
    <BrowserRouter>
      <Navbar isUserLogin={false}></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/workspace" element={<WorkSpacePage />} />
        <Route path="/verification" element={<VerificationPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
