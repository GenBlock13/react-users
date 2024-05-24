import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export const UserProfilePage = () => {
    const { userId } = useParams()
    const [user, setUser] = useState({})
    const {firstName, lastName, age, gender, bloodGroup, image} = user

    useEffect(() => {
        fetch(`https://dummyjson.com/users/${userId}`)
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])

    return (
        <>
        <h2>Страница пользователя {firstName} {lastName} id: {userId}</h2>

        <div>Адрес: {user?.address?.address}</div>
        <img src={image} alt={`${firstName} ${lastName}`}/>

        </>
    )
}