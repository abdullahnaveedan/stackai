import Dashboard from "./Components/Dashboard"
import SignUp from './Components/Accounts/SignUp'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Login from './Components/Accounts/Login'
import Forgotpassword from './Components/Accounts/Forgopassword'
import Otp from './Components/Accounts/Otp'
import Resetpassword from './Components/Accounts/Resetpassword'
import CreateProject from "./Components/CreateProject"
import DeploymentTab from "./Components/DeploymentTab"
import Catagory from "./Components/Catagory"
import ChatBot from "./Components/ChatBot"
import ManageBots from "./Components/MangeBots"
import Protect from "./Components/ProtectRoute/Protect"
import SavedBots from "./Components/SavedBots"
import RunBot from "./Components/SaveBot/RunBot"


function App() {
  const handleComplete = (otp) => {
    console.log("Completed OTP:", otp);
  };

  return (
    <Router>
    <Routes>
      <Route path='/' element={ <Login/>}/>
      <Route path='/Dashboard' element={<Protect> <Dashboard/></Protect>}/>
      <Route path='/CreateProject' element={ <Protect><CreateProject/></Protect>}/>
      <Route path='/DeploymentTab' element={<Protect><DeploymentTab/></Protect>}/>
      <Route path='/SignUp' element={ <SignUp/>}/>
      <Route path='/forgot-password' element={ <Forgotpassword/>}/>
      <Route path='/otp' element={ <Otp length={6} onComplete={handleComplete} />}/>
      <Route path='/reset-password' element={ <Resetpassword/>}/>
      <Route path='/Generate-Bot' element={<Protect><Catagory/></Protect> }/>
      <Route path='/chatbot' element={<Protect> <ChatBot/></Protect>}/>
      <Route path='/ManageBot' element={ <Protect> <ManageBots/></Protect> }/>
      <Route path='/allbots' element={ <Protect> <SavedBots/></Protect> }/>
      <Route path='/Testing-bot' element={ <Protect> <RunBot/></Protect> }/>
      

      
    </Routes>
  </Router>
  )
}

export default App
