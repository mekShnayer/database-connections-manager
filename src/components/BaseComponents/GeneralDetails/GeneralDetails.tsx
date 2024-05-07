import React, { CSSProperties, useState } from "react";
import './general-details.css';
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { HiddenDetail } from "./components/HiddenDetail";
import { EmptyState } from "../EmptyState/EmptyState";

interface generalDetailsProps {
    details: { key: string; value: string; isHidden?: boolean }[];
    containerStyle?: CSSProperties;
    title?: string;
    editComponent?: ReactJSXElement;
    emptyState: string
}

export const GeneralDetails: React.FC<generalDetailsProps> = (props) => {
    const { details, containerStyle, title, editComponent, emptyState } = props
    if (details.length === 0) {
        return (
            <EmptyState content={emptyState} />
        )
    }
    return (
        <div style={{ ...containerStyle }} className="details-container">
            <div className="general-details-title">
                {title}
                {editComponent}
            </div>
            {details.map((detail, index) => (
                < div key={`${detail.key}-${detail.value}-${index}`} className="detail">
                    <div className="key-value bold">{detail.key}</div>
                    {detail.isHidden ?
                        <HiddenDetail content={detail.value} /> :
                        <div className="key-value">{detail.value}</div>}
                </div>
            ))}
        </div >
    )
}
