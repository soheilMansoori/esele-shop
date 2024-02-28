import { useContext } from 'react'
import { useRoutes } from 'react-router-dom'
import router from './router'
import authContext from '../contexts/authContext/authContext'

export default function Routes() {
    const { isLoggedIn, isAdmin } = useContext(authContext)
    const routes = useRoutes(router(isLoggedIn, isAdmin))
    return (
        <div>
            <div className='h-100'>
                {routes}
            </div>
        </div>
    )
}
