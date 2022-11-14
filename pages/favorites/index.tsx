import { NextPage } from "next";
import CharacterList from "../../components/characters/character.list";
import EpisodeList from "../../components/episodes/episode.list";
import H1 from "../../components/ui/h1";
import H2 from "../../components/ui/h2";
import Layout from "../../components/ui/layout";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const Favorites: NextPage = () => {
  const [characters] = useLocalStorage("FavoriteCharacters", []);
  const [episodes] = useLocalStorage("FavoriteEpisodes", []);

  return (
    <Layout title="Favoritos">
      <H1>Favoritos</H1>
      <H2>Personajes</H2>
      <CharacterList characters={characters} />
      <H2>Episodios</H2>
      <EpisodeList episodes={episodes} />
    </Layout>
  );
};

export default Favorites;
