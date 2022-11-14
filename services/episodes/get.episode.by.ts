import { gql } from "@apollo/client";
import client from "../../apollo.client";

export const getEpisodeById = async (episodeId?: string) => {
  const { data } = await client.query({
    variables: {
      episodeId,
    },
    query: gql`
      query Episode($episodeId: ID!) {
        episode(id: $episodeId) {
          id
          name
          episode
          air_date
          characters {
            id
            name
            image
          }
        }
      }
    `,
  });

  console.log(data.episode);

  return data.episode;
};
