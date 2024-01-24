interface Props{
    password: string
}


export function PasswordChecker(props: Props){
    
    let text = '';
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
    
    
    return <p style={{color: textColor}}>
        {text}
    </p>

    

}