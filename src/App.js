import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthProvider from "./context/AuthProvider";
import Admin from "./pages/Admin";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
