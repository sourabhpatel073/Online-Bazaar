import { HStack,Box,Image, Divider,Text } from "@chakra-ui/react";

export default function Footer(){

    return <>
        <HStack width="90%" margin="auto">
            <Box><Image src="https://cdn-icons-png.flaticon.com/128/9778/9778122.png"/>
            <Text>Great Selection</Text>
            </Box>
            <Divider/>
            <Box><Image src="https://cdn-icons-png.flaticon.com/128/9778/9778122.png"/>
            <Text>Low Price</Text></Box>
            <Divider/>
            <Box><Image src="https://cdn-icons-png.flaticon.com/128/9778/9778122.png"/>
            <Text>Speedy Delivery</Text></Box>
        </HStack>
    </>
}