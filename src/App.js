import logo from './logo.svg';
import './App.css';

import VerificationPage from './pages/VerificationPage';
import EmailVerification from './pages/EmailVerification';
import MobileVerification from './pages/MobileVerification';
import SeatBooking from './pages/SeatBooking';

function App() {
  return (
    <div className="App">
      <MobileVerification />
      <SeatBooking />

    </div>
  );
}
export default App;
