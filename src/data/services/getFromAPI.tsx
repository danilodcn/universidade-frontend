var axios = require("axios");

export default async function GetFromAPI(url: string) {
    const response = await axios.get(url)
    return response.data; 
}
