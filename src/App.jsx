import { Counter } from './components/Counter/Counter'
import { UserList } from './components/UserList/UserList'
import './index.scss'
import { useState } from 'react'
import { Button } from './components/ui/Button/Button'
import { Routes, Route } from 'react-router-dom'
import { MainPage} from './pages/MainPage'
import { UsersPage } from './pages/UsersPage'
import { UserProfilePage } from './pages/UserProfilePage'
import { NotFoundPage } from './pages/NotFoundPage'



function App() {

  // const [visibleUserList, setVisibleUserList] = useState(true)

  // const toggleUserList = () => {
  //   setVisibleUserList(visibleUserList => !visibleUserList)
  // }

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:userId" element={<UserProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>




      {/* {visibleUserList && <UserList/>}
      <Button 
      btnClass='plus'
      onClick={toggleUserList}>Показать-Скрыть</Button> */}

    </div>
  ) 
}

export default App