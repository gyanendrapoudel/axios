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