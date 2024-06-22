/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import UserCreate from './UserCreate';
import User from './User';


const Users = (props) => {
  return (
    <>
      <UserCreate create={props.create} message={props.message} setMessage={props.setMessage}/>
      <h2>Users</h2>
      <div>
        {props.users.map((user, index) => (
          <User key={index} user={user} del={props.del}/>
        ))}
      </div>
    </>
  )
}

export default Users