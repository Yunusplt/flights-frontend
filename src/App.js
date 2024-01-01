import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Main } from "./pages/Main";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BookingPage from "./pages/BookingPage";
import Success from "./pages/Success";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={ <Main />}/> 
          <Route path="BookingPage" element={ <BookingPage/>}/> 
          <Route path="success" element={ <Success/>}/> 
          <Route path="error" element={ <Error/>}/> 
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
