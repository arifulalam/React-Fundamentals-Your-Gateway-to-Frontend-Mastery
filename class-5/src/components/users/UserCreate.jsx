/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {React, useState} from 'react'

const UserCreate = ({create}) => {
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');

  const create_user = (e) => {
    e.preventDefault();
    
    create()
  }

  return (
    <>
        <form method='get'>
            <input type='text' onChange={setUsername(() => username)} name='username' id='userid' placeholder='Username'/>
            <br/>
            <input type='text' onChange={setFullname(() => fullname)} name='fullname' id='fullname' placeholder='Full Name'/>
            <br/>
            <input type='email' onChange={setEmail(() => email)} name='email' id='email' placeholder='Email Address'/>
            <br/>
            <input type='date' onChange={setDob(() => dob)} name='dob' id='dob' placeholder='Date of Birth'/>
            <br/>
            <button type='submit' className='bg-green-800 text-white py-4 px-4' onClick={create_user}>Create</button>
        </form>
    </>
  )
}

export default UserCreate