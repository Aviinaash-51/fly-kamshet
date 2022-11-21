import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


const Header = () => {
    const [menuActive, setMenuActive] = useState(false);
   

    const handleMenuActive = (event) => {
        setMenuActive(!menuActive);
        if(menuActive){
            event.currentTarget.classList.add('mobile-menu');
        }
         
         
        // event.currentTarget.classList.add('mobile-menu-visible');
      };
     
    
   
  return (
    <>
     <header className="main-header">           
            {/* <!-- header-lower --> */}
           <div className="header-lower">
            <div className="auto-container">
            <div className="outer-box">
                <div className="logo-box">
                    <figure className="logo"><a href="/home"><img src="assets/images/kamlogo.jpg" alt="kamshet-logo" /></a>
                    </figure>
                </div>
                <div className="menu-area clearfix" >
                    {/* <!--Mobile Navigation Toggler--> */}
                    <div className="mobile-nav-toggler" onClick={handleMenuActive} >
                        <i className="icon-bar"></i>
                        <i className="icon-bar"></i>
                        <i className="icon-bar"></i>
                    </div>
                    <nav className="main-menu navbar-expand-md navbar-light">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix home-menu">
                                <li className="dropdown"><Link to="/">Home</Link>
                                </li>
                                <li className="dropdown"><Link to="/packages">Packages</Link>                                           
                                </li>                                   
                                <li className="dropdown"><Link to="/gallery">Gallery</Link>                                           
                                </li>
                                <li className="dropdown"><Link to="/blog">Blog</Link>
                                </li>
                                <li className="dropdown"><Link to="/about">About</Link>
                                </li>                               
                                <li className="dropdown"><Link to="/contact">Contact</Link>
                                </li>                                       
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="btn-box">
                 <a href="tel:+919970680380" className="theme-btn theme-btn-one"> Call Now: +91 9970680380</a>
                </div>
            </div>
            </div>
           </div>

           {/* <!--sticky Header--> */}
          <div className="sticky-header">
            <div className="auto-container">
            <div className="outer-box">
                <div className="logo-box">
                    <figure className="logo"><a href="index.html"><img src="assets/images/kamlogo.jpg" alt="kamshet-logo" /></a>
                    </figure>
                </div>
                <div className="menu-area clearfix">
                    <nav className="main-menu clearfix">
                        {/* <!--Keep This Empty / Menu will come through Javascript--> */}
                    </nav>
                </div>                      
                <div className="btn-box">
                 <a href="tel:8830964374" className="theme-btn theme-btn-one"> Call Now: +91 8830964374</a>
                </div>
            </div>
           </div>
           </div>
     </header>
            
    </>
  )
}

export default Header;

//  how to make mobile hamburger menu in react js using functional components ?





