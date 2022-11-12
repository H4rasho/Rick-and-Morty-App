import { useRouter } from "next/router";
import type { GetServerSideProps, NextPage } from "next";
import { Box, Button, Container, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Layout from "../../components/ui/layout";
import { getAllCharacters } from "../../services/characters/get.all.characters";
import { CharacterPageProps } from "./types";

const Characters: NextPage<CharacterPageProps> = ({
  characters,
  next,
  prev,
}) => {
  const [page, setPage] = useState(1);
  const router = useRouter();

  useEffect(() => {
    router.push(`characters/?page=${page}`);
  }, [page]);

  return (
    <Box h="100vh" bg="#70e000" as="main">
      <Container>
        <Layout title="Characters">
          <Heading>Characters</Heading>
          <pre>{JSON.stringify(characters, null, 2)}</pre>
          {prev && (
            <Button onClick={() => setPage((prev) => prev - 1)}>Prev</Button>
          )}
          {next && (
            <Button onClick={() => setPage((prev) => prev + 1)}>Next</Button>
          )}
        </Layout>
      </Container>
    </Box>
  );
};

export default Characters;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { page = 1 } = query;

  const { characters, info } = await getAllCharacters(Number(page));

  const { next, prev } = info;

  return {
    props: {
      characters,
      next,
      prev,
    },
  };
};
