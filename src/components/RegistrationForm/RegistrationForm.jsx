import { useRef } from "react";
import "./RegistrationForm.css";

function RegistrationForm({ setLogin, setLogged }) {
    const myInput = useRef(null);
    function submitForm() {
        if (myInput.current.value.length === 0) return;
        localStorage.setItem("login", myInput.current.value);
        localStorage.setItem("isLogged", true);
        setLogin(myInput.current.value);
        setLogged(true);
    }

    return (
        <div className="registration">
            <div className="form">
                <p className="form__title">Регистрация</p>
                <label>
                    <div className="input-name__wrapper">
                        <input className="input-name" placeholder="Имя, никнейм" ref={myInput}></input>
                    </div>
                </label>
                <button className="submit-button" onClick={submitForm}>
                    Войти
                </button>
            </div>
            <p className="app-version">1 . 0 . 0</p>
        </div>
    );
}

export default RegistrationForm;
