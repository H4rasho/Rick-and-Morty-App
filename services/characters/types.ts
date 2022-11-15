import { Episode } from "../episodes/types";

export interface Character {
  id: string;
  name: string;
  image: string;
}

export interface CharacterDetalis extends Character {
  gender: string;
  species: string;
  status: "Alive" | "Dead" | "unknown";
  type: string;
  episode: Episode[];
  origin: {
    name: string;
    dimension: string;
  };
  location: {
    name: string;
    dimension: string;
  };
}
