import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Catalogo from './components/Catalogo';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Catalogo' element={<Catalogo />} />
          <Route path='*' element={<Navigate to={'/'} replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
