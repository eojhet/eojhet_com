import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectProfile } from '../../../components/redux/profileSlice';
import styles from './index.module.scss';

export default function EditProfile () {
  const [firstName, setFirstName] = useState('');

  const reduxProfile = useSelector(selectProfile);

  useEffect(() => {
    setFirstName(reduxProfile.firstName)
  },[])

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>EDIT {reduxProfile.displayName}!</h1>
        <p>Member since {new Date(reduxProfile.joinDate).toLocaleDateString('en-US', {month:'long', year:'numeric'})}.</p>
      </div>
      <div className={styles.content}>
        <input
          name="firstName"
          value={firstName}
          onChange={handleFirstName}
          // onBlue={checkFirstName}
        />
        <p>First Name: {reduxProfile.firstName}</p>
        <p>Last Name: {reduxProfile.lastName}</p>
        <p>Bio: {reduxProfile.bio}</p>
      </div> 
    </div>
  )
}