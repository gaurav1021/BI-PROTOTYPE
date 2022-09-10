
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './compnent/navbar.jsx';
import Sectionone from './compnent/sectionone.jsx';
import Sectiontwo from './compnent/sectiontwo.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {
            <>
            <Navbar />
            <Sectionone />
            <Sectiontwo />
            </>
          }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
