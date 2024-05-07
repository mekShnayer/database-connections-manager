import axios from "axios";


export const deleteConnection = (id: string) => {
    axios({
        method: "DELETE",
        url: `http://localhost:4000/databases/${id}`,
    })
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}