import React from 'react'
import SignUp from './Components/SignUp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Components/Login'
import Forgotpassword from './Components/Forgopassword'
import Otp from './Components/Otp'
import Resetpassword from './Components/Resetpassword'
import ExportBuilder from "./Components/ExportBuilder"

function App() {
  const handleComplete = (otp) => {
    console.log("Completed OTP:", otp);
  };
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgot-password' element={<Forgotpassword />} />
          <Route path='/otp' element={<Otp length={6} onComplete={handleComplete} />} />
          <Route path='/reset-password' element={<Resetpassword />} />
          <Route path="/exportbuilder" element={<ExportBuilder />} />

        </Routes>
      </Router>

    </div>
  )
}

export default App