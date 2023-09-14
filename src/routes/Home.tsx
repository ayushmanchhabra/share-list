import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { CheckBox } from "@mui/icons-material";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <Box>
      <Typography variant="h1" sx={{
        fontFamily: "system-ui",
        fontWeight: "600",
        color: "#3d3a42"
      }} >Share List</Typography>
      <Typography variant="h4" sx={{
        fontFamily: "system-ui",
        fontWeight: "600",
        color: "#5c5b5e"
      }} >Share music playlists across platforms.</Typography>
      <br/>
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
      }} >But your family and friends are on Y or Z streaming services.
      </Typography>
      <Typography variant="h6" sx={{
        fontFamily: "system-ui",
        fontWeight: "400",
        color: "#5c5b5e"
      }} >Sharing your music becomes unnecessarily hard.
      </Typography>
      <Typography variant="h6" sx={{
        fontFamily: "system-ui",
        fontWeight: "400",
        color: "#5c5b5e"
      }} >Well, not anymore.
      </Typography>

      <List>
        <ListItem>
          <CheckBox />
          <ListItemText>
            Import existing playlists via streaming service of choice
          </ListItemText>
        </ListItem>
        <ListItem>
          <CheckBox />
          <ListItemText>
            Edit the playlist and send it to your friend on another streaming service
          </ListItemText>
        </ListItem>
      </List>
      {/* <Link to="/list">Share List</Link> */}
    </Box>
  );
}
