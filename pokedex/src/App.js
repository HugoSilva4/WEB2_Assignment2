import "./App.css";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <div className="App"></div>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={ <Navbar/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
