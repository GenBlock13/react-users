import { UserList } from '../components/UserList/UserList'
import { useState, useEffect } from 'react'
import { Button } from '../components/ui/Button/Button'
import { Input } from "../components/ui/Input/Input"


export const UsersPage = () => {
  const [visibleUserList, setVisibleUserList] = useState(true)
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({ firstName: '', lastName: '' })
  const [inputValueId, setInputValueId] = useState('')


  const toggleUserList = () => {
    setVisibleUserList(visibleUserList => !visibleUserList)
  }

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => setUsers(data.users))
    console.log('Первоначальное отображение компонента')
    // return () => {
    //   alert('List will be cleared!')
    //   console.log('Delete component')
    // }
  }, [])

  const changeValueId = (event) => {
    setInputValueId(event.target.value)
  }


  const addUser = () => {
    const newUser = {
      id: Math.round(Math.random() * 1000),
      firstName: user.firstName,
      lastName: user.lastName
    }
    // if (!inputValue) {
    //   return
    // }

    setUsers([...users, newUser])
    // setInputValue('')
    setUser({ firstName: '', lastName: '' })
  }


  const kickUser = (id) => {
    if (!inputValueId) {
      return
    }
    setUsers(users.filter(user => user.id !== id))
    setInputValueId('')
  }

  const updateUser = (id) => {
    const newText = prompt('New Name')
    if (!newText) {
      return
    }
    setUsers(users.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          firstName: newText
        }
      }
      return user
    }))
  }

  return (
    <>
      <Input
        placeholder="Input name"
        type="text"
        value={user.firstName}
        onChange={e => setUser({ ...user, firstName: e.target.value })}
      />

      <Input
        placeholder="Input last name"
        type="text"
        value={user.lastName}
        onChange={e => setUser({ ...user, lastName: e.target.value })}
      />



      <Button
        btnClass='plus'
        onClick={addUser}
      >Add User</Button>

      <Input
        placeholder="Input ID"
        type="text"
        value={inputValueId}
        onChange={changeValueId}
      />


      <Button
        btnClass='minus'
        onClick={() => kickUser(Number(inputValueId))}
      >Delete User</Button>



      {visibleUserList && <UserList users={users} updateUser={updateUser} />}
      <Button
        btnClass='plus'
        onClick={toggleUserList}>Показать-Скрыть</Button>
    </>
  )
}
