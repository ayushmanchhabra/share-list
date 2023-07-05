import { SongSchema } from "schema";

export type PlaylistSchema = {
  title: string;
  songs: SongSchema[];
  focus: boolean;
};
