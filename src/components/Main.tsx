import { useState } from "react"
import { PasswordChecker } from "./PasswordChecker"

export default function Main(){

    const[ password,setPassword] = useState('')
    const [password2,setPassword2] = useState('');
    console.log(password)

    return <main>
    
    <label>
        Add meg a jelszót:
        <input type="password" onInput={e=> setPassword(e.currentTarget.value)} />
    </label>
    <br/>
    <label>
        Add meg megint a jelszót:
        <input type="password" onInput={e=> setPassword2(e.currentTarget.value)} />
    </label>
    <p>A jelszava aktuális hossza: {password.length}</p>
    <PasswordChecker 
    password={password} 
    passwordAgain={password2}/>

    </main>
}