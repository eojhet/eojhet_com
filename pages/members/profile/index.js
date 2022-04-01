import axios from "axios";
import { useEffect, useState } from "react";
import GetToken from "../../../components/getToken";
import styles from "./index.module.scss";

export default function Profile () {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const profileData = async () => {

      let token = 'Bearer ' + GetToken();

      let data = await axios({
        method: 'get',
        url: 'http://localhost:8080/members/profile',
        headers: {Authorization: token},
      })
      .then(function (res) {
        return res.data
      })
      .catch(function (err) {
        console.log('token ', token, 'err', err);
      })

      console.log('data', data);
      return data;
    }

    setProfile(profileData);

  }, [])


  return (
    <div className={styles.container}>
      <h1>Welcome</h1>
      <div className={styles.content}>
      </div>
    </div>
  )
}