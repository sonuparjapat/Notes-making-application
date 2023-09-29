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

import { LoginRounded } from '@mui/icons-material';

const Links = ['HOME', 'LOGIN',"NOTES","CREATE","FAVOURATES","CONTACTUS",'ABOUTUS'];

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
  // const data=useSelector((state)=>state.usersigninreducer)

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
           <Link to="/"> <Box _hover={{color:"red",textDecorationLine:"underline"}} textDecorationLine={location.pathname=="/"?"underline":"none"}  fontFamily={Navbarstyle.fontFamily} fontWeight={Navbarstyle.fontWeight} fontSize={"30px"} lineHeight={Navbarstyle.lineHeight}>My Notes</Box></Link>
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
                <LoginRounded/>
              </MenuButton>
              <MenuList color="black" bg="black">
                <Link to="/login"><MenuItem fontFamily={Navbarstyle.fontFamily} fontWeight={Navbarstyle.fontWeight} fontSize={Navbarstyle.fontSize} to="/login" lineHeight={Navbarstyle.lineHeight}>SignIN</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <Link key={link} to={link}>{link}</Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      </Box>
    
    </>
  );
}