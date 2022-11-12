import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Layout from "../../components/ui/layout";

import { getCharacterById } from "../../services/characters/get.character.by.id";
import { CharacterDetailsProps } from "./types";

const CharacterDetailsPage = ({ character }: CharacterDetailsProps) => {
  const { id, name, image, status, gender, species, type: t } = character;
  const type = t.trim().length > 0 || "Not specified";

  return (
    <Layout title={name}>
      <Heading mb={4}>{name}</Heading>
      <Flex gap={5}>
        <Image src={image} alt={name} width={300} height={300} />
        <Box>
          <Text>ID: {id}</Text>
          <Text>Status: {status}</Text>
          <Text>Gender: {gender}</Text>
          <Text>Species: {species}</Text>
          <Text>Type: {type}</Text>
        </Box>
      </Flex>
    </Layout>
  );
};

export default CharacterDetailsPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const characterId = params?.id as string;
  const character = await getCharacterById(characterId);

  return {
    props: {
      character,
    },
  };
};
