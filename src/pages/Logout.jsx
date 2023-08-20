import { useNavigate } from "react-router-dom";

export default function Logout() {

    const navigate = useNavigate();

    localStorage.removeItem("remember");
    localStorage.removeItem(process.env.REACT_APP_AUTH_TOKEN_NAME);
    sessionStorage.removeItem(process.env.REACT_APP_AUTH_TOKEN_NAME);

    console.log("Logging out...");

    setTimeout(() => {
        return navigate("/login");
    }, "3000");

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div
                style={{ borderTopColor: "transparent" }}
                className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"
            />
            <p className="ml-2">Logging out...</p>
        </div>

    );
}