/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENABLE_APPLE_MUSIC: "0" | "1";
  readonly VITE_ENABLE_SPOTIFY_MUSIC: "0" | "1";
  readonly VITE_ENABLE_YOUTUBE_MUSIC: "0" | "1";
  readonly VITE_SPOTIFY_CLIENT_ID: string;
  readonly VITE_SPOTIFY_REDIRECT_URI: string;
}

export interface ImportMeta {
  readonly env: ImportMetaEnv;
}
