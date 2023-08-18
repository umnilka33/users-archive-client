import { Alert, Snackbar } from "@mui/material"
import { IAlertState } from "../../types/types";
import { useDispatch } from "react-redux";
import { alertActions } from "../../redux/Alert/slices/alertSlice";

interface UserAlertProps {
    info: IAlertState
}
export const UserAlert = ({ info }: UserAlertProps) => {
    const { alertText, alertStatus } = info;
    const handleAlertClose = () => dispatch(alertActions.hideAlert())
    const dispatch = useDispatch();

    return (
        <Snackbar
            open={true}
            autoHideDuration={6000}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            onClose={handleAlertClose}>
            <Alert onClose={handleAlertClose} severity={alertStatus} sx={{ width: '100%' }}>
                {alertText}
            </Alert>
        </Snackbar>
    )
}