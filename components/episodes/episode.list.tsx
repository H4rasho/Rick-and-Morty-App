import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
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
        <Box key={episode.id} w="full" bg="white" p={4} rounded="xl">
          <Heading as="h2">{episode.name}</Heading>
          <p>{episode.episode}</p>
          <Flex justifyContent="space-between">
            <time>{episode.air_date}</time>
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
