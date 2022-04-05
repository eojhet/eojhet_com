// members/profile

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { selectProfile, GetProfile } from "../../../components/redux/profileSlice";
import styles from "./index.module.scss";

export default function Profile () {
  const [editMode, setEditMode] = useState(false);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(GetProfile());
  },[])

  const reduxProfile = useSelector(selectProfile);
  
  function ProfileSection () {
    return (
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>Welcome {reduxProfile.displayName}!</h1>
          <p>Member since {new Date(reduxProfile.joinDate).toLocaleDateString('en-US', {month:'long', year:'numeric'})}.</p>
        </div>
        <div className={styles.content}>
          <p>First Name: {reduxProfile.firstName}</p>
          <p>Last Name: {reduxProfile.lastName}</p>
          <p>Bio: {reduxProfile.bio}</p>
          <button type='edit' onClick={() => setEditMode(!editMode)}>edit</button>
        </div> 
      </div>
    )
  }

  function NoProfile () {
    return (
      <div>
        <h3>Please <Link href="/members/login">Log In</Link> to continue</h3>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      {reduxProfile._id ? <ProfileSection /> : <NoProfile />}
    </div>
  )
}