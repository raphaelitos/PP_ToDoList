import { useState } from "react";
import { useNavigate } from "react-router";

import "./Cadastro.css";

import LoginForm from "../../components/LoginForm/LoginForm" 

function Cadastro() {
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

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
        navigate("/home");
        return true;
    }

    function onSubmitHandlerCadastro(email, senha){
        if(isInpValid(email, senha)){
            console.log("Email: ", email)
            console.log("Senha: ", senha)
        }
        else{
            console.log('Campos inválidos.')
        }
    }

    return (
        <div className="cadastro-container">
            <h1>Cadastre-se</h1>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <LoginForm onSubmitHandler={onSubmitHandlerCadastro} />
        </div>
    );
}

export default Cadastro;
