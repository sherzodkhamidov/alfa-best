import React from "react";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route , useLocation } from "react-router-dom";
import Career from "./Pages/Career/Career";
import Karera from "./Pages/Karera/Karera";
import Purchase from "./Pages/Purchase/Purchase";
import Contact from "./Pages/Contact/Contact";
import Cooperation from "./Pages/Cooperation/Cooperation";
import Transportation from "./Pages/Transportation/Transportation";
import Engineering from "./Pages/Engineering/Engineering";
import Household from "./Pages/HouseHold/Household";
import Catering from "./Pages/Catering/Catering";
import { QueryClient, QueryClientProvider } from "react-query";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";

const queryClient = new QueryClient();

function App() {  
  const lang = localStorage.getItem("lang") || "ru";
  return (
    <QueryClientProvider client={queryClient}>
      <div>
      <BrowserRouter>
      < Menu lang={lang} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Career />} />
            <Route path="/carrier" element={<Karera />} />
            <Route path="/purchase" element={<Purchase />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cooperation" element={<Cooperation />} />
            <Route path="/transportation" element={<Transportation />} />
            <Route path="/engineering" element={<Engineering />} />
            <Route path="/household" element={<Household />} />
            <Route path="/catering" element={<Catering />} />
          </Routes>
          < Footer />
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
