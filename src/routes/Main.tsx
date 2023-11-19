import { Search } from "@mui/icons-material";
import { AppBar, Box, TextField, Typography } from "@mui/material";

export function Main() {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",

          padding: 1,
        }}
      >
        <Typography
          variant="h6"
          fontWeight={"600"}
          sx={{
            width: "200px",
            minWidth: "140px",
            marginLeft: "10px",
          }}
        >
          SHARE LIST
        </Typography>
        <Search />
        <TextField
          autoFocus
          fullWidth
          inputProps={{
            sx: {
              color: "white",
              marginLeft: "10px",
            },
          }}
          placeholder="Search..."
          variant="standard"
        />
      </AppBar>
    </Box>
  );
}
