import Navbar from '../Components/Navbar';
import MyCarousel from '../Components/Slider';


import React from 'react';
import Footer from '../Components/Footer';
import TopRight from '../Components/TopRight';
import { Box, Button, Flex, Grid, Heading ,Image,Text} from '@chakra-ui/react';
import Login from './Login';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Home(){
    const link=useNavigate()
    return <div>
    <Box display="flex" justifyContent="space-around"> <Box>.</Box><Button bg="red.300" color='white' onClick={()=>{link("/admin")}}>Sale With us</Button></Box>
         <Navbar/>
        
     <Box w="95%" margin="auto" display="flex" marginTop="2%" >
      <MyCarousel /> <Box w="250%" ><TopRight/></Box>
       </Box>
     <Heading marginRight="70%"  fontSize="2xl">Deals of the Day</Heading>
     <Box>
        <Grid  margin="auto"  templateColumns={{sm:"repeat(2, 1fr)", md:"repeat(3, 1fr)", lg:"repeat(5, 1fr)"}} bg="gray.100" paddingTop="3%" _hover={{cursor:'pointer'}}>
            <Box>
                <Image width={{sm:"30%", md:"50%", lg:"80%"}} src="https://cdn.shopclues.com/images1/thumbnails/115246/200/200/152689876-115246212-1659944528.jpg"/>
                <Text>Venerate Headphone (Black)</Text>
                <Flex justifyContent="center">
                <Text textDecoration="line-through" color="red"> ₹392 =</Text>
                <Text color="green" >₹269 87% off</Text></Flex>
                
            </Box>

            <Box>
                <Image width={{sm:"30%", md:"50%", lg:"80%"}}  src="https://cdn.shopclues.com/images1/thumbnails/81476/200/200/135627858-81476269-1665754103.jpg"/>
                <Text >MTR MT310 Daual Sim</Text>
                <Flex justifyContent="center"><Text textDecoration="line-through" color="red"> ₹999 =</Text>
                <Text color="green" >₹740 25% off</Text></Flex>
                
            </Box>

            <Box visibility={{base:'none'}}>
                <Image width={{sm:"30%", md:"50%", lg:"80%"}}  src="https://cdn.shopclues.com/images1/thumbnails/95123/320/320/142672875-95123237-1645016499.jpg"/>
                <Text margin="auto">USB Type-C to Type-A 3.0 Male</Text>
                <Flex justifyContent="center"><Text textDecoration="line-through" color="red"> ₹499 =</Text>
                <Text color="green" >₹302 27% off</Text></Flex>
                
            </Box>

            <Box>
                <Image width={{sm:"30%", md:"50%", lg:"80%"}}  src="https://cdn.shopclues.com/images1/thumbnails/71795/200/200/128902274-71795769-1653057803.jpg"/>
                <Text>Premium Quality Nylon Braded Aux Cable</Text>
                <Flex justifyContent="center"><Text textDecoration="line-through" color="red"> ₹399 =</Text>
                <Text color="green" >₹250 37% off</Text></Flex>
                
            </Box>


            <Box visibility={{base:'none'}}>
                <Image width={{sm:"30%", md:"50%", lg:"80%"}}  src="https://cdn.shopclues.com/images1/thumbnails/115044/320/320/152634665-115044372-1629705035.jpg"/>
                <Text>ZEB-UCC100 2.0 Data Charging Cable</Text>
                <Flex justifyContent="center"><Text textDecoration="line-through" color="red"> ₹899 =</Text>
                <Text color="green" >₹169 77% off</Text></Flex>
                
            </Box>
        </Grid>
     </Box>

{/*second div */}
     <Heading marginRight="70%"  fontSize="2xl">Your Gadgets Store</Heading>
     <Box m="auto">
        <Grid  margin="auto"  templateColumns={{sm:"repeat(2, 1fr)", md:"repeat(3, 1fr)", lg:"repeat(5, 1fr)"}} bg="gray.100" paddingTop="3%" _hover={{cursor:'pointer'}}>
            <Box>
                <Image width={{sm:"30%", md:"50%", lg:"80%"}} src="https://cdn.shopclues.com/images1/thumbnails/99370/200/200/145508146-99370521-1668508420.jpg"/>
                <Text>i7S TWS Twins Wireless In the Ear Earphone</Text>
                <Flex justifyContent="center">
                <Text textDecoration="line-through" color="red"> ₹1392 =</Text>
                <Text color="green" >₹269 87% off</Text></Flex>
                
            </Box>

            <Box>
                <Image width={{sm:"30%", md:"50%", lg:"80%"}}  src="https://cdn.shopclues.com/images1/thumbnails/95357/200/200/142826933-95357827-1664550819.jpg"/>
                <Text >HBS-730 In the Ear Bluetooth Neckband</Text>
                <Flex justifyContent="center"><Text textDecoration="line-through" color="red"> ₹1099 =</Text>
                <Text color="green" >₹740 25% off</Text></Flex>
                
            </Box>

            <Box visibility={{base:'none'}}>
                <Image width={{sm:"30%", md:"50%", lg:"80%"}}  src="https://cdn.shopclues.com/images1/thumbnails/81476/200/200/135627858-81476269-1665754103.jpg"/>
                <Text margin="auto">USB Type-C to Type-A 3.0 Male</Text>
                <Flex justifyContent="center"><Text textDecoration="line-through" color="red"> ₹499 =</Text>
                <Text color="green" >₹302 27% off</Text></Flex>
                
            </Box>

            <Box>
                <Image width={{sm:"30%", md:"50%", lg:"80%"}}  src="https://cdn.shopclues.com/images1/thumbnails/112883/200/200/151860087-112883707-1664649308.jpg"/>
                <Text>Premium Quality Nylon Braded Aux Cable</Text>
                <Flex justifyContent="center"><Text textDecoration="line-through" color="red"> ₹399 =</Text>
                <Text color="green" >₹250 37% off</Text></Flex>
                
            </Box>


            <Box visibility={{base:'none'}}>
                <Image width={{sm:"30%", md:"50%", lg:"80%"}}  src="https://cdn.shopclues.com/images1/thumbnails/98012/200/200/144475154-98012302-1664648956.jpg"/>
                <Text>ZEB-UCC100 2.0 Data Charging Cable</Text>
                <Flex justifyContent="center"><Text textDecoration="line-through" color="red"> ₹899 =</Text>
                <Text color="green" >₹169 77% off</Text></Flex>
                
            </Box>
        </Grid>
     </Box>
     
    <Footer/>
    </div>
}