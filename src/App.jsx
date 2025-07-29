import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";

import HomePage from "./pages/Home.jsx";
import AuthPage from "./pages/Auth.jsx";
import ErrorPage from "./pages/Error.jsx";
import WorkSpacePage from "./pages/WorkSpace.jsx";
import VerificationPage from "./pages/Verification.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar isUserLogin={false}></Navbar>
      <Routes>
        <Route path="Wocaby/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/workspace" element={<WorkSpacePage />} />
        <Route path="/verification" element={<VerificationPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
