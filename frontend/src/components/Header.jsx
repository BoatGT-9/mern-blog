import {useContext,useState} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const Header = () => {
  const {setUserInfo, userInfo} = useContext(UserContext);
  const username = userInfo?.username; 
  const logout = ()=>{
    fetch(`${baseURL}/logout`)
  }
  return (
    <header>
      <Link to={"/"} className='logo'>
        SE NPRU Blog
      </Link>
      <nav> 

      {userInfo && (
        <>
       <Link to={"/create"}>Add</Link> 
       <a onClick={logout}> logout({username})</a>
        </>
      ) }
        <Link to={'/login'}>Login</Link>
        <Link to={"/Register"}>Register</Link>
      </nav>
    </header>
  )
}

export default Header
