import "./Cadastro.css"
import "../LoginForm/LoginForm"
import LoginForm from "../LoginForm/LoginForm"

function Cadastro(){
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

    function isInpValid(email, senha) {
        if (!isEmailValid(email)) {
            console.log("E-mail inválido.");
            return false;
        }
        if (!isPasswordStrong(senha)) {
            console.log("Senha fraca. A senha deve ter pelo menos 6 caracteres, incluindo uma letra, um número e um símbolo.");
            return false;
        }
        return true;
    }
    
    return (
        <div className="cadastro-container">
            <h1>Cadastre-se</h1>
            <LoginForm testInput={isInpValid} />
        </div>
    )
}

export default Cadastro