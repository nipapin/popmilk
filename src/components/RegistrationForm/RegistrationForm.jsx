import "./RegistrationForm.css";

function RegistrationForm({isLogged}) {

    function submitForm(){

    }

    return (
        <div className="registration">
            <div className="form">
                <p className="form__title">Регистрация</p>
                <label>
                    <div className="input-name__wrapper">
                        <input className="input-name" placeholder="Имя, никнейм"></input>
                    </div>
                </label>
                <button className="submit-button" onClick={submitForm}>
                    Войти
                </button>
            </div>
        </div>
    );
}

export default RegistrationForm;
