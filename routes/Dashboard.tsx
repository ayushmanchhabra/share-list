import { Box } from "@mui/material";
import { useEffect } from "react";

import { useUser } from "providers";
import { useNavigate } from "react-router-dom";

export function Dashboard() {

    const { user } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user.isAuthenticated) {
            navigate("/login");
        }
    }, [user]);

    return (
        <Box>
        </Box>
    );
}
