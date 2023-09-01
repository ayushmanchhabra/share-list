
import { IconButton } from '@mui/material';
import {
    HourglassEmpty as LoadingIcon,
    Login as LoginIcon,
    Logout as LogoutIcon,
} from '@mui/icons-material';

import style from "./UserStatus.module.css";

interface UserStatusProps {
    handleOpen: (event: any) => void;
    status?: "log-in" | "loading" | "log-out";
}

export function UserStatus ({
    handleOpen,
    status,
}: UserStatusProps) {
    
    if (status === "log-in") {
        return (
            <IconButton className={style.UserStatus} onClick={handleOpen}>
                <LoginIcon />
            </IconButton>
        );
    }

    else if (status === "loading") {
        return (
            <IconButton className={style.UserStatus} onClick={handleOpen}>
                <LoadingIcon />
            </IconButton>
        );
    }

    else if (status === "log-out") {
        return (
            <IconButton className={style.UserStatus} onClick={handleOpen}>
                <LogoutIcon />
            </IconButton>
        );
    }
}
