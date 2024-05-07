import { GridRenderCellParams } from "@mui/x-data-grid"
import './action-cell.css';
import { useNavigate } from "react-router-dom";
import { deleteConnection } from "../../../../../requests/deleteConnection";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { EditConnectionDetailsButton } from "../../../../../components/EditConnectionDetailsButton/EditConnectionDetailsButton";
import { useAppDispatch } from "../../../../../Hooks/reduxHooks";
import { setLoading } from "../../../../../redux/loadingSlice";

export const ActionCell: React.FC<GridRenderCellParams> = (props) => {
    const { id } = props
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const object = { ...props.row }
    const handleView = () => {
        navigate(`/connections-details/${id}`)
    }

    const handleDelete = () => {
        deleteConnection(`${id}`)
        dispatch(setLoading(true))
    }
    return (
        <div>
            <IconButton aria-label="view" onClick={handleView}>
                <VisibilityIcon style={{ height: 20 }} />
            </IconButton>
            <EditConnectionDetailsButton id={`${id}`} connection={object} />
            <IconButton aria-label="delete" onClick={handleDelete}>
                <DeleteIcon style={{ height: 20 }} />
            </IconButton>


        </div>
    )
}

