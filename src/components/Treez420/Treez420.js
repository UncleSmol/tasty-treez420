// Treez420.js
import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react'; // Import useEffect and useState

import ProductCard from '../ProductCard/ProductCard'; // Import the ProductCard component
import allProducts from '../../data/products'; // Import your sample data
// Example icons for categories
import { GiJoint, GiWrappedSweet, GiOilDrum, GiVial, GiRollingSuitcase } from 'react-icons/gi'; // Swapped GiGummyBear for GiWrappedSweet and GiVaping for GiVial

// Framer Motion variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

// Component for the horizontal scrollable area (for products)
const ProductScrollArea = ({ title, products = [], isSubCategory = false }) => ( // Accept products prop, default to empty array
  <VStack align="start" w="full" spacing={3} pl={isSubCategory ? { base: 4, md: 8 } : 0}> {/* Indent subcategories */}
    {title && ( // Display title only if provided (e.g., for sub-categories)
      <Heading as="h3" size="md" color="var(--text-heading)" fontFamily="var(--font-secondary)" fontWeight="medium">
        {title}
      </Heading>
    )}
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
      <HStack spacing={{ base: 4, md: 6 }} align="stretch" py={2}> {/* py for potential card shadows */}
        {/* Render actual ProductCard components */}
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </HStack>
    </Box>
  </VStack>
);

// Component for a single main category section
const CategorySection = ({ categoryTitle, icon, subCategories = [], products = [] }) => { // Accept products prop
  // AccordionButton styles can be customized here if needed
  // For example, to ensure it takes full width and has padding
  const buttonStyles = {
    _hover: { bg: 'rgba(48, 25, 52, 0.5)' }, // var(--color-deep-purple) with alpha
    p: 4, // Add padding to the button
    w: 'full', // Make button take full width
  };

  return (
    <AccordionItem borderTopWidth="1px" borderBottomWidth="0px" borderColor="var(--color-deep-purple)">
      <h2>
        <AccordionButton {...buttonStyles}>
          <HStack flex="1" textAlign="left" spacing={4}> {/* Increased spacing */}
            {icon && <Icon as={icon} w={{ base: 6, md: 8 }} h={{ base: 6, md: 8 }} color="var(--color-neon-green)" />}
            <Heading as="span" size={{ base: "md", md: "lg" }} color="var(--text-heading)" fontFamily="var(--font-primary)" fontWeight="medium"> {/* Changed h2 to span for semantics, size adjusted */}
              {categoryTitle}
            </Heading>
          </HStack>
          <AccordionIcon color="var(--color-neon-green)" fontSize="2xl" /> {/* Made icon larger and colored */}
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} pt={6} bg="rgba(0,0,0,0.2)"> {/* Added padding top and subtle bg to panel */}
      {subCategories.length > 0 ? (
        subCategories.map(sub => (
          <ProductScrollArea key={sub.name} title={sub.name} products={sub.products || []} isSubCategory={true} />
        ))
      ) : (
        <ProductScrollArea products={products} /> // Pass products prop here
      )}
      </AccordionPanel>
    </AccordionItem>
  );
};

const Treez420 = () => {
  // Define sub-categories for Smokes
  const smokesSubCategories = [
    { name: "Outdoor Grown" },
    { name: "Indoor Premium" },
    { name: "Greenhouse Selects" },
    { name: "Medicinal Strains" }, // Or "Wellness Strains"
    { name: "Exotic Collection" },
  ];

  // State for random selection
  const [randomProducts, setRandomProducts] = useState([]);

  // Function to select random products
  const selectRandomProducts = (products, count) => {
    const shuffled = products.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  // Select random products on component mount
  useEffect(() => {
    // Select, for example, 6 random products
    setRandomProducts(selectRandomProducts(allProducts, 6));
  }, []); // Empty dependency array means this runs once on mount

  return (
    <Container maxW="container.xl" py={{ base: 8, md: 16 }}>
      <VStack spacing={{ base: 8, md: 12 }} align="stretch">
        {/* Page Header */}
        <motion.div initial="initial" animate="animate" variants={fadeInUp}>
          <Heading as="h1" size={{ base: 'xl', md: '2xl' }} textAlign="center" color="var(--text-heading)" fontFamily="var(--font-primary)" mb={4}>
            Explore Our <Text as="span" color="var(--color-neon-green)">Treez</Text>
          </Heading>
          <Text fontSize={{ base: 'lg', md: 'xl' }} color="var(--text-body)" textAlign="center" maxW="3xl" mx="auto" mb={8}>
            Discover a curated selection of premium cannabis products. From classic smokes to delicious edibles and potent extracts, find your perfect match.
          </Text>
        </motion.div>

        {/* Random Selection Section */}
        {randomProducts.length > 0 && ( // Only show section if random products are available
          <motion.div variants={fadeInUp} style={{ width: '100%' }}>
            <VStack align="start" w="full" spacing={5} mb={{ base: 8, md: 12 }}>
            <Heading as="h2" size="lg" color="var(--text-heading)" fontFamily="var(--font-primary)">
              Curated <Text as="span" color="var(--color-neon-green)">For You</Text>
            </Heading>
            <Text color="var(--text-muted)" fontSize="md">
              A random selection of our finest Treez. Discover something new!
            </Text>
            {/* Pass the random products to the scroll area */}
            <ProductScrollArea products={randomProducts} />
          </VStack>
          </motion.div>
        )}

        {/* Accordion for Product Categories */}
        {/* allowToggle allows closing an open item. Default behavior is only one open. */}
        <Accordion allowToggle defaultIndex={[]} width="full" borderColor="transparent"> 
          {/* Smokes Section with Sub-Categories */}
          {/* Filter products for each sub-category and pass them */}
          <CategorySection
            categoryTitle="Smokes"
            icon={GiJoint}
            subCategories={smokesSubCategories.map(sub => ({
              ...sub,
              products: allProducts.filter(p => p.category === 'Smokes' && p.subCategory === sub.name)
            }))}
          />
          {/* Edibles Section */}
          <CategorySection categoryTitle="Edibles" icon={GiWrappedSweet} products={allProducts.filter(p => p.category === 'Edibles')} /> {/* Pass filtered products */}
          {/* Extracts Section */}
          <CategorySection categoryTitle="Extracts" icon={GiOilDrum} products={allProducts.filter(p => p.category === 'Extracts')} /> {/* Pass filtered products */}
          {/* Vapes Section */}
          <CategorySection categoryTitle="Vapes" icon={GiVial} products={allProducts.filter(p => p.category === 'Vapes')} /> {/* Pass filtered products */}
          {/* Accessories Section */}
          <CategorySection categoryTitle="Accessories" icon={GiRollingSuitcase} products={allProducts.filter(p => p.category === 'Accessories')} /> {/* Pass filtered products */}
        </Accordion>
      </VStack>
    </Container>
  );
};

export default Treez420;