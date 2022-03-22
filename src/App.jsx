import "./App.css";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import NavBar from "./components/NavBar/NavBar";

import { app } from "./FirebaseApp";
import { useState } from "react";

function App() {
    const [isLogged, setLogged] = useState(false);

    return <div className="app">{!isLogged ? <RegistrationForm isLogged={isLogged} /> : <NavBar />}</div>;
}

export default App;
