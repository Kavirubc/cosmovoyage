import logo from './logo.svg';
import './App.css';

import VerificationPage from './pages/VerificationPage';

function App() {
  return (
    <div className="App">
      <VerificationPage titleAlign="left" imageType="Mobile">
        <h2>Verify Your Email</h2>
        <p>A  5 - digit code has been sent to</p>
        <p><b>kksdasmaom@gmail.com</b> <a href="#">Change</a></p>
      </VerificationPage>
    </div>
  );
}

export default App;
