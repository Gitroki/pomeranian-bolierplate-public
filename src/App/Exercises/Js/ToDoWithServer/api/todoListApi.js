
//BASE URL SHLOD BE PLACED ON .env
const BASE_API_URL = 'http://localhost:3333/'

//Tworzenie generycznej/uniwersalnej metody do pobierania danych ze Swagger API
export const fetchData = async (url) => {

    // axios, RTK Querry Toolkit 
    const response = await fetch(`${BASE_API_URL}${url}`)

    return response.json()
}

  //Post Request 
export const sendData = async (url, data, methodParam = "POST") => {
    const options = {
        method: methodParam,
        headers: {
            'Content-type': "application/json"
        },
        body: JSON.stringify(data),
    };

    const response = await fetch(`${BASE_API_URL}${url}`, options);

    return response.json();
}

