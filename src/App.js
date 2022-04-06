import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieList from "./components/MovieList.js";
import MovieDetail from "./components/MovieDetail";
import NotFound404 from "./components/NotFound404.js";
import "./App.scss";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
