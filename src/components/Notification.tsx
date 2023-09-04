import { Alert, Snackbar } from "@mui/material";

import { NotificationSchema } from "schema";

interface NotificationProps {
    onClose: () => void;
    open: boolean;
    message: string,
    type: NotificationSchema
}

export function Notification({
    onClose,
    open,
    message,
    type,
}: NotificationProps) {
    return (
        <Snackbar
            anchorOrigin={{
                horizontal: "center",
                vertical: "bottom",
            }}
            onClose={onClose}
            open={open}
        >
            <Alert
                onClose={onClose}
                severity={type}
                sx={{ width: '100%' }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
}