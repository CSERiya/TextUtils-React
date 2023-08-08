// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Abt from './pages/Abt';
import { Route, Routes } from 'react-router-dom';
function App() {

  return (
    <>
   
      <Routes>
        <Route path='/' element={<Home />} /> 
      < Route  path='/about' element={ <Abt/>  }/>
      </Routes>
     
    </>
  );
}

export default App;
