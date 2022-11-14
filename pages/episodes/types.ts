import { Episode, EpisodeDetails } from "../../services/episodes/types";

export interface EpisodesPageProps {
  episodes: Episode[];
  next: number;
  prev: number;
}

export interface EpisodeDetailsProps {
  episode: EpisodeDetails;
}
