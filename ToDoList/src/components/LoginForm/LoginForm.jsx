import { useState } from "react"
import "./LoginForm.css"

function LoginForm(){
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    
    function onEmailChangeHandler(event){
        setEmail(event.target.value)
    }
    function onPassChangeHandler(event){
        setPass(event.target.value)
    }

    function isEmailValid(email) {
        // Regex para validar o formato do email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isPasswordStrong(password) {
        // Regex para validar a força da senha
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
        return passwordRegex.test(password);
    }

    function isInpValid() {
        if (!isEmailValid(email)) {
            console.log("E-mail inválido.");
            return false;
        }
        if (!isPasswordStrong(pass)) {
            console.log("Senha fraca. Certifique-se de que a senha tenha pelo menos 6 caracteres, incluindo uma letra, um número e um símbolo.");
            return false;
        }
        return true;
    }

    function onSubmitHandler(event){
        event.preventDefault()
        if(isInpValid()){
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
                <input type="text" id="email" placeholder="Email" onChange={onEmailChangeHandler}/>
            </div>
            <div className="inpContainer">
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" placeholder="Senha" onChange={onPassChangeHandler}/>
            </div>
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm