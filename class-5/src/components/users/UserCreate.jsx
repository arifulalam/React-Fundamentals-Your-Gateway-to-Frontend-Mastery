/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { React, useState } from "react";

const UserCreate = ({ create, message, setMessage }) => {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");

  const getValue = (e) => {
    if(e.target.id == 'username')
      setUsername((value) => e.target.value);
    if(e.target.id == 'fullname')
      setFullname((value) => e.target.value);
    if(e.target.id == 'email')
      setEmail((value) => e.target.value);
    if(e.target.id == 'dob')
      setDob((value) => e.target.value);
  }

  const create_user = (e) => {
    e.preventDefault();

    if(username == '' || fullname == '' || email == '' || dob == ''){
      setMessage({message: 'All fields are required. Please, fill all data.', class: 'error alert'});
    }else{
      setMessage({message: '', class: ''});
      create({
        ID: 0,
        username: username,
        fullname: fullname,
        email: email,
        dob: dob
      });
    }    
  };

  return (
    <>
      <form method="get">
        <h2>New User</h2>
        <div className={message.class}>{message.message}</div>
        <input
          type="text"
          onChange={getValue}
          name="username"
          id="username"
          placeholder="Username"
          value={username}
        />
        <br />
        <input
          type="text"
          onChange={getValue}
          name="fullname"
          id="fullname"
          placeholder="Full Name"
          value={fullname}
        />
        <br />
        <input
          type="email"
          onChange={getValue}
          name="email"
          id="email"
          placeholder="Email Address"
          value={email}
        />
        <br />
        <input
          type="date"
          onChange={getValue}
          name="dob"
          id="dob"
          placeholder="Date of Birth"
          value={dob}
        />
        <br />
        <button
          type="submit"
          className='success'
          onClick={create_user}
        >
          Create
        </button>
      </form>
    </>
  );
};

export default UserCreate;
