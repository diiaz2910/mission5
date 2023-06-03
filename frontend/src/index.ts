import axios from 'axios';

axios.get('http://backend:3000/messages')
  .then((response) => {
    const message = response.data.message;
    console.log(message);
  })
  .catch((error) => {
    console.error('An error occurred', error);
  });