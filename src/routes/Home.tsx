import { Box, IconButton, Typography } from "@mui/material";
import { ArrowForward as ArrowForwardIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import style from "./Home.module.scss";

export function Home() {
  const navigate = useNavigate();

  return (
    <Box className={style.Home}>
      <Typography variant="h1" className={style.Header} data-testid="title">
        {"Share List"}
      </Typography>
      <Typography
        variant="h4"
        className={style.SubHeader}
        data-testid="subtitle"
      >
        {"Share and remix music across platforms."}
      </Typography>
      <br />
      <Typography variant="h6" className={style.Content}>
        {"Search and import songs and playlists."}
        <br />
        {"Create your ideal playlist."}
        <br />
        {"Share it with your friends and family."}
        <br />
        {"They'll export the playlist to their own streaming service."}
        <br />
        {"Or they'll tweak it and send it to others."}
        <br />
        {"Get Started..."}
        <IconButton
          className={style.Button}
          data-testid="cta"
          onClick={() => {
            navigate("/list");
          }}
        >
          <ArrowForwardIcon />
        </IconButton>
      </Typography>
    </Box>
  );
}
