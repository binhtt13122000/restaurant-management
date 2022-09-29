import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";

export interface IConfirmModel {
    message: string;
    open: boolean;
    handleClose: (
        e: React.MouseEvent<HTMLButtonElement | MouseEvent>,
        action: "CONFIRM" | "CANCEL"
    ) => void;
}
export const ConfirmModal: React.FC<IConfirmModel> = (props: IConfirmModel) => {
    const { open, handleClose, message } = props;
    return (
        <Dialog open={open}>
            <DialogTitle>{"Do you want to confirm this action?"}</DialogTitle>
            <DialogContent>
                <DialogContentText>{message}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={(e) => handleClose(e, "CANCEL")} color="secondary">
                    {"Cancel"}
                </Button>
                <Button onClick={(e) => handleClose(e, "CONFIRM")} color="primary" autoFocus>
                    {"Approve"}
                </Button>
            </DialogActions>
        </Dialog>
    );
};
