import axios from "axios";

export default function handler(request, response) {
  if (request.method === 'POST') {
    let username = request.body.username;
    let email = request.body.email;
    let password = request.body.password;

    axios.post('http://localhost:8080/api/user/register', {
      username: username,
      email: email,
      password: password
    })
    .then(function (res) {
      response.status(200).send(res.data);
    })
    .catch(function (err) {
      console.log(err);
      response.status(err.response.status).send({ message: "Invalid Credentials" });
    });

  } else {
    response.status(404).json({ message: 'Unavailable' });
  }
}