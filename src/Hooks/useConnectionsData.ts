import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from './reduxHooks';
import { setLoading } from '../redux/loadingSlice';
import { setLoadingDetails } from "../redux/loadingDetailsSlice";

export type connectionType = "Snowflake" | "Trino" | "MySQL";

interface connectionsResponseType {
    "id": number;
    "name": string;
    "url": string;
    "username": string;
    "password": string;
    "type": connectionType;
}

export function useConnectionsData() {
    const [data, setData] = useState<connectionsResponseType[]>([])
    const isLoading = useAppSelector((state) => state.loading.isLoading);
    const dispatch = useAppDispatch();
    const isLoadingDetails = useAppSelector((state) => state.loadingDetails.isLoading);

    useEffect(() => {
        const fakeServerUrl = 'http://localhost:4000/databases';
        if (!isLoading && !isLoadingDetails) return
        axios.get<connectionsResponseType[]>(fakeServerUrl)
            .then((response) => {
                setData(response.data);

                setTimeout(() => {
                    dispatch(setLoading(false));
                    dispatch(setLoadingDetails(false));
                }, 500)
            })
            .catch((e) => {
                console.error('Error fetching data:', e);
                dispatch(setLoading(false));
                dispatch(setLoadingDetails(false));
            });
    }, [isLoading, isLoadingDetails]);

    return { data }
}
