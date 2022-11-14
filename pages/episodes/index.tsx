import { Button } from "@chakra-ui/react";
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
      {prev && <Button onClick={() => handlePageChange(prev)}>Prev</Button>}
      {next && <Button onClick={() => handlePageChange(next)}>Next</Button>}
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
