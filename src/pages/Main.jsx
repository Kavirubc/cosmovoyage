import React from "react";

// import components
import NavBar from "../components/molecules/NavBar";

// Middlewares
import Auth from "../middlewares/Auth";

Auth();

const App = () => {
    return (
        <div className="App">
            <googleLoginButton />
            <NavBar />
        </div>
    );
}

export default App;