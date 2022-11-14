import { Heading } from "@chakra-ui/react";

export default function H1({ children }: { children: string }) {
  return (
    <Heading
      as="h1"
      textAlign="center"
      fontWeight="bold"
      p={4}
      bg="white"
      mt={2}
      mb={2}
    >
      {children}
    </Heading>
  );
}
