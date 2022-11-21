import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CreateNews from './pages/CreateNews';
import { PrivateRoute } from './routes/privateRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
            <Route path="/" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
            <Route path="/create" element={<PrivateRoute><CreateNews/></PrivateRoute>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
