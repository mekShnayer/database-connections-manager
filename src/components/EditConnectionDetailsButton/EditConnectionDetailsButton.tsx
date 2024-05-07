import { dataObjectType } from "../../requests/addDatabaseConnection"
import { updateConnection } from "../../requests/updateConnection"
import { DialogWithForm } from "../BaseComponents/Dialog/DialogWithForm"
import { connectionsFormFields } from "../../constants/connectionsFormFields";
import EditIcon from '@mui/icons-material/Edit';
import { setLoading } from "../../redux/loadingSlice";
import { useAppDispatch } from "../../Hooks/reduxHooks";
import { useNavigate } from "react-router-dom";
import { setLoadingDetails } from "../../redux/loadingDetailsSlice";

interface EditConnectionDetailsButtonProps {
    connection?: dataObjectType;
    id: string;
    buttonStyle?: React.CSSProperties;
}

export const EditConnectionDetailsButton: React.FC<EditConnectionDetailsButtonProps> = ({ connection, id, buttonStyle, }) => {
    const dispatch = useAppDispatch();
    return (
        <DialogWithForm
            buttonStyle={{
                ...buttonStyle,
                color: "#757272",
                border: "none",
                width: 30,
                height: 30,
                minWidth: 0,
                borderRadius: "50%"
            }}
            dialogTitle="Edit database connection"
            buttonText={<EditIcon style={{ height: 20 }} />}
            handleSubmit={(object) => {
                updateConnection(object, id)
                dispatch(setLoadingDetails(true))
            }}

            prevDetails={connection}
            fields={connectionsFormFields} />
    )
}