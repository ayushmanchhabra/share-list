import { Box, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";

import style from "./Home.module.scss";

export function Home() {
  // const navigate = useNavigate();

  return (
    <Box className={style.Home}>
      <Typography variant="h2" className={style.Header} data-testid="title">
        {"Share List"}
      </Typography>
      <br />
      <Typography
        variant="h4"
        className={style.Content}
        data-testid="subtitle"
      >
        {"Share and remix music playlists across platforms."}
      </Typography>
      <br />
      <Typography
        variant="h6"
        className={style.Content}
        data-testid="subtitle"
      >
        {"Coming soon..."}
      </Typography>
      <br />
      {/*
      <Button
        className={style.Button}
        data-testid="cta"
        onClick={() => {
          navigate("/login");
        }}
        variant="outlined"
        >
        {"Get Started"}
      </Button>
      */}
    </Box>
  );
}
