import { useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { GeneralDetails } from "../../components/BaseComponents/GeneralDetails/GeneralDetails";
import './details-page.css';
import { IconButton } from "@mui/material";
import { EditConnectionDetailsButton } from "../../components/EditConnectionDetailsButton/EditConnectionDetailsButton";
import { deleteConnection } from "../../requests/deleteConnection";
import { Loader } from "../../components/BaseComponents/Loader/Loader";
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAppDispatch, useAppSelector } from "../../Hooks/reduxHooks";
import { setLoadingDetails } from "../../redux/loadingDetailsSlice";
import { useConnectionDetails } from "../../Hooks/useConnectionDetails";


export const DetailsPage = () => {
    const { id } = useParams();
    const { connection, details } = useConnectionDetails(`${id}`)
    const navigate = useNavigate();
    const isLoadingDetails = useAppSelector((state) => state.loadingDetails.isLoading);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setLoadingDetails(true));
    }, [])

    const handleDelete = () => {
        deleteConnection(`${id}`)
        navigate('/')
    }

    if (!id) {
        return <div>no value</div>
    }
    return (
        <div>
            <div className="header-container table-header-container ">
                <IconButton aria-label="delete" onClick={() => { navigate('/') }}>
                    <ArrowBackIcon />
                </IconButton>
                <h2>Database Connection Details</h2>
            </div>
            {isLoadingDetails ? <Loader style={{ padding: "0 20px" }} /> :
                <>
                    <GeneralDetails details={details} title="Connections details"
                        editComponent={<div className="edit-delete-wrap">
                            <EditConnectionDetailsButton id={id} connection={connection} />
                            <IconButton aria-label="delete" onClick={handleDelete}>
                                <DeleteIcon style={{ height: 20 }} />
                            </IconButton>
                        </div>}
                        emptyState="No details found."
                    />
                </>
            }

        </div>
    )
}

