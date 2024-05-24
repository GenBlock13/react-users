import { Link } from 'react-router-dom'
export const UserItem = ({user, updateUser}) => {
    return (
        <li onContextMenu={() => updateUser(user.id)}>
             < Link to={`/users/${user.id}`}>
            {user.id}.{user.firstName} {user.lastName} {user.email}</Link>
            
{/* 
            // <Link to={`/users/${user.id}`}>
            // Перейти на страницу пользователя {user.firstName}
            // </Link> */}
        </li>
    )
} 