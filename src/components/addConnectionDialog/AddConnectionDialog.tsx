import { DialogWithForm } from "../BaseComponents/Dialog/DialogWithForm";
import { connectionsFormFields } from "../../constants/connectionsFormFields";
import { addDatabaseConnection } from "../../requests/addDatabaseConnection";
import AddIcon from '@mui/icons-material/Add';
import { useAppSelector, useAppDispatch } from "../../Hooks/reduxHooks";
import { setLoading } from "../../redux/loadingSlice";

interface AddConnectionDialogProps {
    buttonStyle?: React.CSSProperties;
}

export const AddConnectionDialog: React.FC<AddConnectionDialogProps> = ({ buttonStyle }) => {
    const dispatch = useAppDispatch();
    return (
        <DialogWithForm
            dialogTitle="Add database connection"
            buttonText={<AddIcon style={{ height: 20 }} />}
            handleSubmit={(object) => {
                addDatabaseConnection(object)
                dispatch(setLoading(true))
            }}
            buttonStyle={{
                color: "#757272",
                border: "none",
                width: 30,
                height: 30,
                minWidth: 0,
                borderRadius: "50%"
            }}
            dialogText="To add another databae connection please fill in this form."
            fields={connectionsFormFields} />
    )
}