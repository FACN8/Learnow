import axios from 'axios'

const checkResponse = response => {
    if (response.status !== 200) {
      console.log(`Error with the request! ${response.status}`);
      return;
    }
    return response;
  };
const  axiosGet = url =>{

    return axios.get(url)
    .then(checkResponse)
    .catch(error => {throw new Error(`Could not get data , error:${error}`)})
}

export default axiosGet;
