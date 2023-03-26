import React from "react"
import './index.css';
import Home from "./Home";
import { LoginContextProvider } from "./LoginContext";
import { BrowserRouter as Router, Routes,Route,Link } from "react-router-dom";
import Cart from "./Cart";
import Login from "./Login";
import Registration from "./Registration";





function App() {
  return(
  <div>
      
      <LoginContextProvider>
        <Router>
          
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart"element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}/>
        </Routes> 
        </Router> 
   
   
    </LoginContextProvider>
    
  </div>

  )

}

export default App;
