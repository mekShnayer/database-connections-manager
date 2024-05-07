import { IconButton } from "@mui/material";
import { useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


interface hiddenDetailProps {
    content: string
}

export const HiddenDetail: React.FC<hiddenDetailProps> = (props) => {
    const { content } = props
    const [hidden, setHidden] = useState(true)
    const toggleVisibility = () => {
        setHidden(!hidden);
    };
    return (
        <div className="hidden-detail">
            <div className="hidden-content">{!hidden ? content : '••••••••'}
                <IconButton aria-label="view" onClick={toggleVisibility}>
                    {!hidden ? <VisibilityOffIcon style={{ height: 20 }} /> : <VisibilityIcon style={{ height: 20 }} />}
                </IconButton>
            </div>
        </div>
    )

}