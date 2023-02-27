import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './components/User';
import Registered from './components/Registered';

function App() {

  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/loggedin' element={<User />}></Route>
          <Route path='/success' element={<Registered />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
