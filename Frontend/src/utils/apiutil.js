import axios from "axios";

export function doLogin(loginRequest) {
  return axios
    .post(`http://localhost:8888/fetch`, null, {
      params: {
        username: loginRequest.username,
        password: loginRequest.password,
      },
    })
    .then((response) => {
      return response.data;
    });
}

export function doRegister(registerRequest) {
  return axios
    .post(`http://localhost:8888/register`, null, {
      params: {
        username: registerRequest.username,
        password: registerRequest.password,
      },
    })
    .then((response) => {
      return response.data;
    });
}
