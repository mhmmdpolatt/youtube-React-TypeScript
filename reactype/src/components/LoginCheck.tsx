import React from 'react'
import { useState } from 'react'

type UserType={
    name:string,
    last_name:string,
    phone:string
}
function LoginCheck() {
    const [user, setUser] = useState<UserType | null>(null)

    const handleLogin=()=>{
        setUser({
            name:"Muhammed",
            last_name:"Polat",
            phone:"0565648"
        })
    }

    const handleLogout=()=>{
        setUser({
           name:"",
           last_name:"",
           phone:""
        })
    }
  return (
    <div>
        <h1>Giriş</h1>
        <button onClick={handleLogin}>Giriş</button>
        <button onClick={handleLogout}>Çıkış</button>
        {user && <p>{user.name}</p>}
    </div>
  )
}

export default LoginCheck