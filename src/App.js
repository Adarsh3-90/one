
import {BrowserRouter,Route,Routes} from "react-router-dom" 
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";   
import Footer from "./components/Footer" ;
 
import Services from "./components/Services" ;
       

import "./styles/App.scss";
import "./styles/colors.scss";
import "./styles/header.scss";
import "./styles/contact.scss";
import "./styles/mediaquery.scss";



function App() {
  return (
<BrowserRouter>
  <Header/>
  <Routes>
    <Route  path="/" element={<Home/>}/>
    <Route  path="/contact" element={<Contact/>}/>
    <Route  path="/services" element={<Services/>}/>
  </Routes>
  <Footer/>
</BrowserRouter>
  );
}

export default App;
