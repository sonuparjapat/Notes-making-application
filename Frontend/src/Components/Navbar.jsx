import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,

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

} from '@chakra-ui/react';

import { Link, useLocation } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['HOMETOURS', 'DESIGNS', 'ABOUTUS',"CONTACTUS"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

const Navbarstyle={
    fontFamily:"Central, Helvetica, Arial, sans-serif",
    fontSize:"12px",
    lineHeight:"22px",
    fontWeight:700

}
export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location=useLocation()

  return (
    <>
      <Box position={"sticky"} top="0" zIndex={"overlay"} bg={useColorModeValue('black', 'gray.900')} color={"white"} px={4}><Box width="80%" margin="auto">

   
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
           <Link to="/"> <Box _hover={{color:"red",textDecorationLine:"underline"}} textDecorationLine={location.pathname=="/"?"underline":"none"}  fontFamily={Navbarstyle.fontFamily} fontWeight={Navbarstyle.fontWeight} fontSize={Navbarstyle.fontSize} lineHeight={Navbarstyle.lineHeight}>ELITE DECORE</Box></Link>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <Link  to={link} key={link}><Box  _hover={{textDecorationLine:"underline"}} textDecorationLine={location.pathname==`/${link}`?"underline":"none"}  fontFamily={Navbarstyle.fontFamily} fontWeight={Navbarstyle.fontWeight} fontSize={Navbarstyle.fontSize} lineHeight={Navbarstyle.lineHeight}>{link}</Box></Link>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
          
              </MenuButton>
              <MenuList color="black" bg="black">
                <MenuItem fontFamily={Navbarstyle.fontFamily} fontWeight={Navbarstyle.fontWeight} fontSize={Navbarstyle.fontSize} lineHeight={Navbarstyle.lineHeight}>SignIN</MenuItem>
         
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
      </Box>
    
    </>
  );
}