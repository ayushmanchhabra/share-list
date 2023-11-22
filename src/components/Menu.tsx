import { Login, Logout, Search } from "@mui/icons-material";
import { AppBar, IconButton, TextField, Typography } from "@mui/material";

interface MenuProps {
    isAuthenticated: boolean;
}

export function Menu({
    isAuthenticated,
}: MenuProps) {
    return (
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
            {isAuthenticated && (
                <>
                    <Search />
                    <TextField
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
                </>
            )}
            <IconButton sx={isAuthenticated ? {
                color: "white",
            } : {
                color: "white",
                position: "absolute",
                right: "10px"
            }}>
                {isAuthenticated ? <Logout /> : <Login />}
            </IconButton>
        </AppBar>
    );
}