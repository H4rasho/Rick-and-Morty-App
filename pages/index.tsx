import type { NextPage } from "next";
import { Box, Container, Heading } from "@chakra-ui/react";

import Layout from "../components/ui/layout";

const Home: NextPage = () => {
  return (
    <Box h="100vh" bg="#70e000" as="main">
      <Container>
        <Layout title="Home">
          <Heading>Home</Heading>
        </Layout>
      </Container>
    </Box>
  );
};

export default Home;
