import axios from 'axios';

export default async function handler(request, response) {

  if (request.method === 'GET') {

    let data = await axios ({
      method: 'get', 
      url: 'http://localhost:8080/members/profile',
      headers: { Authorization: request.headers.authorization },
    })
    .then(function (res) {
      return res.data
    })
    .catch(function (err) {
      response.send(err);
    })
    
    response.status(201).send(data);
    
  } else {
    response.status(404).json({ message: 'Unavailable' });
  }
}