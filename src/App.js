import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import { Main } from "./components/Main";


function App() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App;
