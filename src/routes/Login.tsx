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

import { SpotifyIcon } from "assets";

import style from "./Login.module.scss";

export function Login() {
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
