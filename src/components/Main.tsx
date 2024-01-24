import { useState } from "react"

export default function Main(){

    const[ password,setPassword] = useState('')

    return <main>
    
    <label>
        Add meg a jelszót:
        <input type="password" />
    </label>

    </main>
}