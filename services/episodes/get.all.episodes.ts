import { gql } from "@apollo/client";
import client from "../../apollo.client";

export const getAllEpisodes = async (page: number) => {
  const { data } = await client.query({
    variables: { page },
    query: gql`
      query Episodes($page: Int) {
        episodes(page: $page) {
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
