import Navbar from "./components/navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import WAcontact from "./components/WAcontact";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Catagories from "./components/pages/Catagories";
import Promo from "./components/pages/Promo";
import Testimony from "./components/pages/Testimony";

function App() {
  return (
    <>
   
    <Router>
    
    <WAcontact />
    <Header />
    <About />
    <Navbar />
    <Footer />

    <Switch>
      <Route path="/catagoties" element={<Catagories/>}></Route>
      <Route path="/promo" element={<Promo/>}></Route>
      <Route path="/testimony" element={<Testimony/>}></Route>
      </Switch>
      </Router>
      </>
  );
}

export default App;
