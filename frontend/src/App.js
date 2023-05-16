import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Navbar from './component/Header/Navbar';
import CardDetail from './component/card/CardDetail';
import Youtube from './component/card/Youtube.js';
import Login from './pages/Login';
import Register from './pages/Register';
import store from './redux/store'
import { LoadUser } from './redux/actions/userAction';
import ApplyPage from './pages/ApplyPage';

function App() {

  store.dispatch(LoadUser())

  return (
    <>
      <Router>
        <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/search/location/:location" element={<Jobs />} />
      <Route path="/search/cat/:cat" element={<Jobs />} />
      <Route path="/job/:id" element={<CardDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/search/:keyword" element={<Jobs />} />
      <Route path="/apply" element={<ApplyPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/youtube" element={<Youtube />} />
      </Routes>
    
      </Router>
    </>
  );
}

export default App;
