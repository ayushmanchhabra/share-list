import { Button, Card, CardActions, CardContent, CardHeader, SvgIcon, Typography } from "@mui/material";
import {
    Apple as AppleIcon,
    YouTube as YouTubeIcon,
} from "@mui/icons-material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { SpotifyIcon } from "assets";
import { useUser } from "providers";

export function Login() {

    const navigate = useNavigate();

    const { user, setUser } = useUser();

    useEffect(() => {
        if (user.isAuthenticated) {
            navigate("/dashboard");
        }
    }, [user]);

    const onSpotifyLogin = () => {
        setUser({ ...user, isAuthenticated: true });
    };

    return (
        <Card>
            <CardHeader
                title={"Login"}
            />
            <CardContent>
                <Typography sx={{ display: "flex", alignItems: "center", justifyContent: "center"}}>Log into Share List via:</Typography>
            </CardContent>

            <CardActions>
                {import.meta.env.VITE_ENABLE_APPLE_MUSIC === "1" && (
                    <Button>
                        <AppleIcon />
                        Apple Music
                    </Button>
                )}
                {import.meta.env.VITE_ENABLE_SPOTIFY_MUSIC === "1" && (
                    <Button onClick={onSpotifyLogin}>
                        <SvgIcon>
                            <SpotifyIcon />
                        </SvgIcon>
                        Spotify Music
                    </Button>
                )}
                {import.meta.env.VITE_ENABLE_YOUTUBE_MUSIC === "1" && (
                    <Button>
                        <YouTubeIcon />
                        YouTube Music
                    </Button>
                )}
            </CardActions>
        </Card>
    );
}
