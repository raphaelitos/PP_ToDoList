import { useState } from "react";
import { useNavigate } from "react-router";

import "./Cadastro.css";

import LoginForm from "../../components/LoginForm/LoginForm";

/**
 * Componente de cadastro que utiliza o formulário de login para validar inputs e redirecionar o usuário.
 *
 * @returns {JSX.Element} O elemento JSX que representa a página de cadastro.
 */
function Cadastro() {
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    /**
     * Valida se o email fornecido está em um formato válido.
     * @param {string} email - O email a ser validado.
     * @returns {boolean} `true` se o email for válido, caso contrário `false`.
     */
    function isEmailValid(email) {
        // Regex para validar o formato do email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /**
     * Valida se a senha fornecida atende aos critérios de força.
     * A senha deve ter pelo menos 6 caracteres, incluindo uma letra, um número e um símbolo.
     * @param {string} password - A senha a ser validada.
     * @returns {boolean} `true` se a senha for forte, caso contrário `false`.
     */
    function isPasswordStrong(password) {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
        return passwordRegex.test(password);
    }

    /**
     * Valida os campos de email e senha.
     * Exibe mensagens de erro se os inputs forem inválidos.
     * Redireciona o usuário para `/home` caso os inputs sejam válidos.
     * @param {string} email - O email a ser validado.
     * @param {string} senha - A senha a ser validada.
     * @returns {boolean} `true` se os inputs forem válidos, caso contrário `false`.
     */
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

    /**
     * Manipula o envio do formulário de cadastro.
     * Valida os inputs e exibe mensagens no console.
     * @param {string} email - O email fornecido pelo usuário.
     * @param {string} senha - A senha fornecida pelo usuário.
     */
    function onSubmitHandlerCadastro(email, senha) {
        if (isInpValid(email, senha)) {
            console.log("Email: ", email);
            console.log("Senha: ", senha);
        } else {
            console.log("Campos inválidos.");
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
