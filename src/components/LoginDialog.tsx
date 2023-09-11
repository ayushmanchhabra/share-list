import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  SvgIcon,
} from "@mui/material";
import {
  Apple as AppleIcon,
  Close as CloseIcon,
  YouTube as YouTubeIcon,
} from "@mui/icons-material";

import { SpotifyIcon } from "assets";

interface LoginDialogProps {
  open: boolean;
  onClose: () => void;
  onSpotifyLogin: () => void;
}

export function LoginDialog({
  onClose,
  onSpotifyLogin,
  open,
}: LoginDialogProps) {
  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>
        Login
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>Log into Share List via:</DialogContentText>
      </DialogContent>
      <DialogActions>
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
      </DialogActions>
    </Dialog>
  );
}
