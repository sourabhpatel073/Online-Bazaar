import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import MyCarousel from './Components/Slider';


import React from 'react';
import Footer from './Components/Footer';
import TopRight from './Components/TopRight';
import { Box, Flex } from '@chakra-ui/react';
import Home from './Pages.jsx/Home';
import AllRoutes from './Pages.jsx/AllRoutes';


function App() {
  return (
    <div className="App">
      
    <AllRoutes/>
    
    </div>
  );
}


export default App;


