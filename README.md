# Axios ReadMe
# npm install axios

# first request 
-import axios
-axios.get(url)
-axios.post(url)
-axios.patch/put(url)
-axios.delete(url)

-default get axios(url)

-returns a promise
-response data located in data object
-error in error.response


# Headers
-second argument
-axios.get(url, {})

### Post request
-third argument in requests with data
-axios.post(url, {data},{})
-more options (auth header) 
try {
  const resp = await axios.post(url, { data });
} catch (error) {
  console.log(error.response.data);
}


# Global Defaults 
In Axios, a global instance is a single Axios instance configured with default settings that can be reused throughout your application. By creating a global instance, you can set default headers, base URLs, and other configuration options that apply to all requests made with that instance.
// In latest axios version common property returns "undefined"
// axios.defaults.headers.common['Accept'] = 'application/json';

axios.defaults.headers['Accept'] = 'application/json';

axios.defaults.baseURL = 'https://www.api.example.com';

// In latest axios version common property returns "undefined"
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers['Authorization'] = AUTH_TOKEN;

axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';

  ## Interceptors
 Interceptors in Axios are functions that Axios calls for every request or response before they are handled by the then or catch. They allow you to intercept requests or responses to perform some actions or modify the request or response data.

  There are two types of interceptors in Axios:

# Request Interceptors:
 These are used to modify request data before the request is sent to the server. For example, you can use request interceptors to add authorization tokens to headers, log request details, or manipulate request data.

# Response Interceptors:
 These are used to handle responses from the server. For instance, you can use response interceptors to check the response status, handle errors, or manipulate response data.


global and custom

authFetch.interceptors.request.use(
  (request) => {
    // request.headers.common['Accept'] = `application/json`;
    request.headers['Accept'] = `application/json`;

    console.log('request sent');
    // must return request
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authFetch.interceptors.response.use(
  (response) => {
    console.log('got response');
    return response;
  },
  (error) => {
    console.log(error.response);
    if (error.response.status === 404) {
      // do something
      console.log('NOT FOUND');
    }
    return Promise.reject(error);
  }
);
Update
In the latest version there is no common property

// In latest axios version common property returns "undefined"
// axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers['Accept'] = 'application/json';

// In latest axios version common property returns "undefined"
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers['Authorization'] = AUTH_TOKEN;
// request.headers.common['Accept'] = `application/json`;
request.headers['Accept'] = `application/json`;