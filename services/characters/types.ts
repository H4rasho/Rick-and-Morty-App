export interface Character {
  id: string;
  name: string;
  image: string;
}

export interface CharacterDetalis extends Character {
  gender: string;
  species: string;
  status: string;
  type: string;
}
