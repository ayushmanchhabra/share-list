import { SongSchema } from "providers";

export type PlaylistSchema = {
  title: string;
  songs: SongSchema[];
  focus: boolean;
};
