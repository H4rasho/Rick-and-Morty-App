import { gql } from "@apollo/client";
import client from "../../apollo.client";

export const getAllEpisodes = async (
  page: number,
  filter?: {
    name: string;
  }
) => {
  const { data } = await client.query({
    variables: { page, filter },
    query: gql`
      query Episodes($page: Int, $filter: FilterEpisode) {
        episodes(page: $page, filter: $filter) {
          results {
            id
            name
            episode
            air_date
          }
          info {
            prev
            next
            pages
          }
        }
      }
    `,
  });

  const { results: episodes, info } = data.episodes;

  return { episodes, info };
};
