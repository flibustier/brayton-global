import axios from 'axios'

const baseURLprod = "http://dev.skillmatrix.be/app_dev.php/api/v1"
const baseURL = "http://127.0.0.1:8000/app_dev.php/api/v1"

// Get requests list
const requests = () =>
  axios
    .get(`${baseURL}/requests`)
    .then(response => {
      return response.data;
    })
    .catch(e => {
      console.log(e);
      throw e;
    });

export default {
  requests
}
