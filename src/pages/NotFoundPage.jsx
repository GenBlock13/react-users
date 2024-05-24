import { Link } from "react-router-dom"

export const NotFoundPage = () => {
    return (
        <>
        <div>
            Страница не найдена 404
        </div>
        <Link to='/' >Перейти на главную страницу</Link>
        <Link to='users' >Перейти на страницу Users</Link>

        </>
    )
}