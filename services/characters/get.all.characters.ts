import { gql } from "@apollo/client";
import client from "../../apollo.client";

export const getAllCharacters = async (
  page: number,
  filter: {
    name?: string;
    status?: string;
    gender?: string;
  }
) => {
  if (filter.status === "All") filter.status = undefined;
  if (filter.gender === "All") filter.gender = undefined;

  const { data } = await client.query({
    variables: { page, filter },
    query: gql`
      query Characters($page: Int, $filter: FilterCharacter) {
        characters(page: $page, filter: $filter) {
          info {
            next
            pages
            prev
            count
          }
          results {
            id
            name
            image
          }
        }
      }
    `,
  });

  const { results: characters, info } = data.characters;

  return { characters, info };
};
