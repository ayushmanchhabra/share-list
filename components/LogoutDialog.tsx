import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

interface LogoutDialogProps {
  open: boolean;
  onClose: () => void;
  onLogout: () => void;
}

export function LogoutDialog({ open, onClose, onLogout }: LogoutDialogProps) {
  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>
        Logout
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>Logout of Share List:</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onLogout}>Logout</Button>
      </DialogActions>
    </Dialog>
  );
}
