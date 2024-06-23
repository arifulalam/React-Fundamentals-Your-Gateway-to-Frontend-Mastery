/* eslint-disable no-import-assign */
/* eslint-disable no-unused-vars */
import { useState } from "react";
//import "./App.css";
import * as data from "./assets/data";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import { PostContext } from "./context/PostContext";
import { CommentContext } from "./context/CommentContext";

function App() {
  const [message, setMessage] = useState({});
  const [users, setUsers] = useState(data.users);
  const [posts, setPosts] = useState(data.posts);
  const [comments, setComments] = useState(data.comments);

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

      //setUsers((users) => data.users.push(user));
    }

    console.log(data.users);
  };

  const user_delete = (userId) => {
    data.users = data.users.filter((user) => user.ID != userId);
    //console.log(data.users.filter((user) => user.ID != userId));
  };

  return (
    <>
      <PostContext.Provider
        value={{
          posts,
          setPosts,
        }}
      >
        <CommentContext.Provider
          value={{
            comments,
            setComments,
          }}
        >
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
            <Posts users={data.users} />
          </div>
        </CommentContext.Provider>
      </PostContext.Provider>
    </>
  );
}

export default App;
