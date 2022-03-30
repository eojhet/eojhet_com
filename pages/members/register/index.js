// members/login

import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './index.module.scss';
import SaveToken from '../../../components/saveToken';
import { useRouter } from 'next/router';

export default function Register () {
  
  const [username, setUsername] = useState('');
  const [userWarn, setUserWarn] = useState('');
  const [password, setPassword] = useState('');
  const [passConf, setPassConf] = useState('');
  const [passConfWarn, setPassConfWarn] = useState('');
  const [passWarn, setPassWarn] = useState('');
  const [email, setEmail] = useState('');
  const [emailWarn, setEmailWarn] = useState('');
  const [warning, setWarning] = useState('');
  const [ready, setReady] = useState(false);
  const router = useRouter();

  useEffect( () => {
    if (username.length > 4 && username.length < 25
        && password.length > 4 && password.length < 50){
          setReady(true);
          setWarning('');
        }
  }, [username, password]);

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassConf = (e) => {
    setPassConf(e.target.value)
  }

  const checkUsername = (e) => {
    if (username.length < 5 || username.length > 25){
      setUserWarn("Enter valid username.");
      e.target.style.borderColor = 'red';
    } else {
      setUserWarn("");
      e.target.style.borderColor = 'hsl(199, 71%, 70%)';
    }
  }

  const checkPassword = (e) => {
    if (password.length < 7 || password.length > 32){
      setPassWarn("Password should be 8 - 32.");
      e.target.style.borderColor = 'red';
    } else {
      setPassWarn("");
      e.target.style.borderColor = 'hsl(199, 71%, 70%)';
    }
  }

  const checkPassConf = (e) => {
    if (password !== passConf || passConf.length === 0) {
      setPassConfWarn("Passwords do not match");
      e.target.style.borderColor = 'red';
    } else {
      setPassConfWarn("");
      e.target.style.borderColor = 'hsl(199, 71%, 70%)';
    }
  }

  const checkEmail = (e) => {
    const regName = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    if (!regName.test(email)) {
      setEmailWarn("Enter valid email.");
      e.target.style.borderColor = 'red';
    } else {
      setEmailWarn("");
      e.target.style.borderColor = 'hsl(199, 71%, 70%)';
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (ready) {
    //   e.target.disabled = true;

    //   axios.post('/api/login', {
    //     username: username,
    //     password: password
    //   })
    //   .then(function(res) {
    //     if (res.data.token) {
    //       SaveToken(res.data.token);
    //       router.push('/members/profile');
    //     }
    //   })
    //   .catch(function (err) {
    //     if (err.response.status === 401) {
    //       setWarning('Invalid credentials.')
    //     } else {
    //       setWarning('Something went wrong...')
    //     }
    //     e.target.disabled = false;
    //   })
    // } else {
    //   setWarning('Enter valid credentials.')
    // }
  }

  return (
    <div className={styles.container}>
      <h1>Register</h1>
      <div className={styles.formContainer}>
        <form>
          <label>Email:&nbsp;</label>
          <br />
          <input
            name="email"
            value={email}
            onChange={handleEmail}
            autoComplete="email"
            onBlur={checkEmail}
          />
          <div className={styles.warning}>{emailWarn}&nbsp;</div>
          <label>Username:&nbsp;</label>
          <br />
          <input 
            name="username" 
            value={username} 
            onChange={handleUsername} 
            autoComplete="username" 
            onBlur={checkUsername}
          />
          <div className={styles.warning}>{userWarn}&nbsp;</div>
          <label>Password:&nbsp;</label>
          <br />
          <input 
            name="password" 
            type="password" 
            value={password} 
            onChange={handlePassword} 
            autoComplete="new-password"
            onBlur={checkPassword} 
          />
          <div className={styles.warning}>{passWarn}&nbsp;</div>
          <label>Confirm Password:&nbsp;</label>
          <br />
          <input 
            name="passConf" 
            type="password" 
            value={passConf} 
            onChange={handlePassConf} 
            autoComplete="new-password"
            onBlur={checkPassConf} 
          />
          <div className={styles.warning}>{passConfWarn}&nbsp;</div>
          <button type="submit" onClick={handleSubmit}>Register</button>
          <div className={styles.warning}>{warning}&nbsp;</div>
        </form>
      </div>
    </div>
  )  
}
