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
    let query = "";

    if (router.query.name) query += `&name=${router.query.name}`;
    if (router.query.status) query += `&status=${router.query.status}`;
    if (router.query.gender) query += `&gender=${router.query.gender}`;

    router.push(`characters/?page=${page}${query}`);
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
      {prev && <Button onClick={() => setPage(prev)}>Prev</Button>}
      {next && <Button onClick={() => setPage(next)}>Next</Button>}
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
