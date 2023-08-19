import VerificationPage from "./VerificationPage";
import "../App.css";
import NavBar from "../components/molecules/NavBar";

var phone = "+9470 444 4444";

const MobileVerification = () => {
  return (
    <div className="mobile-container">
      <VerificationPage titleAlign="left" imageType="Mobile">
        <h2>Verify Your Mobile</h2>
        <p>A  5 - digit code has been sent to</p>
        <p><b>{phone}</b> <a href="/">Change</a></p>
      </VerificationPage>
      <NavBar />
    </div>
  );
}

export default MobileVerification;
