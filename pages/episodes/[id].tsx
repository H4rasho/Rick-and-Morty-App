import { Box, Flex, Heading, Text, Tooltip } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRef } from "react";
import Layout from "../../components/ui/layout";
import { getEpisodeById } from "../../services/episodes/get.episode.by";
import { EpisodeDetails } from "../../services/episodes/types";

export interface EpisodeDetailsProps {
  episode: EpisodeDetails;
}

const EspisodeDetailsPage = ({ episode }: EpisodeDetailsProps) => {
  const imageRef = useRef(null);

  return (
    <Layout title={episode.name}>
      <Box bg="white" rounded="xl" p={4} mt={4}>
        <Heading as="h1" textAlign="center">
          {episode.name}
        </Heading>
        <Text>Temporada: {episode.episode}</Text>
        <time>Fecha de emision: {episode.air_date}</time>
        <Text>Personajes: {episode.characters.length}</Text>
        <Flex wrap="wrap" p={2} gap={1}>
          {episode.characters.map((character) => (
            <Tooltip label={character.name} key={character.id}>
              <Box ref={imageRef}>
                <Image
                  key={character.id}
                  src={character.image}
                  alt={character.name}
                  width={70}
                  height={70}
                />
              </Box>
            </Tooltip>
          ))}
        </Flex>
      </Box>
    </Layout>
  );
};

export default EspisodeDetailsPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const episodeId = params?.id as string;
  const episode = await getEpisodeById(episodeId);

  return {
    props: {
      episode,
    },
  };
};
