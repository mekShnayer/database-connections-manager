import axios from 'axios';
import { connectionType } from '../Hooks/useConnectionsData';

export type dataObjectType = {
    "id": number,
    "name": string,
    "url": string,
    "username": string,
    "password": string,
    "type": connectionType

};

export function addDatabaseConnection(dataObject: dataObjectType) {
    axios({
        method: "POST",
        url: "http://localhost:4000/databases",
        headers: {
            'Content-Type': 'application/json',
        }
        ,
        data: dataObject,
    })
        .then((response) => {
            console.log('Response:', response.data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}



