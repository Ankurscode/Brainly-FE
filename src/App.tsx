import Dashboard from "./pages/Dashboard"
import { SignIn } from "./pages/SignIn"
import { SignUp } from "./pages/SignUp"
import {BrowserRouter,Route,Routes,useNavigate} from "react-router-dom"
function App() {
  
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<SignUp/>}/>
    <Route path="/signIn" element={<SignIn/>}/>
    <Route path="/Dashboard" element={<Dashboard/>}/>
  </Routes>
  </BrowserRouter>
}

export default App
