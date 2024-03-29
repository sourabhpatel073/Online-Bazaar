
import { Box, Text, border, strong, Flex ,Image,Center} from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Footer() {
  return (
    <>
    <Box boxShadow='inner' marginTop="3%"   justifyContent="space-around" _hover={{cursor:"pointer"}} display={["none","none","none","none","none","flex","flex"]} >
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

      <Box boxShadow="inner" marginTop="5%" display={["none","none","none","none","none","none","block"]}>
        <Flex justifyContent="space-around">
          <Box w="50%" marginLeft="30px">
            <Text marginRight="60%">Keep in touch</Text>
            <Flex>
              <Image
                width="40px"
                height="40px"
                src="https://img.icons8.com/color/2x/facebook-new.png"
              />
              <Image
                width="40px"
                height="40px"
                src="https://img.icons8.com/color/2x/twitter.png"
              />
              <Image
                width="40px"
                height="40px"
                src="https://img.icons8.com/glyph-neue/2x/youtube-play.png"
              />
              <Image
                width="40px"
                height="40px"
                src="https://img.icons8.com/ios-glyphs/2x/google-logo.png"
              />
              <Image
                width="40px"
                height="40px"
                src="https://img.icons8.com/fluency/2x/linkedin-circled.png"
              />
            </Flex>
          </Box>
          <Box w="50%">
            <Text fontWeight="medium">100% Secure and Trusted Payment</Text>
            <Flex>
              <Image src="https://images.shopclues.com/images/ui/pgateway_dkt@2x.png" />
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box
        style={{
          width: "100%",
          boxShadow:
            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
          marginTop: "15px",
          paddingTop: "15px",
          paddingBottom: "15px",
          backgroundColor: "white",
        }}
      >
        <Box
          style={{
            width: "95%",
            margin: "auto",
            marginTop: "2%",
            display: "flex",
            gap: "10px",
            flexDirection: "column",
         
            
          }}
        >
          <h4>
            <strong>Our Leading Categories</strong>
          </h4>

          <Text style={{fontSize:"11px",marginLeft:"1px",display:"flex",justifyContent:'left'}}>
            {" "}
            <strong>Mobile & Tablets:</strong>Android Phones| Smartphones|
            Feature Phones| Unboxed Phones| Refurbished Phones| Tablets| CDMA
            Phones| Value Added Services| Sell Old/ Used Mobiles
          </Text>
          <Text style={{fontSize:"11px",marginLeft:"1px",display:"flex",justifyContent:'left'}}>
            <strong>Computers:Laptops</strong>| Printers| Routers| Ink & Toner
            Cartridges| Monitors| Video Games| Unboxed & Refurbished Laptops|
            Assembled Desktops| Data Cards
          </Text>
          <Text style={{fontSize:"11px",marginLeft:"1px",display:"flex",justifyContent:'left'}}>
            <strong>TV, Audio & Large Appliances:TVs & DTH</strong>| Home
            Theatre Systems| Hidden Cameras & CCTVs| Refrigerators| Washing
            Machines| Air Conditioners| Cameras| Speakers
          </Text>
          <Text style={{fontSize:"11px",marginLeft:"1px",display:"flex",justifyContent:'left'}}>
            <strong>Mobile & Laptop Accessories:Headphones</strong>| Power
            Banks| Backpacks| Mobile Cases & Covers| Pen Drives| External Hard
            Disks| Mouse| Smart Watches & Fitness Bands| MicroSD Cards
          </Text>
          <Text style={{fontSize:"11px",marginLeft:"1px",display:"flex",justifyContent:'left'}}>
            <strong>Appliances:Trimmers</strong>| Hair Dryers| Emergency Lights|
            Water Purifiers| Electric Kettles| Hair Straighteners| Induction
            Cooktops| Sewing Machines| Geysers
          </Text>
          <Text style={{fontSize:"11px",marginLeft:"1px",display:"flex",justifyContent:'left'}}>
            <strong>Home & Kitchen:Bedsheets</strong>| Hardware & Sanitaryware|
            Towels, Bath Linens| Furniture| Cookware| Kitchen Tools| Home
            Cleaning Utilities| Doormats| Curtains| Gardening Essentials
          </Text>
          <Text style={{fontSize:"11px",marginLeft:"1px",display:"flex",justifyContent:'left'}}>
            <strong>Fashion:Women's</strong> Clothing| Men's Clothing| Women's
            Ethnic Wear| Men's Fashion Accessories| Sports Wear| Western Wear|
            Handbags & Wallets, Clutches| Handbags| Sarees| T-Shirts| Lingerie &
            Sleep Wear
          </Text>
        </Box>
      </Box>

      <div style={{ backgroundColor: "lightblue", marginTop: "30px" }}>
        <div style={{ marginTop: "43px", width: "95%", margin: "auto" }}>
          <div style={{ display: "flex" }}>
            <h6 style={{ fontWeight: "700" }}>
              Online Shopping in India @www.Trendify.com
            </h6>
          </div>
          <div style={{ display: "flex", marginTop: "23px" }}>
            <p style={{ fontWeight: "700" }}>
              Indias Asli Online Shopping Hub www.Trendify.com
            </p>
          </div>
          <div style={{fontSize:"11px",marginLeft:"1px",display:"flex",justifyContent:'left'}}>
            Back in 2011, when people were hopping from one Store to another for
            best bargains on an overall households monthly bill, Trendify was
            being developed as a budget-friendly online bazaar in India.
            www.Trendify.com was then given a shape and strategy in 2012 as
            Indias First & Largest Fully Managed Marketplace
          </div>
          <div
            style={{ fontWeight: "700", display: "flex", marginTop: "23px" }}
          >
            Ting se Leke Tong – with Aflatooni Products!
          </div>
          <div style={{fontSize:"11px",marginLeft:"1px",display:"flex",justifyContent:'left'}}>
            ‘What you Think is What you Get’ isn’t just a saying at Trendify.
            With over 2.8 crore products, you can get just about everything that
            you can imagine at Trendify. From usual products in Electronics,
            Fashion, Home & Kitchen, to unusual products like cow dung cakes,
            Knife Sharpeners, etc., Trendify tops in everything. So, you see
            what we mean when we say Aflatooni Products! Trendify has
            revolutionized the conceptual Online Shopping in India with
            initiatives such as Ghar Wapsi Sale, Bigger than the Biggest Thank
            You Sale, #EkZeroKum Sale etc. Amongst many other shopping sites,
            Trendify is the leader in unstructured categories like Daily
            Utilities, Garden Needs, Hardware, Kitchen Storage, and others.
          </div>
          <div
            style={{ fontWeight: "700", display: "flex", marginTop: "23px" }}
          >
            Believable Shopping @ Unbelievable Prices
          </div>
          <div style={{fontSize:"11px",marginLeft:"1px",display:"flex",justifyContent:'left'}}>
            Every day, Trendify delights millions of discount-hunters with
            Paisa-Vasool Shopping Experience with prices as low as Re.1. We are
            the first ones to introduce the idea of ‘Sab Kuch Wholesale Ke Rate
            Par’ on an online platform with shopping options to both wholesale
            as well as retail seekers.
          </div>

          <div
            style={{ fontWeight: "700", display: "flex", marginTop: "23px" }}
          >
            Experiencing the neighbourhood Local Bazaar
          </div>
          <div  style={{fontSize:"11px",marginLeft:"1px",display:"flex",justifyContent:'left'}}>
            Trendify brings the experience of India’s Flea Markets online, in
            the form of its weekly properties - Sunday Flea Market, Refreshing
            Monday Sale, Triple Value Friday Sale, and Wednesday Brand Bazaar.
            Another property capturing the essence of regional Indian shopping
            is called NRH (National Regional Heritage), which gives a sneak-peek
            into India’s Cultural Gullies at very reasonable prices. These
            online markets showcase products with range so wide, and prices so
            low, that they beat the offline neighbourhood markets of India. The
            concept especially works incredibly well with the middle class
            population habituated in tier 2 & 3 cities.
          </div>
          <div style={{ display: "flex", marginTop: "23px" }}>
            <p style={{ fontWeight: "700" }}>
              An Online Selling Space for SME Merchants
            </p>
          </div>
          <div style={{fontSize:"11px",marginLeft:"1px",display:"flex",justifyContent:'left'}}>
            Working as a marketplace, Trendify has been well-supported by a
            bourgeoning community of certified merchants in India. Unlike
            various other online shopping sites, Trendify has achieved the
            largest merchant base of over 3.5 Lakhs. This online shopping
            website is creating history by empowering local and regional
            merchants, primarily from Tier 2 & 3 cities and making them a
            national enterprise at Trendify.
          </div>

          <div
            style={{ fontWeight: "700", display: "flex", marginTop: "23px" }}
          >
            Trendify Surety
          </div>
          <div style={{fontSize:"11px",marginLeft:"1px",display:"flex",justifyContent:'left'}}>
            The Trendify Surety Program, was launched in order to ensure a
            hassle free shopping experience for its customers. This premium
            service is in addition to the Trendify Buyer Protection program
            which ensures an extensive 5 point quality check of the products in
            order to give Customers a seamless shopping experience. In order to
            make it user-friendly, the platform marks out the rating of the
            products classified into ‘Best Buy’, ‘Great Buy’, ‘Value Buy’ or
            ‘Brand Authorized’. This allows the customer to make an optimal
            purchase decision while shopping on the platform.
          </div>
          <div
            style={{ fontWeight: "700", display: "flex", marginTop: "23px" }}
          >
            Trendify VIP Club
          </div>
          <div style={{fontSize:"11px",marginLeft:"1px",display:"flex",justifyContent:'left'}}>
            Get Rewards Every time you Shop! Join the VIP Club and Get 5%
            Cashback on Every Order. That's not all! With Free Membership, No
            Hidden Costs & No Registration Procedures, get Exclusive Benefits on
            Grofers, Lenskart, Food Panda & Hi Care Pest Control Services. Join
            the Club Now
          </div>
        </div>
      </div>
    </>
  );
}
