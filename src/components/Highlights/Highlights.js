// Highlights.js
import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Link as ChakraLink,
  Icon,
  HStack,
  Divider,
  Button,
  Tag,
  useColorModeValue,
  IconButton,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// Example icons
import { FaCalendarAlt, FaRss, FaBullhorn, FaInstagram, FaTwitter, FaFacebookF, FaArrowRight } from 'react-icons/fa';

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

const HighlightCard = ({ icon, title, date, description, link, linkText, category, categoryColor }) => (
  <motion.div variants={fadeInUp}>
    <VStack
      bg="rgba(48, 25, 52, 0.3)" // Subtle deep purple
      p={6}
      rounded="lg"
      spacing={4}
      align="start"
      border="1px solid var(--color-deep-purple)"
      _hover={{
        borderColor: 'var(--color-neon-green)',
        transform: 'translateY(-5px)',
        boxShadow: '0px 10px 20px rgba(57, 255, 20, 0.1)',
      }}
      transition="all 0.3s ease-in-out"
      h="full" // Make cards in a row equal height
    >
      <HStack justifyContent="space-between" w="full">
        <Icon as={icon} w={8} h={8} color="var(--color-neon-green)" />
        {category && <Tag size="sm" variant="solid" bg={categoryColor || 'var(--color-neon-green)'} color="var(--color-black)" fontFamily="var(--font-secondary)">{category}</Tag>}
      </HStack>
      <Heading as="h3" size="md" color="var(--text-heading)" fontFamily="var(--font-primary)">
        {title}
      </Heading>
      {date && <Text fontSize="sm" color="var(--text-muted)" fontFamily="var(--font-secondary)">{date}</Text>}
      <Text color="var(--text-body)" flexGrow={1}>{description}</Text>
      {link && (
        <ChakraLink as={RouterLink} to={link} color="var(--text-link)" fontWeight="bold" _hover={{ color: 'var(--text-link-hover)' }}>
          {linkText || 'Learn More'} <Icon as={FaArrowRight} ml={1} />
        </ChakraLink>
      )}
    </VStack>
  </motion.div>
);

const SocialButton = ({ href, label, icon }) => (
  <ChakraLink href={href} isExternal>
    <IconButton
      aria-label={label}
      icon={<Icon as={icon} />}
      size="lg"
      isRound
      variant="outline"
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

const Highlights = () => {
  const sectionBgColor = useColorModeValue('gray.800', 'rgba(0,0,0,0.2)'); // Slightly different bg for sections

  // Placeholder data - replace with actual data fetching
  const events = [
    { id: 1, icon: FaCalendarAlt, title: "Strain Showcase: Green Crack", date: "May 25, 2025", description: "Join us for an exclusive look at our latest harvest of Green Crack. Tastings and expert insights!", category: "Event", categoryColor: "purple.500" },
    { id: 2, icon: FaBullhorn, title: "New Edibles Line Launch", date: "June 10, 2025", description: "We're excited to announce our new line of artisanal edibles. Be the first to try!", category: "Announcement", categoryColor: "orange.500" },
  ];

  const news = [
    { id: 1, icon: FaRss, title: "Tasty Treez Featured in 'High Times'", date: "May 15, 2025", description: "Check out our feature article discussing sustainable cultivation practices in South Africa.", link: "#", linkText: "Read Article", category: "News" },
  ];

  return (
    <Container maxW="container.xl" py={{ base: 8, md: 16 }}>
      <motion.div initial="initial" animate="animate" variants={staggerContainer}>
        <VStack spacing={{ base: 12, md: 20 }} align="stretch">
          <motion.section variants={fadeInUp}>
            <Heading as="h1" size={{ base: 'xl', md: '2xl' }} textAlign="center" color="var(--text-heading)" fontFamily="var(--font-primary)" mb={4}>
              Latest <Text as="span" color="var(--color-neon-green)">Happenings</Text>
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} color="var(--text-body)" textAlign="center" maxW="3xl" mx="auto">
              Stay updated with the latest events, news, and announcements from Tasty Treez 420.
            </Text>
          </motion.section>

          {/* Events & Announcements Section */}
          <motion.section variants={fadeInUp}>
            <VStack spacing={8} align="stretch">
              <Heading as="h2" size="xl" color="var(--text-heading)" fontFamily="var(--font-primary)" borderBottom="2px solid var(--color-neon-green)" pb={2} display="inline-block">
                Events & <Text as="span" color="var(--color-neon-green)">Announcements</Text>
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                {events.map(event => <HighlightCard key={event.id} {...event} />)}
              </SimpleGrid>
            </VStack>
          </motion.section>

          <Divider borderColor="var(--color-deep-purple)" />

          {/* News Section */}
          <motion.section variants={fadeInUp}>
            <VStack spacing={8} align="stretch">
              <Heading as="h2" size="xl" color="var(--text-heading)" fontFamily="var(--font-primary)" borderBottom="2px solid var(--color-neon-green)" pb={2} display="inline-block">
                In The <Text as="span" color="var(--color-neon-green)">News</Text>
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}> {/* Can adjust columns */}
                {news.map(item => <HighlightCard key={item.id} {...item} />)}
                {/* Add more news items or a "View All News" button */}
              </SimpleGrid>
            </VStack>
          </motion.section>

          <Divider borderColor="var(--color-deep-purple)" />

          {/* Social Feeds Section */}
          <motion.section variants={fadeInUp}>
            <VStack spacing={8} align="center">
              <Heading as="h2" size="xl" color="var(--text-heading)" fontFamily="var(--font-primary)">
                Stay <Text as="span" color="var(--color-neon-green)">Connected</Text>
              </Heading>
              <Text color="var(--text-body)" textAlign="center">Follow us on social media for daily updates, behind-the-scenes content, and community chat!</Text>
              <HStack spacing={6} py={4}>
                <SocialButton href="https://www.instagram.com/tasty0treez/" label="Instagram" icon={FaInstagram} />
                <SocialButton href="https://twitter.com" label="Twitter" icon={FaTwitter} />
                <SocialButton href="https://facebook.com" label="Facebook" icon={FaFacebookF} />
              </HStack>
              <Box p={6} bg={sectionBgColor} rounded="lg" w="full" maxW="lg" textAlign="center">
                <Text color="var(--text-muted)">(Placeholder for an embedded social media feed, e.g., Instagram or Twitter widget)</Text>
              </Box>
            </VStack>
          </motion.section>

        </VStack>
      </motion.div>
    </Container>
  );
};

export default Highlights;