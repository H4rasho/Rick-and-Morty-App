import { Character, CharacterDetalis } from "../../services/characters/types";

export interface CharacterPageProps {
  characters: Array<Character>;
  next: number;
  prev: number;
}

export interface CharacterDetailsProps {
  character: CharacterDetalis;
}
