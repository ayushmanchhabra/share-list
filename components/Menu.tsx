import { Login, Logout, Search } from "@mui/icons-material";
import { AppBar, IconButton, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { TITLE } from "./Menu.content.ts";
import style from "./Menu.module.scss";

interface MenuProps {
    isAuthenticated: boolean;
}

export function Menu({
    isAuthenticated
}: MenuProps) {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    };

    const handleLogout = () => {
        navigate("/logout");
    };

    return (
        <AppBar
            position="static"
            className={style.Menu}
            sx={{ flexDirection: "row" }}
        >
            <Typography
                data-testid="title"
                fontWeight="600"
                textTransform="capitalize"
                variant="h6"
                sx={{
                    width: "max-content",
                    flex: 1,
                }}
            >
                {TITLE}
            </Typography>
            {isAuthenticated && <Search />}
            {isAuthenticated && (
                <TextField
                    inputProps={{
                        className: style.SearchText
                    }}
                    placeholder="Search..."
                    sx={{ flex: 3 }}
                    variant="standard"
                />
            )}
            <IconButton
                data-testid="button"
                onClick={isAuthenticated ? handleLogout : handleLogin}
                sx={{
                    color: "white",
                    flex: 0
                }}
            >
                {isAuthenticated ? <Logout /> : <Login />}
            </IconButton>
        </AppBar >
    );
}
