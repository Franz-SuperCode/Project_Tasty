import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from './pages/loading/Loading'
import Landing from './pages/landing/Landing'
import Home from './pages/home/Home'
import Detail from './pages/detail/Detail'
import Search from './pages/search/Search'
import Favorites from './pages/Favorites';
import Profil from './pages/Profil';



function App() {
  return (
    <div>
      <Router>
        <Routes>

          <Route path="/" element={<Loading />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/home" element={<Home />} />

          <Route path="/details/:id" element={<Detail />} />
          <Route path="/search/:type&:value" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/profile" element={<Profil />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
