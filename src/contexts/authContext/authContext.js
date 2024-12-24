import { createContext, useState, useEffect, useCallback } from "react";

const AuthContext = createContext({
    userID: null,
    isLoggedIn: false,
    token: null,
    userInfos: null,
    userRole: null,
    login: () => null,
    logout: () => null,
})

export default AuthContext;

export const AuthContextProvider = ({ children }) => {
    const [render, reRender] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInfos, setUserInfos] = useState([])
    const [userID, setUserID] = useState(null);
    const [token, setToken] = useState(null)
    const [userRole, setUserRole] = useState(null)

    // login
    const login = useCallback((userToken, userInfos) => {
        setUserID(userInfos.id)
        setIsLoggedIn(true)
        setToken(userToken)
        setUserInfos(userInfos)
        setUserRole(userInfos.role)
        localStorage.setItem('user', JSON.stringify({ token: userToken }))
    }, [])


    // logout 
    const logout = useCallback(() => {
        setToken(null)
        setUserInfos([])
        setIsLoggedIn(false)
        setUserRole(null)
        localStorage.removeItem('user')
    }, [])



    // Refresh Token
    useEffect(() => {
        const localStorageData = JSON.parse(localStorage.getItem('user'))

        if (localStorageData) {
            fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/users?token=${localStorageData.token}`)
                .then(res => res.json())
                .then(data => {
                    const mainData = data[0];
                    // console.log("mainData => ", mainData);
                    setUserID(mainData.id)
                    setIsLoggedIn(true)
                    setUserInfos(mainData)
                    setToken(mainData.token)
                    setUserRole(mainData.role)

                })
                .catch(error => console.log(error.message))
        }


    }, [token, render]);


    return (
        <AuthContext.Provider value={{
            userID,
            isLoggedIn,
            token,
            userInfos,
            login,
            logout,
            userRole,
            reRender,
            render,
        }}>
            {children}
        </AuthContext.Provider>
    )
}
