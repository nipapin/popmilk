import "./App.css";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import NavBar from "./components/NavBar/NavBar";
import List from "./components/List/List";

import { app } from "./FirebaseApp";
import { useState } from "react";

function App() {
    const [isLogged, setLogged] = useState(localStorage.getItem("isLogged"));
    const [login, setLogin] = useState(localStorage.getItem("login"));
    return (
        <div className="app">
            {!isLogged ? (
                <RegistrationForm setLogged={setLogged} setLogin={setLogin} />
            ) : (
                <>
                    <NavBar login={login} />
                    <List />
                </>
            )}
        </div>
    );
}

export default App;
