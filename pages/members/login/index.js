// members/login

import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styles from './index.module.scss';
import SaveToken from '../../../components/saveToken';
import { useRouter } from 'next/router';

export default function Login () {
  const { query } = useRouter();
  const [banner, setBanner] = useState('Login');
  const [username, setUsername] = useState('');
  const [userWarn, setUserWarn] = useState('');
  const [password, setPassword] = useState('');
  const [passWarn, setPassWarn] = useState('');
  const [warning, setWarning] = useState('');
  const [ready, setReady] = useState(false);
  const router = useRouter();
  const userInput = useRef();
  const passInput = useRef();
  
  useEffect( () => {
    if (query?.msg === 'Reg200') {
      setBanner('Registration Successful')
    }
  })

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

  const checkUsername = (e) => {
    if (username.length < 5 || username.length > 25){
      setUserWarn("Enter valid username.");
      e.target.style.borderColor= 'red';
    } else {
      setUserWarn("");
      e.target.style.borderColor= 'hsl(199, 71%, 70%)';
    }
  }

  const checkPassword = (e) => {
    if (password.length < 7 || password.length > 32){
      setPassWarn("Enter valid password.");
      e.target.style.borderColor= 'red';
    } else {
      setPassWarn("");
      e.target.style.borderColor= 'hsl(199, 71%, 70%)';
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (ready) {
      e.target.disabled = true;

      axios.post('/api/login', {
        username: username,
        password: password
      })
      .then(function(res) {
        if (res.data.token) {
          SaveToken(res.data.token);
          router.push('/members/profile');
        }
      })
      .catch(function (err) {
        if (err.response.status === 401) {
          setWarning('Invalid credentials.')
        } else {
          setWarning('Something went wrong...')
        }
        e.target.disabled = false;
      })
    } else {
      setWarning('Enter valid credentials.')
      userInput.current.focus();
      passInput.current.focus();
      e.target.focus();
    }
  }

  return (
    <div className={styles.container}>
      <h1>{banner}</h1>
      <div className={styles.formContainer}>
        <form>
          <label>Username:&nbsp;</label>
          <br />
          <input 
            name="username" 
            value={username} 
            onChange={handleUsername} 
            autoComplete="username" 
            onBlur={checkUsername}
            ref={userInput}
          />
          <div className={styles.warning}>{userWarn}&nbsp;</div>
          <label>Password:&nbsp;</label>
          <br />
          <input 
            name="password" 
            type="password" 
            value={password} 
            onChange={handlePassword} 
            autoComplete="password"
            onBlur={checkPassword} 
            ref={passInput}
          />
          <div className={styles.warning}>{passWarn}&nbsp;</div>
          <button type="submit" onClick={handleSubmit}>Login</button>
          <div className={styles.warning}>{warning}&nbsp;</div>
        </form>
      </div>
    </div>
  )  
}
