import './App.css';
import LoginPage from './Components/LoginPage/LoginPage';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import ConfirmationPage from './Components/ForgotPassword/ConfirmationPage';
import ResetPassword from './Components/ForgotPassword/ResetPassword';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return ( <div className = "App" >
        {/* <RegisterPage /> */}
        {/* <LoginPage /> */}
        {/* <ProfileSel /> */}
        {/* <ForgotPassword /> */}
        {/* <ConfirmationPage /> */}
        <ResetPassword />
        </div>
    );
}

export default App;