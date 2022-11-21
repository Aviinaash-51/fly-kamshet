
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Packages from "./pages/Packages";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import { BrowserRouter,  Routes, Route} from 'react-router-dom';

import Whatsapp from "./components/Whatsapp";


function App() {
  return (
    <>
   
     <div className="boxed_wrapper">
       <BrowserRouter>
        <Header />              
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="packages" element={<Packages />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="blog" element={<Blog />} />
        <Route path="About" element={<About />} />
        <Route path="contact" element={<Contact />} />          
        </Routes>
        
        <Footer />
        <Whatsapp />
        
       
        </BrowserRouter>
     </div>
    </>
  );
}

export default App;
