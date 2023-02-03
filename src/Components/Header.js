import React from 'react'
import { useNavigate } from 'react-router-dom';
function Header() {
    const navigate=useNavigate()
    const handlelogout=()=>{
        localStorage.removeItem("token");
        navigate('/login')
    }
    return (
        <header>
            <nav>
                <h2>Logo</h2>
                <button onClick={handlelogout} className='logoutbtn'>Logout</button>
            </nav>
        </header>
    )
}

export default Header