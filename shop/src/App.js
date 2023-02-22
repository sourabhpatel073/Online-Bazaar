import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import MyCarousel from './Components/Slider';


import React from 'react';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      
     <Navbar/>
     <MyCarousel/>
    <Footer/>
    
    </div>
  );
}


export default App;


