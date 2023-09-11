import { IconButton } from "@mui/material";
import {
  HourglassEmpty as LoadingIcon,
  Login as LoginIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";

import { UserStatusSchema } from "providers";

import style from "./UserStatus.module.css";

interface UserStatusProps {
  handleOpen: () => void;
  status?: UserStatusSchema;
}

export function UserStatus({ handleOpen, status }: UserStatusProps) {
  if (status === UserStatusSchema.LOGGED_OUT) {
    return (
      <IconButton className={style.UserStatus} onClick={handleOpen}>
        <LoginIcon />
      </IconButton>
    );
  } else if (status === UserStatusSchema.LOADING) {
    return (
      <IconButton className={style.UserStatus} onClick={handleOpen}>
        <LoadingIcon />
      </IconButton>
    );
  } else if (status === UserStatusSchema.LOGGED_IN) {
    return (
      <IconButton className={style.UserStatus} onClick={handleOpen}>
        <LogoutIcon />
      </IconButton>
    );
  }
}
