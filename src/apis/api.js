import axios from "axios";

const api = axios.create({
    // baseURL: "https://5fd06b921f23740016631884.mockapi.io/api/"
    baseURL: "http://localhost:8081/"
});


// api.interceptors.response.use(function (response) {
//     return response;
//   }, function (error) {
//       console.log("here")
//     return Promise.reject(error);
// });

export default api;