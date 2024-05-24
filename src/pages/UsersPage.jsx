import { UserList } from '../components/UserList/UserList'
import { useState, useEffect, useRef } from 'react'
import { Button } from '../components/ui/Button/Button'
import { Input } from "../components/ui/Input/Input"
import { InputRef } from '../components/ui/InputRef/InputRef'

export const UsersPage = () => {
  const [visibleUserList, setVisibleUserList] = useState(true)

  const [users, setUsers] = useState([])
  // console.log(users)
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef(null)
  console.log(inputRef)

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

  const changeValue = (event) => {
    setInputValue(event.target.value)
  }


  const addUser = () => {
    const newUser = {
      id: Math.round(Math.random() * 1000),
      firstName: inputValue,
      lastName: inputRef.current.value
    }
    if (!inputValue) {
      return
    }

    setUsers([...users, newUser])
    setInputValue('')
    inputRef.current.value = ''
  }


  function kickUser(id) {
    if (!inputValue) {
      return
    }
    setUsers(users.filter(user => user.id != id))
    setInputValue('')
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
        value={inputValue}
        onChange={changeValue}
      />

      <InputRef
        ref={inputRef}
        placeholder='Enter last name'
        type='text'
      />

      <Button
        btnClass='plus'
        onClick={addUser}
      >Add User</Button>

      <Button
        btnClass='minus'
        onClick={() => kickUser(inputValue)}
      >Delete User</Button>



      {visibleUserList && <UserList users={users} updateUser={updateUser} />}
      <Button
        btnClass='plus'
        onClick={toggleUserList}>Показать-Скрыть</Button>
    </>
  )
}
