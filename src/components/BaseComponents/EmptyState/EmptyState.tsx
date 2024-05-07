import { ReactJSXElement } from "@emotion/react/types/jsx-namespace"
import { CSSProperties } from "react";
import './emptyState.css'
interface emptyStateProps {
    content: string | ReactJSXElement;
    containterStyle?: CSSProperties;
}
export const EmptyState: React.FC<emptyStateProps> = (props) => {
    const { content, containterStyle } = props
    return (
        <div className="emptyState-container" style={{ ...containterStyle }}>
            {content}
        </div>
    )

}