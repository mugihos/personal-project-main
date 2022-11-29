import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserData } from '../actions'
import { useParams } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

function Profile() {
  // const profile = useSelector((state) => state.user)
  // const params = useParams()
  // const id = Number(params.id)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchUserData(id))
  // }, [])
  const { user } = useAuth0()

  return (
    <div>
      <h3>This is the profile page</h3>
      {/* <ul className="profile-list">
        <li className="profile-item">NAME: {profile.name}</li>
        <li className="profile-item">EMAIL {profile.email}</li>
        <li className="profile-item">DOB </li>
        <li className="profile-item">DRAFT {profile.draft}</li>
        <li className="profile-item">PUBLISHED {profile.complete}</li>
      </ul> */}
    </div>
  )
}

export default Profile
