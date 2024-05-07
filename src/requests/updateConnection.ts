import axios from "axios";
import { dataObjectType } from "./addDatabaseConnection";


export const updateConnection = (dataObject: dataObjectType, id: string) => {
    axios({
        method: "PUT",
        url: `http://localhost:4000/databases/${id}`,
        headers: {
            "Content-Type": "application/json"
        },
        data: dataObject,
    })
        .then((response) => {
            console.log(response)

        })
        .catch((error) => {
            console.error('Error:', error);
        });
}