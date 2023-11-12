
import './App.css';
import Navbar from './Components/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './Components/SignUp';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>

          <Route path="/" element={<><Navbar/></>}/>
          <Route path="/login" element={<><Login/></>}/>
          <Route path="/signup" element={<><SignUp/></>}/>



     </Routes>
     
     </BrowserRouter>
    </div>
  );
}

export default App;
