

import axios from "axios";
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "./reduxHooks";
import { setLoadingDetails } from "../redux/loadingDetailsSlice";

export type connectionType = "Snowflake" | "Trino" | "MySQL";

export function useConnectionDetails(id: string) {
    const [details, setDetails] = useState<{ key: string, value: string, isHidden?: boolean }[]>([])
    const [connection, setConnection] = useState()
    const isLoadingDetails = useAppSelector((state) => state.loadingDetails.isLoading);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!id || !isLoadingDetails) return
        axios({
            method: "GET",
            url: `http://localhost:4000/databases/${id}`,
        }).then((response) => {
            const responseDetails = [
                {
                    key: "name",
                    value: response.data.name
                }, {
                    key: "url",
                    value: response.data.url
                }, {
                    key: "username",
                    value: response.data.username
                }, {
                    key: "type",
                    value: response.data.type
                },
                {
                    key: "password",
                    value: response.data.password,
                    isHidden: true
                }
            ]
            setConnection(response.data)
            setDetails(responseDetails)
            dispatch(setLoadingDetails(false));

        })
            .catch((error) => {
                console.error('Error:', error);
                dispatch(setLoadingDetails(false));

            });

    }, [isLoadingDetails])
    return { connection, details }
}
