import { useState } from "react";
import "./Login.css";
import LoginForm from "../LoginForm/LoginForm";

function Login() {
    const [errorMessage, setErrorMessage] = useState("");
    const [users, setUsers] = useState([
        { email: "user@gmail.com", senha: "k@mi123" },
    ]);

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
        setUsers([...users, novoUser]); // Adiciona nova tarefa ao estado
    }

    function onSubmitHandlerLogin(email, senha) {
        if (areCredentialsValid(email, senha)) {
            setErrorMessage(""); // Limpa qualquer mensagem de erro
            console.log("Login bem-sucedido!");
        } else {
            setErrorMessage("Usuário ou senha inválidos."); 
        }
    }

    return (
        <div className="login-container">
            <h1>Entre na Conta</h1>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <LoginForm onSubmitHandler={onSubmitHandlerLogin} />
            <button className="cadastrar">
                Criar Conta
            </button>
        </div>
    );
}

export default Login;
