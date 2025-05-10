import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Link as ChakraLink,
  IconButton,
  Drawer, // Reverted to Drawer (v2 API)
  DrawerBody,
  DrawerHeader,
  DrawerOverlay, // Reverted to DrawerOverlay (v2 API)
  DrawerContent,
  DrawerCloseButton, // Reverted to DrawerCloseButton (v2 API)
  useDisclosure,
  VStack,
  HStack,
  Image, // Changed from Icon to Image
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons'; // Removed CloseIcon import as it's not needed for DrawerCloseButton
import DevDocLogoUrl from '../../sig/dev-doc-logo.svg'; // Import SVG as a URL

const NavLink = ({ children, to, onClose }) => (
  <ChakraLink
    as={RouterLink}
    to={to}
    px={3}
    py={2}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: 'var(--color-neon-green)',
      color: 'var(--color-black)',
    }}
    color="var(--text-link)"
    fontFamily="var(--font-primary)"
    fontSize="var(--font-size-sm)"
    onClick={onClose} // Close drawer on link click
  >
    {children}
  </ChakraLink>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Treez 420', path: '/treez' },
    { label: 'Know Us', path: '/about' },
    { label: 'Highlights', path: '/highlights' },
    { label: 'Connect', path: '/connect' },
    { label: 'Legal', path: '/legal' },
  ];

  return (
    <Box bg="var(--color-black)" px={{ base: 4, md: 6 }} color="var(--text-heading)" position="sticky" top="0" zIndex="sticky">
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <RouterLink to="/">
          <Heading size="md" color="var(--color-neon-green)" fontFamily="var(--font-primary)">
            Tasty Treez 420
          </Heading>
        </RouterLink>

        <HStack
          as={'nav'}
          spacing={{ md: 4, lg: 6}}
          display={{ base: 'none', md: 'flex' }}
          alignItems="center" // Ensure vertical alignment for all items including logo
        >
          {navItems.map((item) => (
            <NavLink key={item.label} to={item.path}>
              {item.label}
            </NavLink>
          ))}
        </HStack>
        {/* Dev Doc Logo for Desktop - Placed after navItems but before hamburger on small screens if HStack was visible */}
        <ChakraLink
          href="https://unclesmol.github.io/dev-doc"
          isExternal
          display='none' // Hide this instance of the logo on all screen sizes
          alignItems="center"
          ml={4}
          aria-label="Dev Doc Website"
          className="dev-doc-logo-link" // Added class for custom styling
        >
          <Image
            src={DevDocLogoUrl}
            alt="Dev Doc Logo"
            h={{ base: "25px", lg: "30px" }} // Responsive height
            w="auto"
            transition="transform 0.2s ease-in-out"
            _hover={{ transform: 'scale(1.1)' }}
          />
        </ChakraLink>

        <IconButton
          size={'md'}
          icon={<HamburgerIcon w={6} h={6} color="var(--color-neon-green)" />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={onOpen}
          variant="ghost"
          _hover={{ bg: 'var(--color-deep-purple)' }}
        />
      </Flex>

      {/* Reverted to v2 Drawer structure */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="var(--color-black)" color="var(--text-light-grey)">
          <DrawerCloseButton color="var(--color-neon-green)" _focus={{ boxShadow: 'none' }} _hover={{ bg: 'var(--color-deep-purple)'}}/>
          <DrawerHeader borderBottomWidth="1px" borderColor="var(--color-deep-purple)" color="var(--color-neon-green)" fontFamily="var(--font-primary)">
            Navigation
          </DrawerHeader>
          <DrawerBody>
            <VStack as={'nav'} spacing={4} align="stretch">
              {navItems.map((item) => (
                <NavLink key={item.label} to={item.path} onClose={onClose}>
                  {item.label}
                </NavLink>
              ))}
              {/* Dev Doc Logo for Mobile Drawer */}
              <ChakraLink
                href="https://unclesmol.github.io/dev-doc"
                isExternal
                py={4} // Increased vertical padding
                mt={6} // Added more margin-top to push it down
                onClick={onClose}
                _hover={{ textDecoration: 'none', bg: 'var(--color-neon-green)', color: 'var(--color-black)' }}
                rounded={'md'}
                display="flex"
                justifyContent="center" // Center the logo in its link area
                alignSelf="center" // Center the link itself horizontally in the VStack
                aria-label="Dev Doc Website"
                className="dev-doc-logo-link mobile" // Added class for custom styling (and mobile specific if needed)
              >
                <Image src={DevDocLogoUrl} alt="Dev Doc Logo" h="40px" w="auto" />
              </ChakraLink>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;