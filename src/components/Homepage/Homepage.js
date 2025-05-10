// Homepage.js
import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  Container,
  HStack, // Changed from SimpleGrid
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

import allProducts from '../../data/products'; // Import your product data
import ProductCard from '../ProductCard/ProductCard'; // Import ProductCard

// Framer Motion variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Homepage = () => {
  // Using Chakra's color mode hook for semantic colors if needed, or stick to CSS vars
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    // Function to parse price string (e.g., "R150 / 3.5g") to a number
    const parsePrice = (priceString) => {
      if (!priceString) return 0;
      const match = priceString.match(/R(\d+)/);
      return match ? parseFloat(match[1]) : 0;
    };

    // Sort products by price (descending) and take top 3
    const sortedProducts = [...allProducts].sort((a, b) => {
      const priceA = parsePrice(a.price);
      const priceB = parsePrice(b.price);
      return priceB - priceA; // Sort descending
    });

    setFeaturedProducts(sortedProducts.slice(0, 3));
  }, []);

  const sectionBgColor = useColorModeValue('gray.700', 'var(--color-deep-purple)');

  return (
    <VStack  spacing={{ base: 16, md: 24 }} align="stretch">
      {/* Hero Section */}
      <motion.div initial="initial" animate="animate" variants={fadeInUp}>
        <Flex
          w={'full'}
          h={{ base: '70vh', md: '85vh' }}
          backgroundImage={
            // Replace with a high-quality, relevant hero image URL
            "url('https://images.unsplash.com/photo-1556928045-16f7f50be0f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')"
          }
          backgroundSize={'cover'}
          backgroundPosition={'center center'}
          backgroundAttachment={{ md: 'fixed' }} // Parallax-like effect on desktop
        >
          <VStack
            w={'full'}
            justify={'center'}
            px={{ base: 4, md: 8 }}
            bgGradient={'linear(to-r, blackAlpha.800, transparent)'} // Darken one side for text readability
          >
            <Box maxW={'2xl'} textAlign={{ base: 'center', md: 'left' }}>
              <motion.div variants={fadeInUp}>
                <Heading
                  color={'var(--color-neon-green)'}
                  fontWeight={900}
                  lineHeight={1.2}
                  fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
                  fontFamily={'var(--font-primary)'}
                >
                  Tasty Treez 420
                </Heading>
              </motion.div>
              <motion.div variants={fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }}>
                <Text
                  color={'var(--text-light-grey)'}
                  mt={4}
                  fontSize={{ base: 'md', lg: 'lg' }}
                >
                  Discover premium cannabis products and unique strains. Your go-to source for unparalleled quality and flavor, delivered with passion.
                </Text>
              </motion.div>
              <motion.div variants={fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.4 }}>
                <Button
                  as={RouterLink}
                  to="/treez"
                  mt={8}
                  size={'lg'}
                  bg={'var(--color-neon-green)'}
                  color={'var(--color-black)'}
                  _hover={{
                    bg: 'var(--text-link-hover)',
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}
                  px={8}
                  fontFamily={'var(--font-primary)'}
                >
                  Explore Our Treez
                </Button>
              </motion.div>
            </Box>
          </VStack>
        </Flex>
      </motion.div>

      {/* Who We Are & What We Do Section */}
      <Container maxW={'container.lg'} py={10}>
        <motion.div initial="initial" animate="animate" variants={staggerContainer}>
          <VStack spacing={12}>
            <motion.div variants={fadeInUp}>
              <Heading as="h2" size="2xl" textAlign="center" color="var(--text-heading)" fontFamily="var(--font-primary)">
                Who is <Text as="span" color="var(--color-neon-green)">Tasty Treez?</Text>
              </Heading>
              <Text fontSize="lg" color="var(--text-body)" textAlign="center" maxW="3xl" mx="auto" mt={4}>
                We are passionate cultivators and connoisseurs dedicated to bringing you the finest cannabis experience. At Tasty Treez 420, we believe in quality, transparency, and a deep respect for the plant. Our mission is to elevate your senses and provide products that truly stand out.
              </Text>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Heading as="h2" size="xl" textAlign="center" color="var(--text-heading)" fontFamily="var(--font-primary)">
                What We <Text as="span" color="var(--color-neon-green)">Offer</Text>
              </Heading>
              <Text fontSize="lg" color="var(--text-body)" textAlign="center" maxW="3xl" mx="auto" mt={4}>
                From meticulously grown flower to potent concentrates and delicious edibles, our selection is curated to satisfy every palate. We focus on sustainable practices, innovative strains, and providing our community with safe, tested, and exceptional cannabis products.
              </Text>
            </motion.div>
          </VStack>
        </motion.div>
      </Container>

      {/* Weekly Selection Placeholder Section */}
      <Box bg={sectionBgColor} py={{ base: 12, md: 20 }} px={{ base: 4, md: 8 }}>
        <Container maxW={'container.xl'}>
          <motion.div initial="initial" animate="animate" variants={fadeInUp}>
            <Heading as="h2" size="2xl" textAlign="center" color="var(--text-heading)" fontFamily="var(--font-primary)" mb={10}>
              This Week's <Text as="span" color="var(--color-neon-green)">Featured Treez</Text>
            </Heading>
            {featuredProducts.length > 0 ? (
              <Box
                w="full"
                overflowX="auto"
                pb={4} // Padding for scrollbar visibility
                sx={{
                  '&::-webkit-scrollbar': { height: '8px' },
                  '&::-webkit-scrollbar-track': { background: 'var(--color-deep-purple)', borderRadius: '10px' },
                  '&::-webkit-scrollbar-thumb': { background: 'var(--color-neon-green)', borderRadius: '10px' },
                  '&::-webkit-scrollbar-thumb:hover': { background: 'var(--text-link-hover)' },
                  // For Firefox
                  scrollbarWidth: 'thin',
                  scrollbarColor: 'var(--color-neon-green) var(--color-deep-purple)',
                }}
              >
                <HStack spacing={{ base: 4, md: 6 }} align="stretch" py={2}>
                  {featuredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </HStack>
              </Box>
            ) : (
              <Text fontSize="xl" color="var(--text-body)" textAlign="center">
                Loading featured products...
              </Text>
            )}
          </motion.div>
        </Container>
      </Box>

      {/* You can add more sections here, e.g., Testimonials, Blog Teasers, etc. */}

    </VStack>
  );
};

export default Homepage;