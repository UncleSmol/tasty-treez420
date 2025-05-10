// ConnectWithUs.js
import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Link as ChakraLink,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Divider,
  IconButton,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
// Example icons from react-icons
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';

// Leaflet imports
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import L from 'leaflet'; // Import Leaflet core for custom icon if needed

// Fix for default marker icon issue with Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Framer Motion variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const SocialButton = ({ href, label, icon }) => (
  <ChakraLink href={href} isExternal>
    <IconButton
      aria-label={label}
      icon={<Icon as={icon} />}
      size="lg"
      isRound
      variant="outline"
      colorScheme="green" // Chakra's green, or use custom styling
      borderColor="var(--color-neon-green)"
      color="var(--color-neon-green)"
      _hover={{
        bg: 'var(--color-neon-green)',
        color: 'var(--color-black)',
        transform: 'scale(1.1)',
      }}
      transition="all 0.2s ease-in-out"
    />
  </ChakraLink>
);

const ConnectWithUs = () => {
  // Coordinates for 339 Jan Smuts Ave, Craighall Park, Randburg, 2196 (approximate)
  const position = [-26.1300, 28.0000];

  return (
    <Container maxW="container.lg" py={{ base: 8, md: 16 }}>
      <motion.div initial="initial" animate="animate" variants={staggerContainer}>
        <VStack spacing={{ base: 10, md: 16 }} align="stretch">
          <motion.section variants={fadeInUp}>
            <Heading as="h1" size={{ base: 'xl', md: '2xl' }} textAlign="center" color="var(--text-heading)" fontFamily="var(--font-primary)">
              Get in <Text as="span" color="var(--color-neon-green)">Touch</Text>
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} color="var(--text-body)" textAlign="center" mt={4} maxW="2xl" mx="auto">
              We'd love to hear from you! Whether you have a question about our products, want to share your experience, or just want to say hi, feel free to reach out.
            </Text>
          </motion.section>

          <Divider borderColor="var(--color-deep-purple)" />

          {/* Contact Details & Social Media */}
          <motion.section variants={fadeInUp}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 10, md: 20 }}>
              <VStack spacing={6} align="flex-start">
                <Heading as="h2" size="lg" color="var(--text-heading)" fontFamily="var(--font-primary)">
                  Contact <Text as="span" color="var(--color-neon-green)">Information</Text>
                </Heading>
                <HStack spacing={4}>
                  <Icon as={FaEnvelope} w={6} h={6} color="var(--color-neon-green)" />
                  <Text color="var(--text-body)">info@tastytreez420.com</Text>
                </HStack>
                <HStack spacing={4}>
                  <Icon as={FaPhoneAlt} w={6} h={6} color="var(--color-neon-green)" />
                  <Text color="var(--text-body)">0728440671</Text> {/* Updated Phone */}
                </HStack>
                <HStack spacing={4}>
                  <Icon as={FaMapMarkerAlt} w={6} h={6} color="var(--color-neon-green)" />
                  <Text color="var(--text-body)">339 Jan Smuts Ave, Craighall Park, Randburg, 2196</Text> {/* Updated Address */}
                </HStack>
              </VStack>

              <VStack spacing={6} align={{ base: 'flex-start', md: 'flex-start' }}> {/* Align left on desktop too for consistency */}
                <Heading as="h2" size="lg" color="var(--text-heading)" fontFamily="var(--font-primary)">
                  Follow <Text as="span" color="var(--color-neon-green)">Us</Text>
                </Heading>
                <HStack spacing={4}>
                  <SocialButton href="https://instagram.com" label="Instagram" icon={FaInstagram} />
                  <SocialButton href="https://twitter.com" label="Twitter" icon={FaTwitter} />
                  <SocialButton href="https://facebook.com" label="Facebook" icon={FaFacebookF} />
                </HStack> {/* Instagram link updated in SocialButton component usage */}
              </VStack>
            </SimpleGrid>
          </motion.section>

          <Divider borderColor="var(--color-deep-purple)" />

          {/* Contact Form Placeholder/Simple Form */}
          <motion.section variants={fadeInUp}>
            <Box bg="rgba(48, 25, 52, 0.2)" p={{ base: 6, md: 8 }} rounded="lg" border="1px solid var(--color-deep-purple)">
              <Heading as="h2" size="lg" textAlign="center" mb={8} color="var(--text-heading)" fontFamily="var(--font-primary)">
                Send Us a <Text as="span" color="var(--color-neon-green)">Message</Text>
              </Heading>
              <VStack spacing={6} as="form" onSubmit={(e) => e.preventDefault()}> {/* Basic form, prevent default */}
                <FormControl id="name" isRequired>
                  <FormLabel color="var(--text-light-grey)">Full Name</FormLabel>
                  <Input type="text" placeholder="Your Name" focusBorderColor="var(--color-neon-green)" borderColor="var(--color-deep-purple)" _hover={{ borderColor: 'var(--highlight-main)' }} />
                </FormControl>
                <FormControl id="email" isRequired>
                  <FormLabel color="var(--text-light-grey)">Email Address</FormLabel>
                  <Input type="email" placeholder="your.email@example.com" focusBorderColor="var(--color-neon-green)" borderColor="var(--color-deep-purple)" _hover={{ borderColor: 'var(--highlight-main)' }} />
                </FormControl>
                <FormControl id="message" isRequired>
                  <FormLabel color="var(--text-light-grey)">Message</FormLabel>
                  <Textarea placeholder="Your message here..." rows={5} focusBorderColor="var(--color-neon-green)" borderColor="var(--color-deep-purple)" _hover={{ borderColor: 'var(--highlight-main)' }} />
                </FormControl>
                <Button
                  type="submit"
                  bg="var(--color-neon-green)"
                  color="var(--color-black)"
                  _hover={{ bg: 'var(--text-link-hover)' }}
                  size="lg"
                  w="full"
                  fontFamily="var(--font-primary)"
                >
                  Send Message
                </Button>
              </VStack>
            </Box>
          </motion.section>

          <Divider borderColor="var(--color-deep-purple)" />

          {/* Map Section */}
          <motion.section variants={fadeInUp}>
            <Heading as="h2" size="lg" textAlign="center" mb={8} color="var(--text-heading)" fontFamily="var(--font-primary)">
              Find <Text as="span" color="var(--color-neon-green)">Us</Text>
            </Heading>
            <Box
              h={{ base: '300px', md: '400px' }} // Set a height for the map container
              w="full"
              rounded="lg"
              overflow="hidden" // Ensure map corners are rounded
              border="1px solid var(--color-deep-purple)"
            >
              <MapContainer center={position} zoom={15} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
                <Marker position={position}><Popup>Tasty Treez 420</Popup></Marker>
              </MapContainer>
            </Box>
          </motion.section>
        </VStack>
      </motion.div>
    </Container>
  );
};

export default ConnectWithUs;