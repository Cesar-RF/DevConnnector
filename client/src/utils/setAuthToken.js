import axios from 'axios';
import auth from '../reducers/auth';

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['xauth-token'];
  }
};

export default setAuthToken;
