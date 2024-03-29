import { Box } from "@chakra-ui/react";
import LeftDiv from "./Wishlist/LeftDiv";
import { RightDiv } from "./Wishlist/RightDiv";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
//import Navmain from "../Components/HomePage/Navmain";
// import SearchBar from "../Components/SearchBar";
// import LocationBox from "../Components/LocationBox";
// import Footer1 from "../Components/Footer1";

const Wishlist = () => {
  return (
    <>
      {/* <Navmain /> */}
      <Navbar/>
      <Box w="95%" m="auto"   mt={"50px"} minHeight='600px'> 
        {/* <LocationBox /> */}
        <Box
          display={"flex"}
          flexDirection={{
            base: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
            "2xl": "row",
          }}
          justifyContent="space-around"
        
          width={{
            base: "95%",
            sm: "95%",
            md: "95%",
            lg: "95%",
            xl: "95%",
            "2xl": "95%",
          }}
          
        >
          <LeftDiv />
          <RightDiv />
        </Box>
      </Box>
      <Footer/>
    </>
  );
};

export { Wishlist };
