import { useRouter } from "next/router";
import type { GetServerSideProps, NextPage } from "next";
import { Box, Button, Grid, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Layout from "../../components/ui/layout";
import { getAllCharacters } from "../../services/characters/get.all.characters";
import { CharacterPageProps } from "./types";
import Image from "next/image";
import Link from "next/link";

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
    <Layout title="Personajes">
      <Heading as="h1" textAlign="center">
        Personajes
      </Heading>
      <Grid
        as="section"
        gap={2}
        templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
      >
        {characters.map((character) => (
          <Box as="article" key={character.id} p={4} bg="white" rounded="md">
            <Box minW={["200", "280"]}>
              <Image
                src={character.image}
                width={300}
                height={300}
                alt={character.name}
              />
            </Box>

            <Heading as="h3" fontSize="2xl" fontWeight="bold">
              {character.name}
            </Heading>
            <Link href={`/characters/${character.id}`}>Details</Link>
          </Box>
        ))}
      </Grid>
      {prev && (
        <Button onClick={() => setPage((prev) => prev - 1)}>Prev</Button>
      )}
      {next && (
        <Button onClick={() => setPage((prev) => prev + 1)}>Next</Button>
      )}
    </Layout>
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
