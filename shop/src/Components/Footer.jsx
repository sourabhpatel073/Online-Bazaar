import {
  HStack,
  Box,
  Image,
  Divider,
  Heading,
  Text,
  Flex,
  Center,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box>
      <Box boxShadow='inner'>
        <Center fontWeight="extrabold" fontSize="2xl">
          Band Of Trust
        </Center>
        <Flex width="90%" margin="auto" justifyContent="space-around" >
          <Box>
            <Image
              width="50%"
              margin="auto"
              src="https://cdn-icons-png.flaticon.com/128/9778/9778122.png"
            />
            <Text>Great Selection</Text>
          </Box>

          <Divider orientation="vertical" />

          <Box>
            <Image
              width="50%"
              margin="auto"
              src="https://cdn-icons-png.flaticon.com/128/3998/3998647.png"
            />
            <Text>Low Price</Text>
          </Box>
          <Divider border={'20px solid red'}
           orientation="vertical" />
          <Box>
            <Image
              width="50%"
              margin="auto"
              src="https://cdn-icons-png.flaticon.com/128/726/726455.png"
            />
            <Text>Speedy Delivery</Text>
          </Box>
        </Flex>
      </Box>
      <Box boxShadow='inner' marginTop="3%"  display="flex" justifyContent="space-around" _hover={{cursor:"pointer"}}>
      {/*  bottom*/}
        <Box >
        <Center fontWeight="extrabold" fontSize="md" marginTop="3%" marginBottom="5%" >
        Shopper Central
        </Center>
        <Center fontSize="sm">
        Easy Returns & Replacement
        </Center>
        <Center fontSize="sm">
        Sign In/Register
        </Center>
        <Center fontSize="sm">
        Our Policies
        </Center>
        <Center fontSize="sm">
        CluesBucks
        </Center>
        <Center fontSize="sm">
        Payment Options
        </Center>
        <Center fontSize="sm">
        Surety
        </Center>
        <Center fontSize="sm">
        FAQs (Help)
        </Center>
        <Center fontSize="sm">
        Service Centers
        </Center>
        <Center fontSize="sm">
        User Agreement
        </Center>
         </Box>

          {/*merchant */}
        <Box fontSize="sm">
        <Center fontWeight="extrabold" fontSize="md" marginTop="3%" marginBottom="5%">
        Merchant Central
        </Center>
        <Center>Merchant Panel</Center>
        <Center>How To Sell</Center>
        <Center>Commission Structure</Center>
        <Center>Fullfillment Policy</Center>
        <Center>Policies & Rules</Center>
        <Center>User Agreement</Center>
        <Center>Testimonials</Center>
        <Center>Seller Summit</Center>
        <Center>Merchant Blog</Center>
        <Center>Developer Resources</Center>
        </Box>


        {/*about us */}
        <Box fontSize="sm">
        <Center fontWeight="extrabold" fontSize="md" marginTop="3%" marginBottom="5%">
        About Us
        </Center>
        <Center>History</Center>
        <Center>Band of Trust</Center>
        <Center>In the News</Center>
        <Center>Awards</Center>
        <Center>Careers</Center>
        <Center>Blog</Center>
        </Box>

         {/*contect us */}
        <Box fontSize="sm">
        <Center fontWeight="extrabold" fontSize="md" marginTop="3%" marginBottom="5%">
        Contact Us
        </Center>
        <Center>
        Merchant Support
        </Center>
        <Center>
        Bulk Orders
        </Center>
        <Center>
          Press
        </Center>

        </Box>

        {/*prees */}
        <Box fontSize="sm">
        <Center fontWeight="extrabold" fontSize="md">
        Prees
        </Center>
        <Center>
        In the News
        </Center>
        </Box>
      </Box>

      <Box boxShadow='inner' marginTop="5%" >
        <Flex justifyContent="space-around">
          <Box w="50%" marginLeft="30px">
            <Text marginRight="60%">
              Keep in touch
            </Text>
            <Flex>
              <Image width="40px" height="40px" src="https://img.icons8.com/color/2x/facebook-new.png"/>
              <Image  width="40px" height="40px" src="https://img.icons8.com/color/2x/twitter.png"/>
              <Image  width="40px" height="40px" src="https://img.icons8.com/glyph-neue/2x/youtube-play.png"/>
              <Image   width="40px" height="40px" src="https://img.icons8.com/ios-glyphs/2x/google-logo.png"/>
              <Image   width="40px" height="40px" src="https://img.icons8.com/fluency/2x/linkedin-circled.png"/>
            </Flex>
          </Box>
          <Box w="50%">
          <Text fontWeight="medium">
          100% Secure and Trusted Payment
            </Text>
            <Flex>
              <Image src="https://images.shopclues.com/images/ui/pgateway_dkt@2x.png"/>
            </Flex>
          </Box>
        </Flex>
      </Box>

      <div >
        <h4><b>Our Landing Category</b></h4>

        <p >  <b>Mobile & Tablets:</b>Android Phones| Smartphones| Feature Phones| Unboxed Phones| Refurbished Phones| Tablets| CDMA Phones| Value Added Services| Sell Old/ Used Mobiles</p>
      <p><b>Computers:Laptops</b>| Printers| Routers| Ink & Toner Cartridges| Monitors| Video Games| Unboxed & Refurbished Laptops| Assembled Desktops| Data Cards</p>
      <p><b>TV, Audio & Large Appliances:TVs & DTH</b>| Home Theatre Systems| Hidden Cameras & CCTVs| Refrigerators| Washing Machines| Air Conditioners| Cameras| Speakers</p>
     <p><b>Mobile & Laptop Accessories:Headphones</b>| Power Banks| Backpacks| Mobile Cases & Covers| Pen Drives| External Hard Disks| Mouse| Smart Watches & Fitness Bands| MicroSD Cards</p>
      <p><b>Appliances:Trimmers</b>| Hair Dryers| Emergency Lights| Water Purifiers| Electric Kettles| Hair Straighteners| Induction Cooktops| Sewing Machines| Geysers</p>
      <p><b>Home & Kitchen:Bedsheets</b>| Hardware & Sanitaryware| Towels, Bath Linens| Furniture| Cookware| Kitchen Tools| Home Cleaning Utilities| Doormats| Curtains| Gardening Essentials</p>
      <p><b>Fashion:Women's</b> Clothing| Men's Clothing| Women's Ethnic Wear| Men's Fashion Accessories| Sports Wear| Western Wear| Handbags & Wallets, Clutches| Handbags| Sarees| T-Shirts| Lingerie & Sleep Wear</p>
      </div>
    </Box>
  );
}
