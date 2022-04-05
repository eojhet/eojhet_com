// members/profile

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { selectProfile } from "../../../components/redux/profileSlice";

import GetProfile from "../../../components/getProfile";
import styles from "./index.module.scss";

export default function Profile () {
  const [profile, setProfile] = useState({});
  const [editMode, setEditMode] = useState(false);
  
  // useEffect(() => {
  //   getProfile();
  // }, [])

  // async function getProfile () {
  //   let profileData = await GetProfile()
  //   console.log(profileData);
  //   setProfile(profileData);
  // }

  const displayName = useSelector(selectProfile);
  
  function ProfileSection () {
    return (
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>Welcome {profile.displayName}!</h1>
          <p>Member since {new Date(profile.joinDate).toLocaleDateString('en-US', {month:'long', year:'numeric'})}.</p>
        </div>
        <div className={styles.content}>
          <p>First Name: {profile.firstName}</p>
          <p>Last Name: {profile.lastName}</p>
          <p>Bio: {profile.bio}</p>
          <button type='edit' onClick={() => setEditMode(!editMode)}>edit</button>
        </div> 
      </div>
    )
  }

  function NoProfile () {
    return (
      <div>
        <h3>Please <Link href="/members/login">Log In</Link> to continue</h3>
        <h3>{displayName}</h3>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      {profile._id ? <ProfileSection /> : <NoProfile />}
    </div>
  )
}