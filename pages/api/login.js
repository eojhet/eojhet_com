import axios from "axios";

export default async function handler(request, response) {
  if (request.method === 'POST') {
    let username = request.body.username;
    let password = request.body.password;

    const data = await axios.post('http://localhost:8080/api/user/login', {
      username: username,
      password: password
    })
    .then(function (res) {
      return res.data;
    })
    .catch(function (err) {
      response.status(err.response.status).send({ message: 'Invalid Credentials'});
    });

    response.status(200).send(data);

  } else {
    response.status(404).json({ message: 'Unavailable' });
  }
}