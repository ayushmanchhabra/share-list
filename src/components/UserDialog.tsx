import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from "@mui/material";
import { Apple as AppleIcon, Close as CloseIcon, YouTube as YouTubeIcon } from '@mui/icons-material';

// import { SpotifyIcon } from "assets";

interface UserDialogProps {
    open: boolean;
    onClose: (event: any) => void;
}

export function UserDialog({
    onClose,
    open,
}: UserDialogProps) {
    return (
        <Dialog
            onClose={onClose}
            open={open}
        >
            <DialogTitle>
                Login
                <IconButton>
                    <CloseIcon onClick={onClose}/>
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>Log into Share List via:</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button>
                    <AppleIcon />
                    Apple Music
                </Button>
                <Button>
                    {/* <SpotifyIcon /> */}
                    Spotify
                </Button>
                <Button>
                    <YouTubeIcon />
                    YouTube Music
                </Button>
            </DialogActions>
        </Dialog>
    );
}
