import VerificationPage  from "./VerificationPage";

var email = "dsgio@gmail.com";

const EmailVerification = () => {
    return (
      <div className="App">
        <VerificationPage titleAlign="left" imageType="Email">
          <h2>Verify Your Email</h2>
          <p>A  5 - digit code has been sent to</p>
          <p><b>{email}</b> <a href="#">Change</a></p>
        </VerificationPage>
      </div>
    );
}

export default EmailVerification;
  