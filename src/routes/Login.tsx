import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  SvgIcon,
} from "@mui/material";
import {
  Apple as AppleIcon,
  YouTube as YouTubeIcon,
} from "@mui/icons-material";
import { Scopes } from "@spotify/web-api-ts-sdk";

import { SpotifyIcon } from "assets";
import { useSpotify, useUser } from "providers";

import style from "./Login.module.scss";

export function Login() {

  const { api, authenticate } = useSpotify(
    import.meta.env.VITE_SPOTIFY_CLIENT_ID,
    import.meta.env.VITE_SPOTIFY_REDIRECT_URI,
    Scopes.userDetails,
  );

  const { setUser } = useUser();

  function handleSpotifyLogin() {
    return authenticate().then(() => {
      if (api !== null ) {
        setUser({
          authenticated: true,
        });
      }
    });
  }

  return (
    <Box className={style.Login}>
      <Card className={style.Card} raised>
        <CardHeader className={style.CardHeader} title={"Login via:"} />
        <CardContent>
          {import.meta.env.VITE_ENABLE_APPLE_MUSIC === "1" && (
            <Button
              data-testid="login-apple"
              sx={{ marginBottom: "10px" }}
              variant="outlined"
            >
              <AppleIcon />
              Apple Music
            </Button>
          )}
          {import.meta.env.VITE_ENABLE_SPOTIFY_MUSIC === "1" && (
            <Button
              data-testid="login-spotify"
              onClick={() => handleSpotifyLogin()}
              sx={{ marginBottom: "10px" }}
              variant="outlined"
            >
              <SvgIcon>
                <SpotifyIcon />
              </SvgIcon>
              Spotify Music
            </Button>
          )}
          {import.meta.env.VITE_ENABLE_YOUTUBE_MUSIC === "1" && (
            <Button
              data-testid="login-youtube"
              sx={{ marginBottom: "10px" }}
              variant="outlined"
            >
              <YouTubeIcon />
              YouTube Music
            </Button>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
