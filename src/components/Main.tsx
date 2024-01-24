import { useState } from "react"
import { PasswordChecker } from "./PasswordChecker"

export default function Main(){

    const[ password,setPassword] = useState('')
    console.log(password)

    return <main>
    
    <label>
        Add meg a jelszót:
        <input type="password" onInput={e=> setPassword(e.currentTarget.value)} />
    </label>
    <p>A jelszava aktuális hossza: {password.length}</p>
    <PasswordChecker password={password}/>

    </main>
}