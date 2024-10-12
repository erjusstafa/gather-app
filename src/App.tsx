import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './componets/Login';
import Register from './componets/Register';
import Main from './componets/Main';
import { AuthProvider } from './context';

function App() {

  return (
    <AuthProvider>
    <div className='main-container'>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

{/*           <Route path="*" element={<Navigate to="/login" />} />
 */}        </Routes>
      </Router>
    </div>
    </AuthProvider>
  )
}

export default App
