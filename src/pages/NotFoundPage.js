import { Box, Heading, Text, Button } from '@chakra-ui/react';

export default function NotFoundPage() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.500)"
        backgroundClip="text">
        404
      </Heading>
      <Heading as="h1" mt={3} mb={2}>
        Page Not Found
      </Heading>
      <Text color={'gray.500'} mb={6}>
        The page you're looking for does not seem to exist
      </Text>

      <Button
        colorScheme="teal"
        bgGradient="linear(to-r, teal.400, teal.500)"
        color="white"
        variant="solid">
        Go to Home
      </Button>
    </Box>
  );
}