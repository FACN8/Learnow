import axios from 'axios';

const checkResponse = response => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  return response;
};
const axiosGet = url => {
  axios.defaults.withCredentials = true;
  const config = {
    auth: {
      eUDm3bEwAKm4dyWgqkpSYyQ8jO65brGosjQacoTL:
        'KFDud8Cx8NjV94oivRsy4fCqnuwEDN8qaVrvfBs4ZaB2m98m2UNG9snMsmu9pa8yKOoOnbdHI00tRKBSiR2Uyo4AFGb8J5Y1pr24liIVKOsMiGRlpNUXpIBznAxKV1GI',
    },
    headers: {
      Accept: 'application/json, text/plain, */*',
      Authorization: `Basic ${process.env.REACT_APP_AUTH}`,
      'Content-Type': 'application/json;charset=utf-8',
    },
  };
  return axios
    .get(url, config)
    .then(checkResponse)
    .catch(error => {
      throw new Error(`Could not get data , error:${error}`);
    });
};

export default axiosGet;
