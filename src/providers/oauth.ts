import { SpotifyApi } from '@spotify/web-api-ts-sdk';

/**
 * Authorization Code with PKCE Flow
 * @link https://developer.spotify.com/documentation/web-api/tutorials/code-pkce-flow
 */
export async function spotifyOauth() {
    const sdk = SpotifyApi.withUserAuthorization(
        import.meta.env.VITE_SPOTIFY_CLIENT_ID,
        import.meta.env.VITE_SPOTIFY_REDIRECT_URI,
        ["user-read-private"]
    );

    const user = await sdk.currentUser.profile();
    console.log(user);
}
