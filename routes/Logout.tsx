import { Button, Card, CardActions, CardContent, CardHeader, SvgIcon, Typography } from "@mui/material";
import {
    Apple as AppleIcon,
    YouTube as YouTubeIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import { SpotifyIcon } from "assets";
import { useUser } from "providers";

export function Logout() {

    const navigate = useNavigate();

    const { user, setUser } = useUser();

    const onSpotifyLogout = () => {
        setUser({ ...user, isAuthenticated: false });
        navigate("/home");
    };

    return (
        <Card>
            <CardHeader
                title={"Logout"}
            />
            <CardContent>
                <Typography sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>Are you sure you want to log out?</Typography>
            </CardContent>

            <CardActions>
                {import.meta.env.VITE_ENABLE_APPLE_MUSIC === "1" && (
                    <Button>
                        <AppleIcon />
                        Logout
                    </Button>
                )}
                {import.meta.env.VITE_ENABLE_SPOTIFY_MUSIC === "1" && (
                    <Button onClick={onSpotifyLogout}>
                        <SvgIcon>
                            <SpotifyIcon />
                        </SvgIcon>
                        Logout
                    </Button>
                )}
                {import.meta.env.VITE_ENABLE_YOUTUBE_MUSIC === "1" && (
                    <Button>
                        <YouTubeIcon />
                        Logout
                    </Button>
                )}
            </CardActions>
        </Card>
    );
}
