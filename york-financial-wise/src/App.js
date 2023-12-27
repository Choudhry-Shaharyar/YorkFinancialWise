import logo from './logo.svg';
import './App.css';
import './scss/custom.scss';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Banking from './pages/Banking';
import Learning from './pages/Learning';
import YorkServices from './pages/YorkServices';
import About from './pages/About';
import NoPage from './pages/NoPage';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
         {/* index is default page */}
        <Route index element={ <Home />} />
        <Route path="/home" element={ <Home />} />
        <Route path="/about" element={ <About />} />
        <Route path="/banking" element={ <Banking />} />
        <Route path="/learning" element={ <Learning />} />
        <Route path="/services" element={ <YorkServices />} />
        <Route path="*" element={ <NoPage />} />

      </Routes>
    </BrowserRouter>


    // <div className="App">
    //    <Navbar/>
    //   <h2>ho</h2>
    // </div>
  );
}

export default App;
