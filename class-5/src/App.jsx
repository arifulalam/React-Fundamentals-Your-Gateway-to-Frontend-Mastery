/* eslint-disable no-import-assign */
/* eslint-disable no-unused-vars */
import './App.css'
import * as data from './assets/data'
import UserCreate from './components/users/UserCreate'
import Users from './components/users/Users'

function App() {

  const user_create = (user) => {
    data.users.push(user);
  }

  const user_delete = (userId) => {
    data.users = data.users.filter(user => user.ID != userId);
  }

  return (
    <>
      <UserCreate create={user_create}/>
      <Users delete={user_delete}/>
    </>
  )
}

export default App
