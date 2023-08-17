import logo from './logo.svg';
import './App.css';

import VerificationPage from './pages/VerificationPage';
import EmailVerification from './pages/EmailVerification';
import MobileVerification from './pages/MobileVerification';

function App() {
  return (
    <div className="App">
      <MobileVerification />
    </div>
  );
}

export default App;
