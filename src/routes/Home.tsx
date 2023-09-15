import { Box, IconButton, Typography } from "@mui/material";
import { ArrowForward as ArrowForwardIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import style from "./Home.module.scss";

export function Home() {
  const navigate = useNavigate();

  return (
    <Box className={style.Home}>
      <Typography variant="h1" className={style.Header}>
        Share List
      </Typography>
      <Typography variant="h4" className={style.SubHeader}>
        Share and remix music across platforms.
      </Typography>
      <br />
      <Typography variant="h6" className={style.Content}>
        You really like X streaming service.
      </Typography>
      <Typography variant="h6" className={style.Content}>
        But your family is on Y streaming service and your friends are on Z
        streaming service.
      </Typography>
      <Typography variant="h6" className={style.Content}>
        Sharing your music becomes unnecessarily hard.
      </Typography>
      <br />
      <Typography variant="h6" className={style.Content}>
        Well, not anymore:
      </Typography>

      <Typography variant="h6" className={style.Content}>
        - Import existing playlists via X streaming service
      </Typography>
      <Typography variant="h6" className={style.Content}>
        - Send the uniquely generated link to your family.
      </Typography>
      <Typography variant="h6" className={style.Content}>
        - Your family will open the link, may edit and export the playlist to Y
        streaming service.
      </Typography>
      <Typography variant="h6" className={style.Content}>
        - Send the uniquely generated link to your friend.
      </Typography>
      <Typography variant="h6" className={style.Content}>
        - Your friend will open the link, may edit and export the playlist to Z
        streaming service.
      </Typography>
      <br />
      <Typography variant="h6" className={style.Content}>
        Get Started...
        <IconButton
          className={style.Button}
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
