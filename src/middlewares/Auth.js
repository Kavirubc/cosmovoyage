
import { useEffect } from "react";

// Utilities
import { decryptData } from '../utils/CryptoJS';

const Auth = (navigate) => {

    const decryptToken = (decrypt_token) => {
        return decrypt_token;
    }
    
    useEffect(() => {
        // code to run after render goes here

        let remember = localStorage.getItem("remember");

        if (remember == null) {

            navigate("/login", { replace: true });
        } else {

            if (remember === "true" || remember === true) {

                let token = localStorage.getItem(process.env.REACT_APP_AUTH_TOKEN_NAME);

                if (token == null) {
                    navigate("/login", { replace: true });
                } else {

                    let decrypt_token = decryptData(token);
                    // Check fo rthe validity of the tocken
                    decryptToken(decrypt_token);
                }
            } else if (remember === "false" || remember === false) {

                let token = sessionStorage.getItem(process.env.REACT_APP_AUTH_TOKEN_NAME);

                if (token == null) {
                    navigate("/login", { replace: true });
                } else {

                    let decrypt_token = decryptData(token);
                    // Check fo rthe validity of the tocken
                    decryptToken(decrypt_token);
                }
            } else {

                navigate("/login", { replace: true });
            }
        }
    }, []);
};

export default Auth;