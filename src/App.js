import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Panel from './pages/Panel';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Panel/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
