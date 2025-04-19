import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Details />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;