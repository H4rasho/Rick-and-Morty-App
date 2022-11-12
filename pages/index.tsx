import type { NextPage } from "next";
import { Container, Heading } from "@chakra-ui/react";

import Layout from "../components/ui/layout";

const Home: NextPage = () => {
  return (
    <Container size="md">
      <Layout title="Home">
        <Heading>Home</Heading>
      </Layout>
    </Container>
  );
};

export default Home;
