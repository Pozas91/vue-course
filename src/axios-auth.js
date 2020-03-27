import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://curso-vue-cd4c5.firebaseio.com/'
});

instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance;
