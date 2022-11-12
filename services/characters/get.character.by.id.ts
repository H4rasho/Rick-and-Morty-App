import { gql } from "@apollo/client";
import client from "../../apollo.client";

export const getCharacterById = async (characterId?: string) => {
  const { data } = await client.query({
    variables: {
      characterId,
    },
    query: gql`
      query Characters($characterId: ID!) {
        character(id: $characterId) {
          id
          gender
          image
          name
          species
          status
          type
        }
      }
    `,
  });

  return data.character;
};
