import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
      <>
        {/* <!-- footer-three --> */}
<footer className=" footer-13 footer-five p_relative">          
    <div className=" shape pattern-layer">
        <div className="shape-2 p_absolute l_0 t_75" style={{backgroundImage: 'url(assets/images/icons/cloud-1.png)'}}></div>
        <div className="shape-3 p_absolute" style={{backgroundImage: 'url(assets/images/icons/cloud-1.png)'}}></div>
        <div className="pattern-1 p_absolute l_120 b_0" data-parallax='{"x": 100}' style={{backgroundImage: 'url(assets/images/shape/shape-84.png)'}}></div>
        <div className="pattern-2 p_absolute r_0 t_0" data-parallax='{"x": 100}' style={{backgroundImage: 'url(assets/images/shape/shape-85.png)'}}></div>
        
    </div>
    <div className="auto-container">
        <div className="footer-widget-section">
            <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                    <div className="footer-widget about-widget wow fadeInUp animated" data-wow-delay="00ms"
                    data-wow-duration="1500ms">
                    <figure className="footer-logo p_relative d_block " style={{marginTop: '-43px'}}><a href="index.html"><img src="assets/images/flylogo.png"className="mb_18" alt="kamshet-logo" /></a>
                    </figure>
                        <div className="text">
                            <p className="font_family_poppins fs_17 tj">We are an experienced team of passionate paragliding pilots based out of Kamshet, near Pune. The entire team is certified and licensed. We continually keep our skills upgraded and validated. Some of our personal solo flying and training videos are available below.</p>
                        </div>                               
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                    <div className="footer-widget links-widget ml_80 wow fadeInUp animated" data-wow-delay="00ms"
                    data-wow-duration="1500ms">
                        <div className="widget-title">
                            <h4>Links</h4>
                        </div>
                        <div className="widget-content">
                            <ul className="links-list clearfix">
                                <li><NavLink to={"/"} exact >Home</NavLink></li>
                                <li><NavLink to={"/about"} >About Us</NavLink></li>
                                <li><NavLink  to={"/packages"}>Packages</NavLink></li>
                                <li><NavLink to={"/gallery"} >Gallery</NavLink></li>
                                <li><NavLink to={"/blog"} >Blog</NavLink></li>
                                <li><NavLink to={"/contact"}>Contact Us</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                    <div className="footer-widget links-widget wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div className="widget-title">
                            <h4>Social-media</h4>
                        </div>
                        <div className="widget-content">
                            <ul className="footer-social-two clearfix">
                            <li><a href="https://www.facebook.com/flykamshet" target="_blank" rel="noopener noreferrer"  className="mr_10 mb_13"><i className="fab fa-facebook-f"></i></a>Facebook</li>
                            <li><a href="https://www.instagram.com/flykamshet_paragliding/" target="_blank" rel="noopener noreferrer" className="mr_10 mb_13"><i className="fab fa-instagram" ></i></a>Instagram</li>
                            <li><a href="https://in.pinterest.com/flykamshet/" target="_blank" rel="noopener noreferrer"  className="mr_10 mb_13"><i className="fab fa-pinterest-p"></i></a>Pinterest</li>
                            <li><a href="https://www.youtube.com/channel/UCFPf2TdtiDGiy_j3F-iRPcw" target="_blank" rel="noopener noreferrer" className="mr_10 mb_13"><i className="fab fa-youtube" ></i></a>Youtube</li>                                  
                        </ul>
                        </div>
                    </div>
                </div>                       
                <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                    <div className="footer-widget contact-widget wow fadeInUp animated" data-wow-delay="00ms"
                    data-wow-duration="1500ms">
                        <div className="widget-title">
                            <h4>Contacts</h4>
                        </div>
                        <div className="widget-content">
                            <ul className="info-list clearfix">
                                <li>Kamshet, Old Mumbai Pune Highway</li>
                                <li><a href="tel:+918830964374">+91 88309 64374</a></li>
                                <li><a href="mailto:flykamshet@gmail.com">flykamshet@gmail.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="footer-bottom">
        <div className="auto-container">
            <div className="bottom-inner">
                <div className="copyright centred">
                    <p><a href="index.html">Fly-Kamshet Paragliding</a> &copy; 2022 All Right Reserved</p>
                </div>
            </div>
        </div>
    </div>
</footer>
{/* <!-- footer-three end --> */}
      
      </>
  )
}

export default Footer;