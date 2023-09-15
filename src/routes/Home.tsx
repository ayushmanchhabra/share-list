import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <Box sx={{
      margin: "10px"
    }}>
      <Typography variant="h1" sx={{
        fontFamily: "system-ui",
        fontWeight: "600",
        color: "#3d3a42"
      }} >Share List</Typography>
      <Typography variant="h4" sx={{
        fontFamily: "system-ui",
        fontWeight: "600",
        color: "#5c5b5e"
      }} >Share and remix music across platforms.</Typography>
      <br />
      <Typography variant="h6" sx={{
        fontFamily: "system-ui",
        fontWeight: "400",
        color: "#5c5b5e"
      }} >You really like X streaming service.
      </Typography>
      <Typography variant="h6" sx={{
        fontFamily: "system-ui",
        fontWeight: "400",
        color: "#5c5b5e"
      }} >But your family are on Y streaming service and friends are on Z streaming services.
      </Typography>
      <Typography variant="h6" sx={{
        fontFamily: "system-ui",
        fontWeight: "400",
        color: "#5c5b5e"
      }}
      >
        Sharing your music becomes unnecessarily hard.
      </Typography>
      <br />
      <Typography variant="h6" sx={{
        fontFamily: "system-ui",
        fontWeight: "400",
        color: "#5c5b5e"
      }}
      >
        Well, not anymore:
      </Typography>

      <Typography variant="h6" sx={{
        fontFamily: "system-ui",
        fontWeight: "400",
        color: "#5c5b5e"
      }}
      >
        - Import existing playlists via X streaming service
      </Typography>
      <Typography variant="h6" sx={{
        fontFamily: "system-ui",
        fontWeight: "400",
        color: "#5c5b5e"
      }}
      >
        - Send the uniquely generated link to your family.
      </Typography>
      <Typography variant="h6" sx={{
        fontFamily: "system-ui",
        fontWeight: "400",
        color: "#5c5b5e"
      }}
      >
        - You friend will open the link, may edit and export the playlist to Y streaming service.
      </Typography>
      <Typography variant="h6" sx={{
        fontFamily: "system-ui",
        fontWeight: "400",
        color: "#5c5b5e"
      }}
      >
        - Send the uniquely generated link to your friend.
      </Typography>
      <Typography variant="h6" sx={{
        fontFamily: "system-ui",
        fontWeight: "400",
        color: "#5c5b5e"
      }}
      >
        - You family will open the link, may edit and export the playlist to Z streaming service.
      </Typography>

      <Link to="/list">Get Started</Link>
    </Box>
  );
}
