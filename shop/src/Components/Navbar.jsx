// import {Box,Image ,Flex, Input, Button} from "@chakra-ui/react"
// export default function Navbar(){
//     return <Box style={{display:'flex'}}>
// <Flex> 
// 
// </Flex>
//    <Flex>
//     <Input style={{width:"30%"}}/> 
//     <Button>Search</Button>
//    </Flex>
//    <Flex>
//     <Image  src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"/>
//    </Flex>
//     </Box>
// }

import style from '../Styles/Navbar.module.css'
import Dropdown from './Dropdown.jsx';

import { ReactNode } from 'react';
import {
  Box,
  Image,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Input,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import logo from "./r.png"
import { Link as MyLink} from 'react-router-dom';


const Links = [ <Image  width="50%" borderRadius="50%" src='https://t4.ftcdn.net/jpg/00/97/00/05/240_F_97000552_d8RwiZAnFewznisQphPtjyxxRNAAZQ92.jpg'/>,
<Image width="50%" borderRadius="50%" src='https://t4.ftcdn.net/jpg/01/08/24/99/240_F_108249947_UMBLfSCpTWU6AGiUz0F7a524koG3eO0z.jpg'/>,
<Image width="50%" borderRadius="50%" src='https://cdn-icons-png.flaticon.com/128/535/535285.png'/> ];


const Links2=[ <Image width="80px" src="https://images.shopclues.com/images/ui/madeinindia.png"/>,"MOBILES & MORE","MEN","WOMEN","HOME & KITCHIN","APPLIENCES","SPORTS & MORE" ,"ESSENTIALS","OFFERS","GLOBAL SHOPING"]

const NavLink = ({ children }= { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    position = 'relative'
    className = {style.dropdown}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('red.200', 'gray.700'),
      // add styles here for dropdown
    }}
    href={'#'}>
    {children}
  </Link>

);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={50}  >
            <Box width="15%"><Image width="25%" height="8%" borderRadius="50%" src={logo}/></Box>
            <HStack   width="45%"><Input placeholder='What is on your Mind'/>, <Button background= 'orange.300' color="white">Search</Button></HStack>
            <HStack
            width="25%"
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
            <HStack> 
            
           </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                
                 bg="Highlight"
                minW={0}>
                <Avatar
                  size={'sm'}
                  
                  style={{width:"40px",boxRadius:"50%"}}
                  src={
                    'https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236__340.png'
                  }
                />
              </MenuButton>
              <MenuList >
                <MenuItem key="6655654" _hover={{bg:"black", color:"white"}}> <MyLink to="/login">Login</MyLink></MenuItem>
                <MenuItem key="1221012" _hover={{bg:"black" , color:"white"}}><MyLink to="/signup">Signup</MyLink></MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>


            <HStack
              as={'nav'}
              spacing={4}
              bg='blue.500'
              color="white"
              display={{ base: 'none', md: 'flex' }}
              fontSize="sm"
              fontWeight="none">
            
              {Links2.map((link) => (
                <>
                <NavLink key={link}>{link}</NavLink>

                            {/* Dropdown style */}

                      <Box className = {style.hoverdropdown} bg = 'green' zIndex={2} w = '400px' position={'absolute'} top = '117px'>hello</Box>




                  </>
              ))}
            </HStack>
     

     
    </>
  );
}