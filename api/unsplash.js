import axios from 'axios';


export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID cc1d07af671871ac80a33b7a651aee0ebb0bece1630a17e6ced1757ef15803b5',
  }
});
