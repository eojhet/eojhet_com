// members/login

import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styles from './index.module.scss';
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
  const emailReg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  const emailInput = useRef();
  const userInput = useRef();
  const passInput = useRef();
  const passConfInput = useRef();

  useEffect( () => {
    //username should be 3 - 25 chars
    //password should be 6 - 32 chars
    if (emailReg.test(email)
        && username.length > 2 && username.length < 26
        && password.length > 5 && password.length < 33
        && passConf.length > 0 && passConf === password
        ){
          setReady(true);
          setWarning('');
        } else {
          setReady(false);
        }
  }, [email, username, password, passConf]);

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
      setUserWarn("Username should be 3 - 25 characters.");
      e.target.style.borderColor = 'red';
    } else {
      setUserWarn("");
      e.target.style.borderColor = 'hsl(199, 71%, 70%)';
    }
  }

  const checkPassword = (e) => {
    if (password.length < 7 || password.length > 32){
      setPassWarn("Password should be 6 - 32 characters.");
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
    if (!emailReg.test(email)) {
      setEmailWarn("Enter valid email.");
      e.target.style.borderColor = 'red';
    } else {
      setEmailWarn("");
      e.target.style.borderColor = 'hsl(199, 71%, 70%)';
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (ready) {
      e.target.disabled = true;

      axios.post('/api/register', {
        username: username,
        email: email,
        password: password
      })
      .then(function(res) {
        console.log(res);
        if (res.status === 200) {
          router.push(`/members/login?msg=Reg200`);
        }
      })
      .catch(function (err) {
        if (err?.response?.status === 400) {
          setWarning('Username is taken.')
        } else {
          setWarning('Something went wrong...')
        }
        e.target.disabled = false;
      })
    } else {
      setWarning('Enter valid credentials.')
      emailInput.current.focus();
      userInput.current.focus();
      passInput.current.focus();
      passConfInput.current.focus();
      e.target.focus();
    }
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
            ref={emailInput}
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
            autoComplete="new-password"
            onBlur={checkPassword} 
            ref={passInput}
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
            ref={passConfInput}
          />
          <div className={styles.warning}>{passConfWarn}&nbsp;</div>
          <button type="submit" onClick={handleSubmit}>Register</button>
          <div className={styles.warning}>{warning}&nbsp;</div>
        </form>
      </div>
    </div>
  )  
}
