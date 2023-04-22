import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='*' element={ <Home /> } />
          <Route path={'/about'} element={<About />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
