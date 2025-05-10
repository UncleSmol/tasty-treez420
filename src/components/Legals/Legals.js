// Legals.js
import React from 'react';
import {
  Container,
  Heading,
  Text,
  VStack,
  Link as ChakraLink,
  Divider,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom'; // Added import for Link
import { motion } from 'framer-motion';

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

const LegalSection = ({ title, children }) => (
  <motion.div variants={fadeInUp}>
    <VStack align="start" spacing={3} w="full">
      <Heading as="h2" size="lg" color="var(--text-heading)" fontFamily="var(--font-primary)" borderBottom="2px solid var(--color-neon-green)" pb={1} display="inline-block">
        {title}
      </Heading>
      {children}
    </VStack>
  </motion.div>
);

const Legals = () => {
  return (
    <Container maxW="container.lg" py={{ base: 8, md: 16 }}>
      <motion.div initial="initial" animate="animate" variants={staggerContainer}>
        <VStack spacing={{ base: 10, md: 12 }} align="stretch">
          <motion.div variants={fadeInUp}>
            <Heading as="h1" size={{ base: 'xl', md: '2xl' }} textAlign="center" color="var(--text-heading)" fontFamily="var(--font-primary)" mb={8}>
              Legal <Text as="span" color="var(--color-neon-green)">Information</Text>
            </Heading>
            <Text textAlign="center" color="var(--text-muted)" fontSize="sm">
              Last Updated: {new Date().toLocaleDateString('en-ZA')}
            </Text>
          </motion.div>

          <Divider borderColor="var(--color-deep-purple)" />

          <LegalSection title="General Disclaimer">
            <Text color="var(--text-body)">
              The information provided by Tasty Treez 420 ("we," "us," or "our") on this website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
            </Text>
          </LegalSection>

          <LegalSection title="Age Restriction & Verification">
            <Text color="var(--text-body)">
              This website and its products are intended for use only by individuals aged 18 years and older residing in South Africa. By accessing this site and/or purchasing products, you confirm that you are at least 18 years of age. We reserve the right to request proof of age and to deny access or service to anyone not meeting this requirement.
            </Text>
          </LegalSection>

          <LegalSection title="Product Information & Intended Use">
            <Text color="var(--text-body)">
              Our products are intended for personal use only, in accordance with South African law regarding the private cultivation, possession, and use of cannabis by adults.
            </Text>
            <Text color="var(--text-body)" mt={2}>
              Information provided about strains, effects, and potential benefits is based on general knowledge and user experiences and should not be considered medical advice. Consult with a healthcare professional before using cannabis products, especially if you have pre-existing health conditions or are taking other medications.
            </Text>
          </LegalSection>

          <LegalSection title="Compliance with South African Law">
            <Text color="var(--text-body)">
              Tasty Treez 420 operates in compliance with the laws of South Africa. The Constitutional Court ruling of 2018 decriminalized the private use and cultivation of cannabis by adults. However, the sale of THC-containing cannabis products remains largely unregulated for recreational purposes.
            </Text>
            <Text color="var(--text-body)" mt={2}>
              We encourage all users to be aware of and adhere to current national and local regulations regarding cannabis. It is your responsibility to understand and comply with the laws applicable to you.
            </Text>
            <Text color="var(--text-body)" mt={2}>
              Our offerings may include accessories, cultivation supplies, or other related products that are legal to sell and purchase. Any products containing cannabinoids will be offered in strict compliance with applicable South African legislation.
            </Text>
          </LegalSection>

          <LegalSection title="Health and Safety">
            <Text color="var(--text-body)">
              Please consume cannabis responsibly. Do not operate machinery or drive under the influence. Keep all cannabis products out of reach of children and pets. If you are pregnant or breastfeeding, consult your doctor before using cannabis products.
            </Text>
          </LegalSection>

          <LegalSection title="Limitation of Liability">
            <Text color="var(--text-body)">
              Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
            </Text>
          </LegalSection>

          <LegalSection title="Intellectual Property">
            <Text color="var(--text-body)">
              All content on this website, including text, graphics, logos, images, and software, is the property of Tasty Treez 420 or its content suppliers and protected by South African and international copyright laws.
            </Text>
          </LegalSection>

          <LegalSection title="Governing Law">
            <Text color="var(--text-body)">
              These terms and conditions are governed by and construed in accordance with the laws of South Africa, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </Text>
          </LegalSection>

          <LegalSection title="Contact Us">
            <Text color="var(--text-body)">
              If you have any questions or concerns regarding these legal terms, please contact us via the information provided on our <ChakraLink as={Link} to="/connect" color="var(--text-link)" _hover={{ color: 'var(--text-link-hover)' }}>Connect With Us</ChakraLink> page.
            </Text>
          </LegalSection>

        </VStack>
      </motion.div>
    </Container>
  );
};

export default Legals;