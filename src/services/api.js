// Using axios as it is my go-to library for anything requests
import axios from "axios";

// The url to which api calls are sent to
const BASE_URL = "https://api-shopnani.herokuapp.com/api/";

// Function accepts the query and returns a promise. On completion of the promise, 
// the function return the data.
const search = query => {
  var promise = axios
    .get(BASE_URL, {
      params: {
        query: query
      }
    })
    .then(response => {
      // returns the data it recieved
      return response.data.products;
    });

  return promise;
};

export default search;
