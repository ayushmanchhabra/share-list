export type ItemSchema = {
  focus: boolean;
};

export enum NotificationSchema {
  ERROR = "error",
  WARN = "warning",
  INFO = "info",
  SUCCESS = "success",
}

export type PlaylistSchema = {
  title: string;
  songs: SongSchema[];
  focus: boolean;
};

export type SongSchema = {
  title: string;
  artist: string;
  focus: boolean;
};

export enum UserStatusSchema {
  LOG_IN = "log-in",
  LOG_OUT = "log-out",
  LOADING = "loading",
}
