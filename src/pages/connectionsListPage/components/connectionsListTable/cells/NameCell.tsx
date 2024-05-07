import { GridRenderCellParams } from "@mui/x-data-grid"
import { useNavigate } from "react-router-dom"
import './name-cell.css';

export const NameCell: React.FC<GridRenderCellParams> = (props) => {
    const { id, value } = props
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`/connections-details/${id}`)} className="name-cell" >
            {value}
        </div>
    )
}