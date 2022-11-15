import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tag,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Image from "next/image";
import H2 from "../../components/ui/h2";
import Layout from "../../components/ui/layout";

import { getCharacterById } from "../../services/characters/get.character.by.id";
import { CharacterDetalis } from "../../services/characters/types";

export interface CharacterDetailsProps {
  character: CharacterDetalis;
}

const STATUS_COLOR = {
  Alive: "#00FF00",
  Dead: "#FF0000",
  unknown: "gray",
};

const CharacterDetailsPage = ({ character }: CharacterDetailsProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    id,
    name,
    image,
    status,
    gender,
    species,
    type: t,
    episode: episodes,
    origin,
    location,
  } = character;
  const type = t.trim().length > 0 || "Not specified";

  return (
    <Layout title={name}>
      <H2>{name}</H2>
      <Box
        bg="white"
        p={4}
        rounded="xl"
        display="flex"
        justifyContent={["center", "flex-start"]}
      >
        <Flex gap={5} flexDir={["column", "row"]}>
          <Image src={image} alt={name} width={300} height={300} />
          <Box>
            <Text>ID: {id}</Text>
            <Flex gap={2}>
              <Text>Status: </Text>
              <Tag bg={STATUS_COLOR[status]}>{status}</Tag>
            </Flex>
            <Text>Gender: {gender}</Text>
            <Text>Species: {species}</Text>
            <Text>Type: {type}</Text>
            <Flex gap={2}>
              <Text>Origin: {origin.name}</Text>
              <Text>Dimension: {origin.dimension}</Text>
            </Flex>
            <Flex gap={2}>
              <Text>Location: {location.name}</Text>
              <Text>Dimension: {location.dimension}</Text>
            </Flex>

            <Button mt={2} onClick={onOpen}>
              Ver Apariciones
            </Button>
          </Box>
        </Flex>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size={["xs", "xl"]}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">Apariciones</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="character-episode-list">
              {episodes.map((episode) => (
                <Box key={episode.id} p={1}>
                  <Text fontWeight="bold">{`#${episode.id} ${episode.name}`}</Text>
                  <Text
                    color="GrayText"
                    fontSize="xs"
                  >{`(${episode.episode}) [${episode.air_date}]`}</Text>
                </Box>
              ))}
            </div>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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
