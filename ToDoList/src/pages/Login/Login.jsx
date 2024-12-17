import { useState } from "react";
import { useNavigate } from "react-router";

import "./Login.css";

import LoginForm from "../../components/LoginForm/LoginForm";

function Login() {
    const [errorMessage, setErrorMessage] = useState("");
    const [users, setUsers] = useState([
        { email: "user@gmail.com", senha: "k@mi123" },
    ]);
    const navigate = useNavigate();

    // Função para verificar se o email e a senha existem na lista de usuários
    function areCredentialsValid(email, senha) {
        const user = users.find(function(u) {
            return u.email === email && u.senha === senha;
        });
        return user !== undefined;
    }

    function addUser(email, senha) {
        const novoUser = {
            email: email,
            senha: senha
        };
        setUsers([...users, novoUser]); 
    }

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
