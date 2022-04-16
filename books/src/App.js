import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AddBooks from "./containers/AddBooks";
import SearchBooks from "./containers/SearchBooks";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<AddBooks />} />
        <Route path="/search" element={<SearchBooks />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
