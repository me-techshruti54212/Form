import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FormPage from "./pages/FormPage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
