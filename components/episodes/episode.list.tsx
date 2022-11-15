import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Episode } from "../../services/episodes/types";

export default function EpisodeList({ episodes }: { episodes: Episode[] }) {
  const [favorites, setFavorites] = useLocalStorage<Episode[]>(
    "FavoriteEpisodes",
    []
  );

  const handleAddToFavorites = (episode: Episode) => {
    if (favorites.find((fav) => fav.id === episode.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== episode.id));
    } else {
      setFavorites([...favorites, episode]);
    }
  };

  const isFavorite = (episode: Episode) => {
    return favorites.find((fav) => fav.id === episode.id);
  };

  return (
    <VStack>
      {episodes.map((episode) => (
        <Box
          textAlign="left"
          key={episode.id}
          w="full"
          bg="white"
          p={4}
          rounded="xl"
        >
          <Heading as="h2">{episode.name}</Heading>
          <p>{episode.episode}</p>
          <time>{episode.air_date}</time>
          <Flex justifyContent="space-between">
            <Link href={`/episodes/${episode.id}`}>
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
              onClick={() => handleAddToFavorites(episode)}
            >
              {isFavorite(episode) ? "❤️" : "🤍"}
            </Box>
          </Flex>
        </Box>
      ))}
    </VStack>
  );
}
