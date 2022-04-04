import { useState } from 'react';

export const [profileData, setProfileData] = useState({});

export async function GetProfile() {
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

  setProfileData(data);
}