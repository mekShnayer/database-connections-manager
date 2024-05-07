
import { CSSProperties } from 'react';
import './loader.css';

interface loaderProps {
    width?: string | number;
    height?: string | number;
    style?: CSSProperties
}
export const Loader: React.FC<loaderProps> = ({ width, height, style }) => {
    return (
        <div className="shimmer-loader" style={{ ...style, width, height }}></div>
    )
}