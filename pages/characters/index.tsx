import type { GetServerSideProps, NextPage } from "next";
import { Button } from "@chakra-ui/react";

import Layout from "../../components/ui/layout";
import { getAllCharacters } from "../../services/characters/get.all.characters";
import { CharacterPageProps } from "./types";

import CharacterList from "../../components/characters/character.list";
import { usePagination } from "../../hooks/usePagination";
import H1 from "../../components/ui/h1";

const Characters: NextPage<CharacterPageProps> = ({
  characters,
  next,
  prev,
}) => {
  const { handlePageChange } = usePagination(1);

  return (
    <Layout title="Personajes">
      <H1>Personajes</H1>

      <CharacterList characters={characters} />

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
