
import { IconButton } from '@mui/material';
import {
    HourglassEmpty as LoadingIcon,
    Login as LoginIcon,
    Logout as LogoutIcon,
} from '@mui/icons-material';

import style from "./UserStatus.module.scss";

interface UserStatusProps {
    status?: "log-in" | "loading" | "log-out";
}

export function UserStatus ({
    status,
}: UserStatusProps) {
    
    if (status === "log-in") {
        return (
            <IconButton className={style.UserStatus}>
                <LoginIcon />
            </IconButton>
        );
    }

    else if (status === "loading") {
        return (
            <IconButton className={style.UserStatus}>
                <LoadingIcon />
            </IconButton>
        );
    }

    else if (status === "log-out") {
        return (
            <IconButton className={style.UserStatus}>
                <LogoutIcon />
            </IconButton>
        );
    }
}
