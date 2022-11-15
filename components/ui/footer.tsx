import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="footer" textAlign="center" color="gray.700" py={4}>
      <Text>
        Website made by
        <a
          href="https://github.com/H4rasho"
          target="_blank"
          rel="noreferrer noopener"
        >
          {" "}
          @H4rasho
        </a>
      </Text>
      <Text>
        Using{" "}
        <a
          href="https://rickandmortyapi.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Rick and Morty API
        </a>
      </Text>
    </Box>
  );
}
