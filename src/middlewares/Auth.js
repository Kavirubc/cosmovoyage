
import { useEffect } from "react";

// Utilities
import { decryptData } from '../utils/CryptoJS';

const Auth = (navigate) => {

    useEffect(() => {
        // code to run after render goes here

        let remember = localStorage.getItem("remember");

        if (remember == null) {

            return navigate("/login", { replace: true });
        } else {

            if (remember === "true" || remember === true) {

                let token = localStorage.getItem(process.env.REACT_APP_AUTH_TOKEN_NAME);

                if (token == null) {
                    return navigate("/login", { replace: true });
                } else {

                    let decrypt_token = decryptData(token);
                    // Check fo rthe validity of the tocken
                    return decrypt_token;
                }
            } else if (remember === "false" || remember === false) {

                let token = sessionStorage.getItem(process.env.REACT_APP_AUTH_TOKEN_NAME);

                if (token == null) {
                    return navigate("/login", { replace: true });
                } else {

                    let decrypt_token = decryptData(token);
                    // Check fo rthe validity of the tocken
                    return decrypt_token;
                }
            } else {

                return navigate("/login", { replace: true });
            }

        }

    }, []);
};

export default Auth;