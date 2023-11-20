import { Box, Typography } from "@mui/material";

import { useEffect } from "react";

import style from "./Home.module.scss";
import { useUser } from "providers";

export function Home() {

  const { user } = useUser();

  useEffect(() => {
    console.log(localStorage.getItem("SPOTIFY_ACCESS_TOKEN"))
  }, [user]);

  return (
    <Box className={style.Home}>
      <Typography variant="h2" className={style.Header} data-testid="title">
        {"Share List"}
      </Typography>
      <br />
      <Typography variant="h4" className={style.Content} data-testid="subtitle">
        {"Share and remix music playlists across platforms."}
      </Typography>
      <br />
      <Typography variant="h6" className={style.Content} data-testid="content">
        {"Coming soon..."}
      </Typography>
      <br />
    </Box>
  );
}
