import { Character } from "../../services/characters/types";

export interface CharacterPageProps {
  characters: Character[];
  next: number;
  prev: number;
}
