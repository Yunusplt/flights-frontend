import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Main } from "./pages/Main";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BookingPage from "./pages/BookingPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={ <Main />}/> 
          <Route path="BookingPage" element={ <BookingPage/>}/> 
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
