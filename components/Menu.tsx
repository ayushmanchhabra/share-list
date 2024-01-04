import { Login, Logout, Search } from "@mui/icons-material";
import { AppBar, IconButton, TextField, Typography } from "@mui/material";

import { TITLE } from "./Menu.content.ts";
import style from "./Menu.module.scss";

interface MenuProps {
    isAuthenticated: boolean;
    handleLogin: () => void;
    handleLogout: () => void;
}

export function Menu({
    isAuthenticated,
    handleLogin,
    handleLogout,
}: MenuProps) {
    return (
        <AppBar
            position="static"
            className={style.Menu}
        >
            <Typography
                data-testid="title"
                fontWeight="600"
                textTransform="capitalize"
                variant="h6"
            >
                {TITLE}
            </Typography>
            {isAuthenticated && (
                <>
                    <Search />
                    <TextField
                        fullWidth
                        inputProps={{
                            className: style.SearchText
                        }}
                        placeholder="Search..."
                        variant="standard"
                    />
                </>
            )}
            <IconButton
                data-testid="button"
                onClick={isAuthenticated ? handleLogout : handleLogin}
                sx={isAuthenticated ? {
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
