import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Character } from "../../services/characters/types";

export default function CharacterList({
  characters,
}: {
  characters: Character[];
}) {
  const [favorites, setFavorites] = useLocalStorage<Character[]>(
    "FavoriteCharacters",
    []
  );

  const handleAddToFavorites = (character: Character) => {
    if (favorites.find((fav) => fav.id === character.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== character.id));
    } else {
      setFavorites([...favorites, character]);
    }
  };

  const isFavorite = (character: Character) => {
    return favorites.find((fav) => fav.id === character.id);
  };

  if (!characters.length) {
    return <Heading>No hay personajes</Heading>;
  }

  return (
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
          <Flex justifyContent="space-between">
            <Link href={`/${character.id}`}>
              <Text
                fontSize="xl"
                _hover={{
                  color: "blue.500",
                }}
              >
                Ver Detalles
              </Text>
            </Link>
            <Box
              as="button"
              fontSize="2xl"
              title="Añadir a favoritos"
              onClick={() => handleAddToFavorites(character)}
            >
              {isFavorite(character) ? "❤️" : "🤍"}
            </Box>
          </Flex>
        </Box>
      ))}
    </Grid>
  );
}
