import { React } from "react";
import { useNavigate } from "react-router-dom";

// import components
import NavBar from "../components/molecules/NavBar";

// Middlewares
import Auth from "../middlewares/Auth";

const App = () => {

    const navigate = useNavigate();

    let auth_token = Auth(navigate);

    return (
        <div className="App">
            <googleLoginButton />
            <NavBar />
        </div>
    );
}

export default App;