import React, { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import { fetchUserData, showError } from '../actions'
import { useParams } from 'react-router-dom'

function Profile() {
  const params = useParams()
  const id = Number(params.id)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUserData(id))
  }, [])

  return (
    <div>
      <h3>This is the profile page</h3>
      <ul className="profile-list">
        <li className="profile-item">NAME:</li>
        <li className="profile-item">EMAIL</li>
        <li className="profile-item">DOB</li>
        <li className="profile-item">DRAFT</li>
        <li className="profile-item">PUBLISHED</li>
      </ul>
    </div>
  )
}

export default Profile
