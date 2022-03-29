// members/login

import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './index.module.scss';

export default function Login () {
  
  const [username, setUsername] = useState('');
  const [userWarn, setUserWarn] = useState('');
  const [password, setPassword] = useState('');
  const [passWarn, setPassWarn] = useState('');
  const [ready, setReady] = useState(false);

  useEffect( () => {
    if (username.length > 4 && username.length < 25
        && password.length > 4 && password.length < 50){
          setReady(true);
        }
  }, [username, password]);

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
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
        console.log(res.data.token)
        e.target.disabled = false;
      })
      .catch(function (err) {
        console.log(err.response.data.message);
        e.target.disabled = false;
      })
    }
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
    if (password.length < 5 || password.length > 50){
      setPassWarn("Enter valid password.");
      e.target.style.borderColor= 'red';
    } else {
      setPassWarn("");
      e.target.style.borderColor= 'hsl(199, 71%, 70%)';
    }
  }

  return (
    <div className={styles.container}>
      <h1>Login</h1>
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
          />
          <div className={styles.userWarn}>{userWarn}&nbsp;</div>
          <label>Password:&nbsp;</label>
          <br />
          <input 
            name="password" 
            type="password" 
            value={password} 
            onChange={handlePassword} 
            autoComplete="password"
            onBlur={checkPassword} 
          />
          <div className={styles.passWarn}>{passWarn}&nbsp;</div>
          <button type="submit" onClick={handleSubmit}>Login</button>
        </form>
      </div>
    </div>
  )

  
}

// <Formik
//         validationSchema={SignupSchema}
//       >
//         {({ errors, touched }) => {
//           return (<Form>
//             <Field 
//               name="username" 
//               value={username} 
//               onChange={handleUsername} 
//             />
//             {errors.username && touched.username ? (
//               <div>{errors.username}</div>
//             ) : <div>&nbsp;</div>}

//             <br />

//             <Field 
//               name="password" 
//               value={password}
//               onChange={handlePassword}
//             />
//             {errors.password && touched.password ? (
//               <div>{errors.password}</div>
//             ) : <div>&nbsp;</div>}
            
//             <br />

//             <button type="submit" onSubmit={handleSubmit}>Submit</button>
//           </Form>)
//         }}
//       </Formik>