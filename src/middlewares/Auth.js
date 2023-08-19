import { redirect } from "react-router-dom";

// Utilities
import { decryptData } from '../utils/CryptoJS';

const Auth = () => {

    let remember = localStorage.getItem("remember");

    if (remember === null) {

        return redirect("/login");
    } else {

        if (remember===true) {

            let token = localStorage.getItem(process.env.REACT_APP_AUTH_TOKEN_NAME);

            if (token === null) {
                return redirect("/login");
            } else {

                let decrypt_token = decryptData(token);
                // Check fo rthe validity of the tocken
            }
        } else if (remember === false) {

            let token = sessionStorage.getItem(process.env.REACT_APP_AUTH_TOKEN_NAME);

            if (token === null) {
                return redirect("/login");
            } else {

                let decrypt_token = decryptData(token);
                // Check fo rthe validity of the tocken
            }
        } else {

            return redirect("/login");
        }

    }

};

export default Auth;