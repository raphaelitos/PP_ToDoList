import { useState } from "react"
import "./LoginForm.css"

function LoginForm(testInput){
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    
    function onEmailChangeHandler(event){
        setEmail(event.target.value)
    }
    function onPassChangeHandler(event){
        setPass(event.target.value)
    }

    function onSubmitHandler(event){
        event.preventDefault()
        if(testInput(email, pass)){
            console.log("Email: ", email)
            console.log("Senha: ", pass)
        }
        else{
            console.log('Campos inválidos.')
        }
    }

    return(
        <form className="container" onSubmit={onSubmitHandler}>
            <div className="inpContainer">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder="Seu email" onChange={onEmailChangeHandler}/>
            </div>
            <div className="inpContainer">
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" placeholder="Sua senha" onChange={onPassChangeHandler}/>
            </div>
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm