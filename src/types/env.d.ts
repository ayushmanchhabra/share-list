/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_ENABLE_APPLE_MUSIC: "0" | "1";
    readonly VITE_ENABLE_SPOTIFY_MUSIC: "0" | "1";
    readonly VITE_ENABLE_YOUTUBE_MUSIC: "0" | "1";
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
