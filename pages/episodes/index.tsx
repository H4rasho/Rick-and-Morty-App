import { Button, Flex } from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import EpisodeList from "../../components/episodes/episode.list";
import H1 from "../../components/ui/h1";
import Layout from "../../components/ui/layout";
import { usePagination } from "../../hooks/usePagination";
import { getAllEpisodes } from "../../services/episodes/get.all.episodes";
import { EpisodesPageProps } from "./types";

const Episodes: NextPage<EpisodesPageProps> = ({ episodes, prev, next }) => {
  const { handlePageChange } = usePagination(1);

  return (
    <Layout title="Episodios">
      <H1>Episodes</H1>
      <EpisodeList episodes={episodes} />
      <Flex justifyContent="center" p={4} mt={2} mb={2} gap={16} bg="white">
        {prev && (
          <Button fontSize="2xl" onClick={() => handlePageChange(prev)}>
            <span>⬅️ </span> Anterior
          </Button>
        )}
        {next && (
          <Button fontSize="2xl" onClick={() => handlePageChange(next)}>
            Siguiente<span>➡️ </span>
          </Button>
        )}
      </Flex>
    </Layout>
  );
};

export default Episodes;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const page = query.page ?? 1;
  const name = query.name as string;
  const { episodes, info } = await getAllEpisodes(Number(page), { name });
  const { next, prev } = info;

  return {
    props: {
      episodes,
      next,
      prev,
    },
  };
};
