import { Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import Layout from "../../components/ui/layout";
import { EpisodesPageProps } from "./types";

const Episodes: NextPage<EpisodesPageProps> = () => {
  return (
    <Layout title="Episodios">
      <Heading as="h1">Episodes</Heading>
    </Layout>
  );
};

export default Episodes;
