import { SpotifyApi, SdkOptions, AccessToken } from "@spotify/web-api-ts-sdk";
import { useState } from "react";
import { useLocalStorage } from "providers";

export function useSpotify(
  clientId: string,
  redirectUrl: string,
  scopes: string[],
  config?: SdkOptions,
) {
  const [api, setApi] = useState<SpotifyApi | null>(null);
  const { item: accessToken, setItem: setAccessToken } =
    useLocalStorage<AccessToken>("SPOTIFY_ACCESS_TOKEN");

  async function authenticate(): Promise<void | null> {
    if (import.meta.env.VITE_ENABLE_SPOTIFY_MUSIC === "0") {
      return null;
    }

    let sdk: SpotifyApi | null = null;

    if (accessToken !== null) {
      sdk = SpotifyApi.withAccessToken(
        clientId,
        accessToken as AccessToken,
        config,
      );
    } else {
      sdk = SpotifyApi.withUserAuthorization(
        clientId,
        redirectUrl,
        scopes,
        config,
      );
    }

    const response = await sdk.authenticate();
    if (response.authenticated) {
      setApi(api);
      setAccessToken(response.accessToken);
    } else {
      console.error(
        "Unable to authenticate with Spotify. Please try again.",
      );
    }
  }

  return {
    api,
    authenticate,
  };
}
