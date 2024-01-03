import { Box, Typography } from "@mui/material";

import { TITLE, SUBTITLE, CONTENT } from "./Home.content.ts";
import style from "./Home.module.scss";

export function Home() {
  return (
    <Box className={style.Home}>
      <Typography variant="h2" className={style.Header} data-testid="title">
        {TITLE}
      </Typography>
      <br />
      <Typography variant="h4" className={style.Content} data-testid="subtitle">
        {SUBTITLE}
      </Typography>
      <br />
      <Typography variant="h6" className={style.Content} data-testid="content">
        {CONTENT}
      </Typography>
      <br />
    </Box>
  );
}
