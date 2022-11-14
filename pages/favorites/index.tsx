import { NextPage } from "next";
import { useRouter } from "next/router";
import CharacterList from "../../components/characters/character.list";
import EpisodeList from "../../components/episodes/episode.list";
import H1 from "../../components/ui/h1";
import H2 from "../../components/ui/h2";
import Layout from "../../components/ui/layout";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Character } from "../../services/characters/types";
import { Episode } from "../../services/episodes/types";

const Favorites: NextPage = () => {
  const { query } = useRouter();

  const [characters] = useLocalStorage<Character[]>("FavoriteCharacters", []);
  const [episodes] = useLocalStorage<Episode[]>("FavoriteEpisodes", []);

  const name = query?.name as string;

  const charactersFiltered = () => {
    if (name?.length) {
      return characters.filter((character) =>
        character.name.toLowerCase().includes(name.toLowerCase())
      );
    }
    return characters;
  };

  const episodesFiltered = () => {
    if (name?.length) {
      return episodes.filter((episode) =>
        episode.name.toLowerCase().includes(name.toLowerCase())
      );
    }
    return episodes;
  };

  return (
    <Layout title="Favoritos">
      <H1>Favoritos</H1>
      <H2>Personajes</H2>
      <CharacterList characters={charactersFiltered()} />
      <H2>Episodios</H2>
      <EpisodeList episodes={episodesFiltered()} />
    </Layout>
  );
};

export default Favorites;
