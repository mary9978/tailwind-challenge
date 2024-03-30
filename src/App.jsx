import './App.css'
import {  Route,Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
function App() {
  return (
  
      <div className="container xl:max-w-screen-xl"> 
      <Toaster/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
       </div> 

  );
}

export default App
