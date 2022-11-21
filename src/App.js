import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Panel from './pages/Panel';
import { PrivateRoute } from './routes/privateRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
            <Route path="/" element={<PrivateRoute><Panel/></PrivateRoute>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
