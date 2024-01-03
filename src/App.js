import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Video from './Video';
import Login from './Login';
import Register from './Register';
import Pages from './Pages';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
        <Route path="/Pages" element={<Pages />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<MainApp />} />
          {/* Other routes */}
        </Routes>
      </div>
    </Router>
  );
}

function MainApp() {
  return (
    <div className='app_page'>
      <Sidebar />
      <Video />
    </div>
  );
}

export default App;
