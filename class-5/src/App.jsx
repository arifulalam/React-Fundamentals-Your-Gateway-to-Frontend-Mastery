/* eslint-disable no-import-assign */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import * as data from "./assets/data";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";

function App() {
  const [message, setMessage] = useState({});

  const getMessage = (message) => {
    setMessage(() => message);
  };

  const user_create = (user) => {
    user.ID = data.users.length + 1;
    //console.log(data.users.filter(u => u.username == user.username));
    if (
      data.users.filter((u) => u.username == user.username).length > 0 ||
      data.users.filter((u) => u.email == user.email).length > 0
    ) {
      getMessage({
        message: "Username and/or email exists. Please, try again.",
        class: "error alert",
      });
    } else {
      getMessage({
        message: "User added successfully.",
        class: "success alert",
      });
      data.users.push(user);
    }

    console.log(data.users);
  };

  const user_delete = (userId) => {
    data.users = data.users.filter((user) => user.ID != userId);
  };

  return (
    <>
      <div className="left">
        <Users
          users={data.users}
          create={user_create}
          message={message}
          setMessage={getMessage}
          del={user_delete}
        />
      </div>
      <div className="right">
        <Posts/>
      </div>
    </>
  );
}

export default App;
