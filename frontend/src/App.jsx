import "./App.css";
import { UserContextProvider } from "./context/UserContext";
// import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import CreatePage from "./pages/Createpage";
import Post from "./components/Post";
import Editpage from "./pages/Editpage";
import Login from "./pages/Loginpage";
import Register from "./pages/Registerpage";
import Indexpage from "./pages/Indexpage";
import Postpage from "./pages/Postpage";
function App() {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Indexpage />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="create" element={<CreatePage />} />
            <Route path="post/:id" element={<Post />} />
            <Route path="edit/:id" element={<Editpage />} />
            <Route path="Postpage" element={<Postpage/>}/>
          </Route>
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;
