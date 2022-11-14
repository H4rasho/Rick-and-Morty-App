import { Heading } from "@chakra-ui/react";

export default function H2({ children }: { children: string }) {
  return (
    <Heading
      as="h2"
      textAlign="left"
      fontWeight="bold"
      p={4}
      bg="#ccff33"
      mb={2}
      mt={2}
    >
      {children}
    </Heading>
  );
}
