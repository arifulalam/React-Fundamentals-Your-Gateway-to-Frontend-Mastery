/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function User({ user, del }) {
    /* const UserDelete = (id) => {
        del(id);
    } */
  return (
    <>
      <div className="mb10">
        <img
          src="https://avatar.iran.liara.run/public/"
          alt="avatar"
          className="avatar"
        />
        <h3>{user.fullname}</h3>
        <p>
            ID: {user.ID}<br/>
            Username: {user.username}<br/>
            Email: {user.email}<br/>
            Date of Birth: {user.dob}
        </p>
        <button className="danger">Delete</button>
      </div>
    </>
    //onClick={UserDelete(user.ID)}
  );
}

export default User;
