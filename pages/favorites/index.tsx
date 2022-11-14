import { Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import CharacterList from "../../components/characters/character.list";
import EpisodeList from "../../components/episodes/episode.list";
import H1 from "../../components/ui/h1";
import Layout from "../../components/ui/layout";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const Favorites: NextPage = () => {
  const [characters] = useLocalStorage("FavoriteCharacters", []);
  const [episodes] = useLocalStorage("FavoriteEpisodes", []);

  return (
    <Layout title="Favoritos">
      <H1>Favoritos</H1>
      <Heading as="h2" p={4}>
        {" "}
        Personajes
      </Heading>
      <CharacterList characters={characters} />
      <Heading as="h2" p={4}>
        {" "}
        Episodios
      </Heading>
      <EpisodeList episodes={episodes} />
    </Layout>
  );
};

export default Favorites;
