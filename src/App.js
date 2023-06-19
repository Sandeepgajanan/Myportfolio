import { Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './Page/Home';
import About from './Page/About';
import Project from './Page/Project';
import Contact from './Page/Contact';
function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/project' element={<Project/>}/>
    <Route path='/contact' element={<Contact/>}/>

   </Routes>
   </>
  );
}

export default App;
