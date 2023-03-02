import Navbar from "../Components/Navbar";
import MyCarousel from "../Components/Slider";

import  { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import TopRight from "../Components/TopRight";
import { useSearchParams } from "react-router-dom";
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
      <Heading><Center>Treanding</Center></Heading>
      <TopButton></TopButton>
        {loading ? (
          <Box>
            <Image  margin="auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTF3syqoGaphckwQn7_GWS_hbeDWsqfQcmiQ&usqp=CAU" />
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

      <Footer />
      
    </div>
  );
}
