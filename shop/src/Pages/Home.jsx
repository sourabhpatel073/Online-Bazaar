import Navbar from "../Components/Navbar";
import MyCarousel from "../Components/Slider";

import  { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import TopRight from "../Components/TopRight";
import { useSearchParams } from "react-router-dom";
import { Footer1 } from "../Components/Footer1";
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";


import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import  { Authcontext } from "../Context/AuthContext";

import Pagination from "../Components/Pagination";
import TopButton from "../Components/TopButton";



export default function Home() {
  const link = useNavigate();
  const [data, srtdata] = useState([]);
  const [loading, setloadig] = useState(false);
const[params,setParams]=useSearchParams()
  const {
    isAuth,
    login,
    logout,
    setGData,
    Gdata,
    page,
    setPage,
    Item,
    setItem,
    id,setId
  } = useContext(Authcontext);
  const val = "";

 
  useEffect(() => {
    setloadig(true);
    axios
      .get(`https://63cd283efba6420d4d698593.mockapi.io/Products`, {
        params: {
          search: val,
          page: page,
          limit: "10",
        },
      })
      .then(function (response) {
        console.log(response);
        setGData(response.data);
        setloadig(false);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [page]);



  return (
    <div>
      <Box display="flex" justifyContent="space-around">
        {" "}
        <Box>.</Box>
        <Button
          bg="red.300"
          height="20px"
          color="white"
          onClick={() => {
            link("/admin");
          }}
        >
          Sale With us
        </Button>
      </Box>
      <Navbar />

      <Box w="95%" margin="auto" display="flex" marginTop="2%">
        <MyCarousel />{" "}
        <Box w="250%">
          <TopRight />
        </Box>
      </Box>
      <Box>
      <Heading><Center>Tranding</Center></Heading>
      <TopButton></TopButton>
        {loading ? (
          <Box>
            <Image  margin="auto" src="data:image/png;base64,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" />
          </Box>
        ) : (
          <Grid
            gridTemplateColumns={{
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
              xl:"repeat(5, 1fr)"
            }}
            m="auto"
          >
            {Gdata.map((Item) => {
              return (
                <Box
                  key={Item.id}
                  borderRadius="10px"
                 border="1px solid"
                 padding="10px"
                  _hover={{
                    cursor: "pointer",
                    bg: "black",
                    color: "white",
                    position: "relative",
                    top: "3px",
                    right: "2px",
                    transition: "2sec",
                  }}
                  boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"
                  m="5px 5px 5px 5px"
                 
                >
                  <Text>{Item.name.substring(0, 50) + "..."}</Text>
                  <Image src={Item.image1} w="50%" m="auto" />
                  <Text fontWeight="bold">Price : ₹{Item.price}</Text>
                  <Text>Rating : {Item.rating}</Text>
                  <Button w="80px" h="20px" bg="green" color="orange" onClick={()=>{
                    setItem(Item)
                       setId(Item.id);
                      link("products/id")}}>
                    View
                  </Button>
                </Box>
              );
            })}
           
          </Grid>
        )}
        <Pagination></Pagination>
      </Box>
      <Heading marginRight="70%" fontSize="2xl">
        Deals of the Day
      </Heading>
      <Box>
        <Grid
          margin="auto"
          templateColumns={{
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(5, 1fr)",
          }}
          bg="gray.100"
          paddingTop="3%"
          _hover={{ cursor: "pointer" }}
        >
          <Box   borderRadius="10px"
                 padding="10px"
                  _hover={{
                    cursor: "pointer",
                    bg: "black",
                    color: "white",
                    position: "relative",
                    top: "3px",
                    right: "2px",
                    transition: "2sec",
                  }}>
            <Image
              width={{ sm: "30%", md: "50%", lg: "80%" }}
              src="https://cdn.shopclues.com/images1/thumbnails/115246/200/200/152689876-115246212-1659944528.jpg"
            />
            <Text>Venerate Headphone (Black)</Text>
            <Flex justifyContent="center">
              <Text textDecoration="line-through" color="red">
                {" "}
                ₹392 =
              </Text>
              <Text color="green">₹269 87% off</Text>
            </Flex>
          </Box>

          <Box borderRadius="10px"
                 padding="10px"
                  _hover={{
                    cursor: "pointer",
                    bg: "black",
                    color: "white",
                    position: "relative",
                    top: "3px",
                    right: "2px",
                    transition: "2sec",
                  }}>
            <Image
              width={{ sm: "30%", md: "50%", lg: "80%" }}
              src="https://cdn.shopclues.com/images1/thumbnails/81476/200/200/135627858-81476269-1665754103.jpg"
            />
            <Text>MTR MT310 Daual Sim</Text>
            <Flex justifyContent="center">
              <Text textDecoration="line-through" color="red">
                {" "}
                ₹999 =
              </Text>
              <Text color="green">₹740 25% off</Text>
            </Flex>
          </Box>

          <Box borderRadius="10px"
                 padding="10px"
                  _hover={{
                    cursor: "pointer",
                    bg: "black",
                    color: "white",
                    position: "relative",
                    top: "3px",
                    right: "2px",
                    transition: "2sec",
                  }}>
            <Image
              width={{ sm: "30%", md: "50%", lg: "80%" }}
              src="https://cdn.shopclues.com/images1/thumbnails/95123/320/320/142672875-95123237-1645016499.jpg"
            />
            <Text margin="auto">USB Type-C to Type-A 3.0 Male</Text>
            <Flex justifyContent="center">
              <Text textDecoration="line-through" color="red">
                {" "}
                ₹499 =
              </Text>
              <Text color="green">₹302 27% off</Text>
            </Flex>
          </Box>

          <Box borderRadius="10px"
                 padding="10px"
                  _hover={{
                    cursor: "pointer",
                    bg: "black",
                    color: "white",
                    position: "relative",
                    top: "3px",
                    right: "2px",
                    transition: "2sec",
                  }}>
            <Image
              width={{ sm: "30%", md: "50%", lg: "80%" }}
              src="https://cdn.shopclues.com/images1/thumbnails/71795/200/200/128902274-71795769-1653057803.jpg"
            />
            <Text>Premium Quality Nylon Braded Aux Cable</Text>
            <Flex justifyContent="center">
              <Text textDecoration="line-through" color="red">
                {" "}
                ₹399 =
              </Text>
              <Text color="green">₹250 37% off</Text>
            </Flex>
          </Box>

          <Box  borderRadius="10px"
                 padding="10px"
                  _hover={{
                    cursor: "pointer",
                    bg: "black",
                    color: "white",
                    position: "relative",
                    top: "3px",
                    right: "2px",
                    transition: "2sec",
                  }}>
            <Image
              width={{ sm: "30%", md: "50%", lg: "80%" }}
              src="https://cdn.shopclues.com/images1/thumbnails/115044/320/320/152634665-115044372-1629705035.jpg"
            />
            <Text>ZEB-UCC100 2.0 Data Charging Cable</Text>
            <Flex justifyContent="center">
              <Text textDecoration="line-through" color="red">
                {" "}
                ₹899 =
              </Text>
              <Text color="green">₹169 77% off</Text>
            </Flex>
          </Box>
        </Grid>
      </Box>

      {/*second div */}
      <Heading marginRight="70%" fontSize="2xl">
        Your Gadgets Store
      </Heading>
      <Box m="auto">
        <Grid
          margin="auto"
          templateColumns={{
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(5, 1fr)",
          }}
          bg="gray.100"
          paddingTop="3%"
          _hover={{ cursor: "pointer" }}
        >
          <Box borderRadius="10px"
                 padding="10px"
                  _hover={{
                    cursor: "pointer",
                    bg: "orange.800",
                    color: "white",
                    position: "relative",
                    top: "3px",
                    right: "2px",
                    transition: "2sec",
                  }}>
            <Image
              width={{ sm: "30%", md: "50%", lg: "80%" }}
              src="https://cdn.shopclues.com/images1/thumbnails/99370/200/200/145508146-99370521-1668508420.jpg"
            />
            <Text>i7S TWS Twins Wireless In the Ear Earphone</Text>
            <Flex justifyContent="center">
              <Text textDecoration="line-through" color="red">
                {" "}
                ₹1392 =
              </Text>
              <Text color="green">₹269 87% off</Text>
            </Flex>
          </Box>

          <Box borderRadius="10px"
                 padding="10px"
                  _hover={{
                    cursor: "pointer",
                    bg: "orange.800",
                    color: "white",
                    position: "relative",
                    top: "3px",
                    right: "2px",
                    transition: "2sec",
                  }}>
            <Image
              width={{ sm: "30%", md: "50%", lg: "80%" }}
              src="https://cdn.shopclues.com/images1/thumbnails/95357/200/200/142826933-95357827-1664550819.jpg"
            />
            <Text>HBS-730 In the Ear Bluetooth Neckband</Text>
            <Flex justifyContent="center">
              <Text textDecoration="line-through" color="red">
                {" "}
                ₹1099 =
              </Text>
              <Text color="green">₹740 25% off</Text>
            </Flex>
          </Box>

          <Box borderRadius="10px"
                 padding="10px"
                  _hover={{
                    cursor: "pointer",
                    bg: "orange.800",
                    color: "white",
                    position: "relative",
                    top: "3px",
                    right: "2px",
                    transition: "2sec",
                  }}>
            <Image
              width={{ sm: "30%", md: "50%", lg: "80%" }}
              src="https://cdn.shopclues.com/images1/thumbnails/81476/200/200/135627858-81476269-1665754103.jpg"
            />
            <Text margin="auto">USB Type-C to Type-A 3.0 Male</Text>
            <Flex justifyContent="center">
              <Text textDecoration="line-through" color="red">
                {" "}
                ₹499 =
              </Text>
              <Text color="green">₹302 27% off</Text>
            </Flex>
          </Box>

          <Box borderRadius="10px"
                 padding="10px"
                  _hover={{
                    cursor: "pointer",
                    bg: "orange.800",
                    color: "white",
                    position: "relative",
                    top: "3px",
                    right: "2px",
                    transition: "2sec",
                  }}>
            <Image
              width={{ sm: "30%", md: "50%", lg: "80%" }}
              src="https://cdn.shopclues.com/images1/thumbnails/112883/200/200/151860087-112883707-1664649308.jpg"
            />
            <Text>Premium Quality Nylon Braded Aux Cable</Text>
            <Flex justifyContent="center">
              <Text textDecoration="line-through" color="red">
                {" "}
                ₹399 =
              </Text>
              <Text color="green">₹250 37% off</Text>
            </Flex>
          </Box>

          <Box borderRadius="10px"
                 padding="10px"
                  _hover={{
                    cursor: "pointer",
                    bg: "orange.800",
                    color: "white",
                    position: "relative",
                    top: "3px",
                    right: "2px",
                    transition: "2sec",
                  }}>
            <Image
              width={{ sm: "30%", md: "50%", lg: "80%" }}
              src="https://cdn.shopclues.com/images1/thumbnails/98012/200/200/144475154-98012302-1664648956.jpg"
            />
            <Text>ZEB-UCC100 2.0 Data Charging Cable</Text>
            <Flex justifyContent="center">
              <Text textDecoration="line-through" color="red">
                {" "}
                ₹899 =
              </Text>
              <Text color="green">₹169 77% off</Text>
            </Flex>
          </Box>
        </Grid>
      </Box>
       <Footer1/>
      <Footer/>
      
    </div>
  );
}
