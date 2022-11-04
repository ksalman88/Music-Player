import './App.css';
import Home from './components/Home';
import Login from './components/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Addmusic from './components/addmusic';
import BrowseMusic from './components/BrowseMusic';

function App() {

  return <BrowserRouter>
    <Navbar />
    <Routes>
      
      <Route element={<Home></Home>} path="home" />
      <Route element={<Login></Login>} path="login" />
      <Route element={<Signup ></Signup>} path="signup" />
      <Route element={<Addmusic></Addmusic>} path="Addmusic" />
      <Route element={<BrowseMusic></BrowseMusic>} path="BrowseMusic" />
      

    </Routes>
  </BrowserRouter>

}

export default App;