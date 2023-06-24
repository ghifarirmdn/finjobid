import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
