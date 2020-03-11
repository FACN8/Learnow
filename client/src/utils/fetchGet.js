const checkResponse = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

const fetchGet = url => {
  const myHeaders = new Headers({
    Accept: 'application/json, text/plain, */*',
    Authorization: `Basic ${process.env.REACT_APP_AUTH}`,
    'Content-Type': 'application/json;charset=utf-8',
  });
  const config = {
    headers: myHeaders,
  };
  const newReq = new Request(url, config);
  return fetch(url, config)
    .then(checkResponse)
    .then(res => res.json())
    .catch(error => {
      throw Error(`Could not get data , error:${error}`);
    });
};

export default fetchGet;
