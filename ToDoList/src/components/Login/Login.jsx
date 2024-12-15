import "./Login.css"
import LoginForm from "../LoginForm/LoginForm"

function Login(){
    const [errorMessage, setErrorMessage] = useState("");

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
            setErrorMessage("E-mail inválido.");
            return false;
        }
        if (!isPasswordStrong(senha)) {
            setErrorMessage(
                "Senha fraca. A senha deve ter pelo menos 6 caracteres, incluindo uma letra, um número e um símbolo."
            );
            return false;
        }
        setErrorMessage(""); // Limpa mensagem caso os inputs estejam válidos
        return true;
    }

    function onSubmitHandlerLogin(email, senha){
        if(isInpValid(email, senha)){
            console.log("Email: ", email)
            console.log("Senha: ", senha)
        }
        else{
            console.log('Campos inválidos.')
        }
    }
    
    return (
        <div className="login-container">
            <h1>Entre na Conta</h1>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <LoginForm onSubmitHandler={onSubmitHandlerLogin} />
        </div>
    );
}

export default Login