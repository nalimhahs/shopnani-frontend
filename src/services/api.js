import axios from "axios";

const BASE_URL = "https://api-shopnani.herokuapp.com/api/";

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
