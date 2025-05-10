import React from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Icon,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Tag,
  Flex,
} from '@chakra-ui/react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'; // Import gallery styles
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'; // For rating
import { motion } from 'framer-motion';

// Framer Motion variant for card hover
const cardHover = {
  hover: {
    scale: 1.03,
    boxShadow: '0px 10px 20px var(--color-neon-green-shadow, rgba(57, 255, 20, 0.2))',
    transition: { duration: 0.2 }
  }
};

const Rating = ({ rating, numReviews }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <HStack spacing={1}>
      {[...Array(fullStars)].map((_, i) => (
        <Icon key={`full-${i}`} as={FaStar} color="var(--color-neon-green)" />
      ))}
      {halfStar && <Icon as={FaStarHalfAlt} color="var(--color-neon-green)" />}
      {[...Array(emptyStars)].map((_, i) => (
        <Icon key={`empty-${i}`} as={FaRegStar} color="var(--color-neon-green)" />
      ))}
      {numReviews && <Text fontSize="xs" color="var(--text-muted)">({numReviews})</Text>}
    </HStack>
  );
};

const ProductCard = ({ product }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Ensure product and product.images exist
  if (!product) {
    return <Box>Product data is missing.</Box>;
  }

  const images = product.images && product.images.length > 0
    ? product.images
    : [{ original: 'https://via.placeholder.com/400x300.png?text=No+Image', thumbnail: 'https://via.placeholder.com/80x60.png?text=No+Img' }];

  return (
    <>
      <motion.div variants={cardHover} whileHover="hover">
        <VStack
          borderWidth="1px"
          borderColor="var(--color-deep-purple)"
          borderRadius="lg"
          overflow="hidden"
          p={4}
          spacing={3}
          align="stretch"
          bg="rgba(48, 25, 52, 0.3)" // Subtle deep purple background
          minW={{ base: "200px", md: "240px" }} // Ensure cards have a decent min width
          h="full" // Make card take full height in a flex/grid row
          cursor="pointer"
          onClick={onOpen} // Open modal on card click
        >
          <Box className="product-image-gallery-container" w="full" h={{ base: "150px", md: "180px" }} mb={2}>
            <ImageGallery
              items={images}
              showThumbnails={images.length > 1}
              showFullscreenButton={false}
              showPlayButton={false}
              showNav={images.length > 1}
              slideDuration={350}
            />
          </Box>

          <Heading as="h3" size="sm" color="var(--text-heading)" fontFamily="var(--font-primary)" noOfLines={2}>
            {product.name || 'Unnamed Product'}
          </Heading>

          {product.category && (
            <Tag size="sm" colorScheme="purple" variant="subtle" alignSelf="flex-start">
              {product.category}
            </Tag>
          )}

          <Text fontSize="xs" color="var(--text-muted)" noOfLines={3}>
            {product.shortDescription || 'No description available.'}
          </Text>

          <Flex justifyContent="space-between" alignItems="center" w="full">
            {product.rating !== undefined && <Rating rating={product.rating} numReviews={product.numReviews} />}
            {product.price && (
              <Text fontWeight="bold" color="var(--color-neon-green)" fontSize="sm">
                {product.price}
              </Text>
            )}
          </Flex>

          <Button
            variant="outline"
            borderColor="var(--color-neon-green)"
            color="var(--color-neon-green)"
            _hover={{ bg: 'var(--color-neon-green)', color: 'var(--color-black)' }}
            size="sm"
            onClick={(e) => { e.stopPropagation(); onOpen(); }} // Prevent card click from triggering twice
          >
            View Details
          </Button>
        </VStack>
      </motion.div>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay bg="blackAlpha.800" />
        <ModalContent bg="var(--color-black)" color="var(--text-light-grey)" border="1px solid var(--color-deep-purple)">
          <ModalHeader fontFamily="var(--font-primary)" color="var(--color-neon-green)" borderBottom="1px solid var(--color-deep-purple)">
            {product.name || 'Product Details'}
          </ModalHeader>
          <ModalCloseButton _focus={{ boxShadow: 'none' }} _hover={{ bg: 'var(--color-deep-purple)' }} />
          <ModalBody py={6}>
            <VStack spacing={4} align="stretch">
              <Box className="modal-image-gallery-container" w="full" maxH="400px" overflow="hidden" mb={4}>
                 <ImageGallery
                    items={images}
                    showThumbnails={images.length > 1}
                    showFullscreenButton={true}
                    showPlayButton={false}
                    showNav={images.length > 1}
                  />
              </Box>
              {product.rating !== undefined && <Rating rating={product.rating} numReviews={product.numReviews} />}
              <Text color="var(--text-body)" whiteSpace="pre-wrap"> {/* pre-wrap to respect newlines in description */}
                {product.fullDescription || product.shortDescription || 'No detailed description available.'}
              </Text>
              {/* Add more details like strain type, effects, terpenes etc. here */}
            </VStack>
          </ModalBody>
          <ModalFooter borderTop="1px solid var(--color-deep-purple)">
            <Button variant="ghost" _hover={{ bg: 'var(--color-deep-purple)' }} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProductCard;