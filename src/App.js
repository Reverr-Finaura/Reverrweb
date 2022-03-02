import "./App.css";
import LoginPage from "./Components/LoginPage/LoginPage";
import RegisterPage from "./Components/RegisterPage/RegisterPage";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import ConfirmationPage from "./Components/ForgotPassword/ConfirmationPage";
import ResetPassword from "./Components/ForgotPassword/ResetPassword";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      {" "}
      {/* <ProfileSel /> */}
     <RegisterPage />
       <LoginPage />
      <ForgotPassword />
      <ConfirmationPage /> 
      <ResetPassword /> 
    </div>
  );
}

export default App;
