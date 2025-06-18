import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Homepage } from './Pages/Homepage';
import { Login } from './Pages/Login';
import { BlogsPage } from './Pages/BlogsPage';
import { Signup } from './Pages/Signup'; 
import Footer from './Components/footer';
import Headers from './Components/header';
import { Setting } from './Components/setting';
import {authStore} from './Store/auth';

function App() {
  const { isAuth } = authStore();

  return (
    <div>
      <Headers />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blogs" element={isAuth ? <BlogsPage /> : <Navigate to="/login" />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
