import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";

const App = () => {
   const dev = "Mohammed Elkhamlichi";
   console.log(dev);
   return (
      <>
         <Router>
            <Header />
            <Routes>
               <Route path='/' element={<Home />} />
            </Routes>
            <Footer />
         </Router>
      </>
   );
};

export default App;
