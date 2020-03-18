import axios from 'axios';

const checkResponse = response => {
  if (response.status !== 201) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  return response;
};

const axiosPost = (url,data)=> {
  const config = {
    method: 'post',
    url: url,
    data: data
  };
  return axios(config)
    .then(checkResponse)
    .catch(error => {
      throw new Error(`Could not Post data , error:${error}`);
    });
};

export default axiosPost;