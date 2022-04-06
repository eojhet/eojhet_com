// members/profile

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { RetrieveProfile, SaveProfile } from "../../../components/profileManagement";
import { selectProfile, getProfile } from "../../../components/redux/profileSlice";
import styles from "./index.module.scss";

export default function Profile () {

  const dispatch = useDispatch();
  
  useEffect(() => {
    SaveProfile();
    dispatch(getProfile(RetrieveProfile()));
  },[])

  const reduxProfile = useSelector(selectProfile);

  // function NoProfile () {
  //   return (
  //     <div>
  //       <h3>Please <Link href="/members/login">Log In</Link> to continue</h3>
  //     </div>
  //   )
  // }

  if (!reduxProfile._id){
    return (
      <div>
        <h3>Please <Link href="/members/login">Log In</Link> to continue</h3>
      </div>
    )
  } else {

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
          <p><Link href="/members/profile/edit">Edit profile</Link></p>
        </div> 
      </div>
    )
  }
}