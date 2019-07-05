import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";

const search = query => {
  var promise = axios
    .get(BASE_URL, {
      params: {
        query: query
      }
    })
    .then(response => {
      // console.log(response);
      return response.data.products;
    });

  return promise;
};

export default search;
