interface Props{
    /**
    * Az ellenőrizendő jelszó
    */
    password: string
    passwordAgain: string
}


/**
 * Ellenőrzi hogy a megadott jelszó milyen erős,
 * és ezt formázva megjelentíti.
 */

export function PasswordChecker(props: Props){
    
    let text = '';
    let text2 = ''
    let textColor ='';
    
    
    
    if(props.password.length<8){
        text = 'Gyenge jelszó';
        textColor = 'red';
    } else if(/^[a-z]+$/i.test(props.password)){
        text ='Közepes jelszó';
        textColor ='orange';
    }else{
        text = 'Erős jelszó';
        textColor='green';
    }

    if(props.password != props.passwordAgain){
        textColor ='red';
        text2 += 'A két jelszó nem egyezik!';
    }
    
    
    return <p style={{color: textColor}}>
        {text}
        {text2==''? null : <br/>}
        {text2}
        
    </p>

    

}