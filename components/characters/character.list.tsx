import { Box, Heading } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { Character } from "../../services/characters/types";

export default function CharacterList({
  characters,
}: {
  characters: Character[];
}) {
  return (
    <>
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
    </>
  );
}
