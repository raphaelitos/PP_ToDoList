import { useState } from "react";
import "./LoginForm.css";

/**
 * Componente de formulário de login.
 *
 * @param {Object} props - As propriedades do componente.
 * @param {function} props.onSubmitHandler - Função chamada ao enviar o formulário.
 * Aceita dois parâmetros: `email` e `senha`.
 * 
 * @returns {JSX.Element} O elemento JSX que representa o formulário de login.
 */
function LoginForm(props) {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    /**
     * Manipulador de eventos para mudanças no campo de email.
     * @param {React.ChangeEvent<HTMLInputElement>} event - Evento de alteração no input.
     */
    function onEmailChangeHandler(event) {
        setEmail(event.target.value);
    }

    /**
     * Manipulador de eventos para mudanças no campo de senha.
     * @param {React.ChangeEvent<HTMLInputElement>} event - Evento de alteração no input.
     */
    function onPassChangeHandler(event) {
        setPass(event.target.value);
    }

    /**
     * Manipulador de eventos para o envio do formulário.
     * @param {React.FormEvent<HTMLFormElement>} event - Evento de envio do formulário.
     */
    function onFormSubmit(event) {
        event.preventDefault(); // Previne o comportamento padrão do formulário
        props.onSubmitHandler(email, pass); // Chama a função vinda por props
    }

    return (
        <form className="lgForm-container" onSubmit={onFormSubmit}>
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
