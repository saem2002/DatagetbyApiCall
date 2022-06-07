import axios from 'axios';




export const getUsers = async (apicall) => {
    try {
        let response = await axios.get(`${apicall}`);
        return response.data.results
    } catch (error) {
        console.log('Error while calling getUsers API ', error);
    }
}
