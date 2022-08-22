import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/nav/Header';
import Home from './pages/Home';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
