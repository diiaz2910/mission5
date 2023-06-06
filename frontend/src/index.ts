import axios from 'axios';

axios.get('http://localhost:3001/messages')
  .then((response) => {
    const message = response.data.message;
    console.log(message);
    // Update the frontend to display the message as desired
  })
  .catch((error) => {
    console.error('An error occurred', error);
  });