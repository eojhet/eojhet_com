import axios from "axios";
import { GetToken } from "./tokenManagement";

export async function SaveProfile () {
  if (typeof window !== "undefined") {
    let token = 'Bearer ' + GetToken();
    let data = await axios({
      method: 'get',
      url: '/api/profile',
      headers: {Authorization: token},
    })
    .then(function (res) {
      return res.data
    })
    .catch(function (err) {
      console.log('token ', token, 'err', err);
      return
    })

    localStorage.setItem('profile', JSON.stringify(data));
  }
}

// export function SaveProfile (data) {
//   if (typeof window !== "undefined") {
//     localStorage.setItem('profile', JSON.stringify(data));
//   }
// }

export function RetrieveProfile () {
  if (typeof window !== "undefined") {
    let saved = localStorage.getItem('profile');
    const profile = JSON.parse(saved);
    console.log(profile);
    return profile || undefined;
  }
}