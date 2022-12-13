import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from './pages/loading/Loading'
import Landing from './pages/landing/Landing'
import Home from './pages/home/Home'

// import Detail from './pages/detail/Detail'
import Search from './pages/search/Search'



function App() {
  return (
    <div>
      <Router>
        <Routes>

          <Route path="/loading" element={<Loading />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/" element={<Home />} />

          <Route path="/details/:id" element={<Detail />} />
          <Route path="/search" element={<Search />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
