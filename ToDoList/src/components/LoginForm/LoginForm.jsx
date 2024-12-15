import { useState } from "react";
import "./LoginForm.css";

function LoginForm(props) {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    function onEmailChangeHandler(event) {
        setEmail(event.target.value);
    }

    function onPassChangeHandler(event) {
        setPass(event.target.value);
    }

    function onFormSubmit(event) {
        event.preventDefault(); // Previne o comportamento padrão do formulário
        props.onSubmitHandler(email, pass); // Chama a função vinda por props
    }

    return (
        <form className="container" onSubmit={onFormSubmit}>
            <div className="inpContainer">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    placeholder="Seu email"
                    onChange={onEmailChangeHandler}
                />
            </div>
            <div className="inpContainer">
                <label htmlFor="password">Senha</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Sua senha"
                    onChange={onPassChangeHandler}
                />
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
}

export default LoginForm;
