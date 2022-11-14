import { Character } from "../characters/types";

export interface Episode {
  id: string;
  name: string;
  episode: string;
  air_date: string;
}

export interface EpisodeDetails extends Episode {
  characters: Character[];
}
