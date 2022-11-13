import { Box, Heading, VStack } from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import Layout from "../../components/ui/layout";
import { getAllEpisodes } from "../../services/episodes/get.all.episodes";
import { EpisodesPageProps } from "./types";

const Episodes: NextPage<EpisodesPageProps> = ({ episodes }) => {
  return (
    <Layout title="Episodios">
      <Heading as="h1" mb={4} textAlign="center">
        Episodes
      </Heading>
      <VStack>
        {episodes.map((episode) => (
          <Box key={episode.id} w="full" bg="white" p={4} rounded="xl">
            <Heading as="h2">{episode.name}</Heading>
            <p>{episode.episode}</p>
            <time>{episode.air_date}</time>
          </Box>
        ))}
      </VStack>
    </Layout>
  );
};

export default Episodes;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const page = query.page ?? 1;
  const { episodes, info } = await getAllEpisodes(Number(page));
  const { next, prev } = info;

  return {
    props: {
      episodes,
      next,
      prev,
    },
  };
};
