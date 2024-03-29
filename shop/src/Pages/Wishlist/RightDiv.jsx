import { Box, HStack, Text, Image, Button, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const RightDiv = () => {
  const naigate = useNavigate();
  const [item, setItem] = useState("");
  const [wishlistData, setWishlistData] = useState([]);

  const getData = () => {
    axios.get(`http://localhost:4444/wishlist`).then((res) => {
      setWishlistData(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, [wishlistData.length]);
  console.log(item);
  // const Items = [
  //   {
  //     id: 1,
  //     title: "Stylish Men Watches",
  //     image:
  //       "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/t/r/b/l-bonflower-511-light-green-fifth-u-original-imagj85mwejpz4fq.jpeg?q=70",
  //     price: 243,
  //     rating: "3.8",
  //     reviews: "4637 Reviews",
  //     category: "men",
  //     tag: "menaccessories",
  //   },
  //   {
  //     id: 2,
  //     title: "Ravishing Men Watches",
  //     image:
  //       "https://images.meesho.com/images/products/67584294/aycy1_400.webp",
  //     image2:
  //       "https://images.meesho.com/images/products/67584294/aycy1_400.webp",
  //     price: 203,
  //     rating: "3.9",
  //     reviews: "418 Reviews",
  //     category: "men",
  //     tag: "menaccessories",
  //   },
  // ];

  const handleDelete = (item) => {
    //    let x = wishlistData.filter((el)=>+el.id!==+item.id)
    //  setWishlistData(x)
    let id = +item.id;
    axios.delete(`http://localhost:4444/wishlist/${id}`).then((res) => {
      console.log(res);
    });
    getData();
  };
  //console.log(wishlistData)
  // useEffect(()=>{
  //   localStorage.setItem("listLength",JSON.stringify(Items.length))
  // },[Items.length])

  return (
    <Box
      width={{ base: "98%", lg: "70%" }}
      boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
      fontSize={{ sm: "xs", md: "sm", lr: "sm", "2xl": "sm" }}
    >
      <Text fontWeight={"bold"} mt="10px">
        My Wishlist
      </Text>

      {wishlistData.map((item) => {
        return (
          <Box
            display={"flex"}
            justifyContent="space-around"
            boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
            mt="5px"
            key={item.id}
          >
            <HStack>
              <Image width={"100px"} src={item.image} />
              <Box>
                <Text>{item.title}</Text>
                <Text textDecoration={"line-through"}>
                  ₹{+item.price + 100}{" "}
                </Text>
                <Text>
                  ₹{item.price} <span style={{ color: "green" }}>35% Off</span>{" "}
                </Text>
              </Box>
            </HStack>
            <VStack mt={"1%"}>
              <Button
                bg="orange.400"
                color={"white"}
                size={["xs", "sm", "md", "md"]}
                fontSize={["sm", "md", "md", "md"]}
                onClick={() => {
                  naigate("/payments");
                }}
              >
                Buy Now
              </Button>
              <Button
                border={"1px solid"}
                color="orange.300"
                size={["xs", "sm", "md", "md"]}
                fontSize={["xs", "md", "md", "md"]}
                onClick={() => handleDelete(item)}
              >
                Remove
              </Button>
            </VStack>
          </Box>
        );
      })}
    </Box>
  );
};
