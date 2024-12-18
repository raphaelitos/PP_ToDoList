import { useState } from "react";
import { useNavigate } from "react-router";

import "./Login.css";
import LoginForm from "../../components/LoginForm/LoginForm";

/**
 * Componente de autenticação de usuários.
 *
 * @returns {JSX.Element} O elemento JSX que representa a página de login.
 */
function Login() {
    const [errorMessage, setErrorMessage] = useState("");
    const [users, setUsers] = useState([
        { email: "user@gmail.com", senha: "k@mi123" },
    ]);
    const navigate = useNavigate();

    /**
     * Verifica se as credenciais fornecidas (email e senha) correspondem a um usuário na lista de usuários.
     *
     * @param {string} email - O email fornecido pelo usuário.
     * @param {string} senha - A senha fornecida pelo usuário.
     * @returns {boolean} Retorna `true` se as credenciais forem válidas, caso contrário `false`.
     */
    function areCredentialsValid(email, senha) {
        const user = users.find(function(u) {
            return u.email === email && u.senha === senha;
        });
        return user !== undefined;
    }

    /**
     * Adiciona um novo usuário à lista de usuários registrados.
     *
     * @param {string} email - O email do novo usuário.
     * @param {string} senha - A senha do novo usuário.
     */
    function addUser(email, senha) {
        const novoUser = {
            email: email,
            senha: senha
        };
        setUsers([...users, novoUser]); 
    }

    /**
     * Lida com o envio do formulário de login.
     * Se as credenciais forem válidas, redireciona o usuário para a página "home".
     * Caso contrário, exibe uma mensagem de erro.
     *
     * @param {string} email - O email fornecido pelo formulário.
     * @param {string} senha - A senha fornecida pelo formulário.
     */
    function onSubmitHandlerLogin(email, senha) {
        if (areCredentialsValid(email, senha)) {
            setErrorMessage(""); // Limpa qualquer mensagem de erro
            console.log("Login bem-sucedido!");
            navigate("home");
        } else {
            setErrorMessage("Usuário ou senha inválidos."); 
        }
    }

    return (
        <div className="login-container">
            <h1>Entre na Conta</h1>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <LoginForm onSubmitHandler={onSubmitHandlerLogin} />
            <button 
                className="cadastrar" 
                onClick={() => navigate("/cadastro")}
            >
                Criar Conta
            </button>
        </div>
    );
}

export default Login;
