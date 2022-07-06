import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import {Private} from './utility/Private'
const App = () => {
  const user = localStorage.getItem("user")
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={!user ? <Register/>:<Navigate to="/"/>}/>
        <Route path="/login" element={!user ? <Login/>:<Navigate to="/"/>}/>
        <Route path="/" element={<Private><Home/></Private>}/>
        <Route path="/profile/:id" element={<Private><Profile/></Private>}/>
      </Routes>
    </BrowserRouter>
    );
}

export default App;
