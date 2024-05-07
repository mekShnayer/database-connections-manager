import { useNavigate } from "react-router-dom";
import './page-not-found.css';


export const PageNotFound = () => {
    const navigate = useNavigate()
    return (
        <div className="page-not-found">
            <h1> page not found. </h1>
            <p onClick={() => navigate('/')} style={{ textDecoration: "underline", cursor: "pointer" }}> return to Home</p >
        </div>
    )
}