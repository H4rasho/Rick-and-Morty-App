import { gql } from "@apollo/client";
import client from "../apollo.client";

export const getAllCharacters = async (page: number) => {
  const { data } = await client.query({
    variables: { page },
    query: gql`
      query Characters($page: Int) {
        characters(page: $page) {
          info {
            next
            pages
            prev
            count
          }
          results {
            id
            name
          }
        }
      }
    `,
  });

  const { results: characters, info } = data.characters;

  return { characters, info };
};
