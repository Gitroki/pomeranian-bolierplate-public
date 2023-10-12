

//BASE URL SHLOD BE PLACED ON .env
const BASE_API_URL = 'http://localhost:3333/'

//Tworzenie generycznej/uniwersalnej metody do pobierania danych ze Swagger API
export const fetchData = async (url) => {

    return new Promise(async (resolve, reject) => {
        const response = await fetch(`${BASE_API_URL}${url}`)
        if(response.status === 200){
             resolve(response.json())
        }else {
            reject(response.json().message)
        }
    });
};

  //Post Request 
export const sendData = async (url, data, methodParam = "POST") => {

    return new Promise(async (resolve, reject) => {
        const options = {
            method: methodParam,
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify(data),
    };

    const response = await fetch(`${BASE_API_URL}${url}`, options);
    //response.status
    if(response.status === 200){
        resolve(response.json())
    }else {
        // zwracamy stringa
        reject(response.json().message)

        // zwracamy obiekt błędu
        // reject(response.json())
    }
})

}

