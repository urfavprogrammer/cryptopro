import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Depositfunds from "./pages/Depositfunds";
import Dashboard from "./pages/Dashboard";



function App() {
    return (
        <>
        <Router>
                <Navbar />
                <Routes>
                    <Route path='/' exact Component={Dashboard} />
                    <Route path='/depositfunds' Component={Depositfunds}/>
                </Routes>
        </Router>
           
        </>

    )
}

export default App;