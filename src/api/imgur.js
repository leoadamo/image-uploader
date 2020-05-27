import axios from 'axios';
import qs from 'qs';

export default {
  login() {
    const queryString = {
      client_id: process.env.VUE_APP_CLIENT_ID,
      response_type: 'token'
    };

    window.location = `${
      process.env.VUE_APP_API_URL
    }/oauth2/authorize?${qs.stringify(queryString)}`;
  },
  fetchImages(token) {
    return axios.get(
      `${process.env.VUE_APP_API_URL}/3/account/me/images`,
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );
  }
};
