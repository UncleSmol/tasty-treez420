// KnowUs.js
import React from 'react';
import {
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Icon,
  Divider,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import 'react-lazy-load-image-component/src/effects/blur.css';
// Example icons, you can choose others from react-icons
import { FaLeaf, FaUsers, FaHeart, FaShieldAlt } from 'react-icons/fa';

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

const ValueCard = ({ icon, title, children }) => (
  <motion.div variants={fadeInUp}>
    <VStack
      bg="rgba(48, 25, 52, 0.3)" // Subtle deep purple with transparency
      p={6}
      rounded="lg"
      spacing={4}
      align="center"
      textAlign="center"
      border="1px solid var(--color-deep-purple)"
      _hover={{
        borderColor: 'var(--color-neon-green)',
        transform: 'translateY(-5px)',
        boxShadow: '0px 10px 20px rgba(57, 255, 20, 0.1)',
      }}
      transition="all 0.3s ease-in-out"
    >
      <Icon as={icon} w={12} h={12} color="var(--color-neon-green)" />
      <Heading as="h3" size="md" color="var(--text-heading)" fontFamily="var(--font-primary)">
        {title}
      </Heading>
      <Text color="var(--text-body)">{children}</Text>
    </VStack>
  </motion.div>
);

const KnowUs = () => {
  return (
    <Container maxW="container.xl" py={{ base: 8, md: 16 }}>
      <motion.div initial="initial" animate="animate" variants={staggerContainer}>
        <VStack spacing={{ base: 12, md: 20 }} align="stretch">
          {/* Our Story Section */}
          <motion.section variants={fadeInUp}>
            <VStack spacing={6} textAlign="center">
              <Heading as="h1" size={{ base: 'xl', md: '2xl' }} color="var(--text-heading)" fontFamily="var(--font-primary)">
                Our <Text as="span" color="var(--color-neon-green)">Story</Text>
              </Heading>
              <Text fontSize={{ base: 'lg', md: 'xl' }} color="var(--text-body)" maxW="3xl" mx="auto">
                Tasty Treez 420 was born from a shared passion for the incredible cannabis plant and a desire to provide a truly exceptional experience. We started as a small collective of enthusiasts and cultivators who believed that everyone deserves access to high-quality, responsibly sourced cannabis.
              </Text>
              <Text fontSize={{ base: 'md', md: 'lg' }} color="var(--text-muted)" maxW="3xl" mx="auto">
                Our journey has been one of dedication, learning, and a commitment to the craft. We've explored countless strains, perfected our cultivation techniques, and built a community around the values of quality, transparency, and respect for nature.
              </Text>
            </VStack>
          </motion.section>

          <Divider borderColor="var(--color-deep-purple)" />

          {/* Our Values Section */}
          <motion.section variants={fadeInUp}>
            <VStack spacing={8}>
              <Heading as="h2" size={{ base: 'lg', md: 'xl' }} textAlign="center" color="var(--text-heading)" fontFamily="var(--font-primary)">
                Our Core <Text as="span" color="var(--color-neon-green)">Values</Text>
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={{ base: 6, md: 8 }}>
                <ValueCard icon={FaLeaf} title="Premium Quality">
                  We meticulously select and cultivate only the finest strains, ensuring every product meets our high standards for potency, flavor, and purity.
                </ValueCard>
                <ValueCard icon={FaUsers} title="Community Focused">
                  Tasty Treez is more than a brand; it's a community. We strive to educate, engage, and give back to the people and places that support us.
                </ValueCard>
                <ValueCard icon={FaHeart} title="Passion & Craft">
                  Our love for cannabis drives us. From seed to sale, every step is handled with care, expertise, and a genuine passion for the art of cultivation.
                </ValueCard>
                <ValueCard icon={FaShieldAlt} title="Transparency & Trust">
                  We believe in open communication and providing clear information about our products, sourcing, and testing, building trust with every interaction.
                </ValueCard>
              </SimpleGrid>
            </VStack>
          </motion.section>

          <Divider borderColor="var(--color-deep-purple)" />

          {/* Our Commitment Section (Example) */}
          <motion.section variants={fadeInUp}>
            <VStack spacing={6} textAlign="center">
              <Heading as="h2" size={{ base: 'lg', md: 'xl' }} color="var(--text-heading)" fontFamily="var(--font-primary)">
                Our <Text as="span" color="var(--color-neon-green)">Commitment</Text>
              </Heading>
              <Text fontSize={{ base: 'lg', md: 'xl' }} color="var(--text-body)" maxW="3xl" mx="auto">
                At Tasty Treez 420, we are committed to sustainable practices, ethical sourcing, and continuous innovation. We aim to not only provide exceptional products but also to contribute positively to the cannabis industry and our local environment. Your satisfaction and well-being are at the heart of everything we do.
              </Text>
              {/* You could add an image here if relevant */}
              {/* <Box boxSize="sm" mt={6} mx="auto">
                <LazyLoadImage
                  alt="Commitment to quality"
                  effect="blur"
                  src="your-image-url.jpg" // Replace with an actual image URL
                  wrapperProps={{ style: { width: '100%', height: '100%' } }}
                  style={{ objectFit: 'cover', borderRadius: 'md', width: '100%', height: '100%' }}
                />
              </Box> */}
            </VStack>
          </motion.section>
        </VStack>
      </motion.div>
    </Container>
  );
};

export default KnowUs;