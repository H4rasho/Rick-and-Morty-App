import type { GetServerSideProps, NextPage } from "next";
import { Button, Grid, Heading } from "@chakra-ui/react";

import Layout from "../../components/ui/layout";
import { getAllCharacters } from "../../services/characters/get.all.characters";
import { CharacterPageProps } from "./types";

import CharacterList from "../../components/characters/character.list";
import { usePagination } from "../../hooks/usePagination";

const Characters: NextPage<CharacterPageProps> = ({
  characters,
  next,
  prev,
}) => {
  const { handlePageChange } = usePagination(1);

  return (
    <Layout title="Personajes">
      <Heading as="h1" textAlign="center">
        Personajes
      </Heading>
      <Grid
        as="section"
        gap={2}
        templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
      >
        <CharacterList characters={characters} />
      </Grid>
      {prev && <Button onClick={() => handlePageChange(prev)}>Prev</Button>}
      {next && <Button onClick={() => handlePageChange(next)}>Next</Button>}
    </Layout>
  );
};

export default Characters;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const page = query.page ?? 1;
  const name = query.name as string;
  const status = query.status as string;
  const gender = query.gender as string;

  const { characters, info } = await getAllCharacters(Number(page), {
    name,
    status,
    gender,
  });

  const { next, prev } = info;

  return {
    props: {
      characters,
      next,
      prev,
    },
  };
};
