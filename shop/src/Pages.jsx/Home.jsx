import Navbar from '../Components/Navbar';
import MyCarousel from '../Components/Slider';


import React from 'react';
import Footer from '../Components/Footer';
import TopRight from '../Components/TopRight';
import { Box, Flex, Heading } from '@chakra-ui/react';



export default function Home(){
    return <div>
         <Navbar/>
     <Box w="95%" margin="auto" display="flex" marginTop="2%" >
      <MyCarousel /> <Box w="250%" ><TopRight/></Box>
       </Box>
     <Heading marginRight="50%" >Deals of the Day</Heading>
     <Box></Box>
    <Footer/>
    </div>
}