import { useState } from 'react';
import * as Yup from 'yup';
import styles from './index.module.scss';

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export default function Login () {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    setUsername('');
    setPassword('');
  }

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <div className={styles.formContainer}>
        <form>
          <label>Username:&nbsp;</label>
          <br />
          <input name="username" value={username} onChange={handleUsername} autoComplete="username" />
          <br />
          <label>Password:&nbsp;</label>
          <br />
          <input name="password" type="password" value={password} onChange={handlePassword} autoComplete="password" />
          <br />
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