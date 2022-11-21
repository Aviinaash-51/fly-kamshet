
import React from 'react';
import { useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import { Button, Row, Col, Modal, ModalBody, ModalHeader, ModalTitle } from 'react-bootstrap';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
// import { NavLink } from 'react-router-dom';
import AddForm from '../components/AddForm';
import {  NavLink } from 'react-router-dom';

// import Modal from '../components/Modal';
// import { useCountUp } from 'react-countup';


const Home = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const options = {
        loop: true,
        margin: 30,
        nav: true,
        smartSpeed: 500,
        autoplay: 1000,
        navText: ['<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            600: {
                items: 2
            },
            800: {
                items: 2
            },
            1024: {
                items: 3
            }
        }
    }
    const banner = {
        loop: true,
        margin: 0,
        nav: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        active: true,
        smartSpeed: 1000,
        autoplay: 6000,
        navText: ['<span></span>', '<span></span>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            800: {
                items: 1
            },
            1024: {
                items: 1
            }
        }
    }
    const testi = {
        loop: true,
        margin: 30,
        nav: true,
        smartSpeed: 500,
        autoplay: 1000,
        navText: ['<span class="icon-4"></span>', '<span class="icon-4"></span>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            600: {
                items: 1
            },
            800: {
                items: 2
            },
            1024: {
                items: 2
            }
        }
    }
    // const CompleteHook = () => {
    //     const countUpRef = React.useRef(null);
    //     const { start, pauseResume, reset, update } = useCountUp({
    //       ref: countUpRef,
    //       start: 0,
    //       end: 1234567
    //     });
    return (

        <>

            <div className="mouse-pointer" id="mouse-pointer">
                <div className="icon"><i className="far fa-angle-left"></i><i className="far fa-angle-right"></i></div>
            </div>
            <section className="slider-one centred p_relative">
                <OwlCarousel className="banner-carousel  owl-carousel owl-dots-none" {...banner}>
                    <div className="slide-item p_relative pt_140 pb_170">
                        <div className="shape-layer">
                            <div className="shape-1 p_absolute l_0 z_1" style={{ backgroundImage: 'url(assets/images/shape/shape-2.png)' }}></div>
                            <div className="shape-2 p_absolute l_0 t_0 z_1" style={{ backgroundImage: 'url(assets/images/shape/shape-3.png)' }}></div>
                            <div className="shape-3 p_absolute r_0 b_0 z_1" style={{ backgroundImage: 'url(assets/images/shape/shape-4.png)' }}></div>
                            <div className="shape-4 p_absolute r_0 b_0 z_1" style={{ backgroundImage: 'url(assets/images/shape/shape-5.png)' }}></div>
                        </div>
                        <div className="image-layer p_absolute" style={{ backgroundImage: 'url(assets/images/banner/bhn.jpg)' }}></div>
                        <div className="auto-container">
                            <div className="content-box p_relative d_block z_5">
                                <h2 className="p_relative d_iblock fw_bold fs_50 lh_50 mb_20 ffa"><span>Be Part Of Our Flying Adeventure</span><br /> <span>Welcome to The Skies.</span></h2>
                                <p className="d_block fs_18 mb_35">The best Tandem Paraglider pilots are here. Our job is to get you airborne with utmost safety.<br />we’ll be glad to help with all aspects of paragliding.</p>
                                <div className="btn-box clearfix">
                                    <Button className="theme-btn theme-btn-two" onClick={handleShow}><span data-text="Book A Ride">Book A Ride</span></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide-item p_relative pt_140 pb_170">
                        <div className="shape-layer">
                            <div className="shape-1 p_absolute l_0 z_1" style={{ backgroundImage: 'url(assets/images/shape/shape-2.png)' }}></div>
                            <div className="shape-2 p_absolute l_0 t_0 z_1" style={{ backgroundImage: 'url(assets/images/shape/shape-3.png)' }}></div>
                            <div className="shape-3 p_absolute r_0 b_0 z_1" style={{ backgroundImage: 'url(assets/images/shape/shape-4.png)' }}></div>
                            <div className="shape-4 p_absolute r_0 b_0 z_1" style={{ backgroundImage: 'url(assets/images/shape/shape-5.png)' }}></div>
                        </div>
                        <div className="image-layer p_absolute" style={{ backgroundImage: 'url(assets/images/banner/bhn2.jpg)' }}></div>
                        <div className="auto-container">
                            <div className="content-box p_relative d_block z_5">
                                <h2 className="p_relative d_iblock fw_bold fs_50 lh_50 mb_20 ffa"><span>Be Part Of Our Flying Adeventure</span><br /> <span>Welcome to The Skies.</span></h2>
                                <p className="d_block fs_18 mb_35">The best Tandem Paraglider pilots are here. Our job is to get you airborne with utmost safety.<br />we’ll be glad to help with all aspects of paragliding.</p>
                                <div className="btn-box clearfix">
                                    <a href="index.html" className="theme-btn theme-btn-two"><span data-text="Book A Ride">Book A Ride</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </section>

            {/* <!-- banner-section end -->       
         <!-- packages section start --> */}
            <section className="pricing-three p_relative pt_45 pb_45">
                <div className="auto-container">
                    <div className="sec-title p_relative d_block mb_35 text-center z_1">
                        <span className="sub-title p_relative d_iblock fs_25 fw_medium g_color mb_8">Our Packages</span>
                        <h2 className="p_relative d_block fs_30  mb_25 ffa">Choose Our Best Packages</h2>
                    </div>
                    <OwlCarousel className="three-item-carousel owl-carousel owl-theme owl-dots-none " {...options}>
                        <div className="pricing-block-one owl-pad">
                            <div className="pricing-table p_relative d_block pt_45 b_radius_10" style={{ padding: 30 }}>
                                <div className="table-header p_relative d_block mb_15">
                                    <h6 className="d_block fs_16 lh_20 fw_medium g_color mb_11">Joy Tandem</h6>
                                    <h2 className="d_block fs_40 lh_50 fw_bold mb_0">Rs.3000 <span className="fs_17">/ person</span></h2>
                                    <p className="fs_16 tj">This basic ride is designed for beginner who just want to soar in the sky. Simply sit it back and enjoy the ride like never before.</p>
                                </div>
                                <div className="table-content p_relative d_block p_relative pt_25 pr_30 pl_30 pb_25 b_radius_10 mb_40">
                                    <ul className="feature-list clearfix">
                                        <li className="p_relative d_block fs_16 lh_25 pl_25 mb_12">10-12 min</li>
                                        <li className="p_relative d_block fs_16 lh_25 pl_25 mb_12">Pilot controls</li>
                                        <li className="p_relative d_block fs_16 lh_25 pl_25">Basic flying</li>
                                    </ul>
                                </div>
                                <div className="table-footer">
                                <Button className="theme-btn theme-btn-one" onClick={handleShow}>Book Now<i className="icon-4"></i></Button>
                                </div>
                            </div>
                        </div>
                        <div className="pricing-block-one owl-pad">
                            <div className="pricing-table p_relative d_block pt_45 b_radius_10" style={{ padding: 30 }}>
                                <div className="table-header p_relative d_block mb_30">
                                    <h6 className="d_block fs_16 lh_20 fw_medium g_color mb_11">Instructional Tandem</h6>
                                    <h2 className="d_block fs_40 lh_50 fw_bold mb_0">Rs.3950 <span className="fs_17">/ person</span></h2>
                                    <p className="fs_16 tj">You have the control while flying. Pilot will instruct you and take care of safety. You can taste the flying on your own</p>
                                </div>
                                <div
                                    className="table-content p_relative d_block p_relative pt_25 pr_30 pl_30 pb_10 b_radius_10 mb_40">
                                    <ul className="feature-list clearfix">
                                        <li className="p_relative d_block fs_16 lh_25 pl_25 mb_12">10 -15 min</li>
                                        <li className="p_relative d_block fs_16 lh_25 pl_25 mb_12">You controls*</li>
                                        <li className="p_relative d_block fs_16 lh_25 pl_25"> Basic flying</li>
                                    </ul>
                                </div>
                                <div className="table-footer">
                                    <Button className="theme-btn theme-btn-one" onClick={handleShow}>Book Now<i className="icon-4"></i></Button>
                                </div>
                            </div>
                        </div>
                        <div className="pricing-block-one owl-pad">
                            <div className="pricing-table p_relative d_block pt_45 b_radius_10" style={{ padding: 30 }}>
                                <div className="table-header p_relative d_block mb_27">
                                    <h6 className="d_block fs_16 lh_20 fw_medium g_color mb_11">Acro Tandem</h6>
                                    <h2 className="d_block fs_40 lh_50 fw_bold mb_0">Rs.4500 <span className="fs_17">/ person</span></h2>
                                    <p className="fs_16 tj">This is extremely adrenaline rush ride. Only highly experienced pilots can takes you to this ride</p>
                                </div>
                                <div
                                    className="table-content p_relative d_block p_relative pt_25 pr_30 pl_30 pb_14 b_radius_10 mb_40">
                                    <ul className="feature-list clearfix">
                                        <li className="p_relative d_block fs_16 lh_25 pl_25 mb_12">15 - 20 min</li>
                                        <li className="p_relative d_block fs_16 lh_25 pl_25 mb_12">Pilot controls</li>
                                        <li className="p_relative d_block fs_16 lh_25 pl_25">Spiral, SAT, Wing Over, Ridge Dancing</li>
                                    </ul>
                                </div>
                                <div className="table-footer">
                                <Button className="theme-btn theme-btn-one" onClick={handleShow}>Book Now<i className="icon-4"></i></Button>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </section>
            {/* <!-- packages section end -->
         
        
            {/* <!-- cta-seven end -->     */ }
            <section className="about-nine p_relative pt_60 pb_60 respt">
                <div className="auto-container">
                    <div className="row align-items-center clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column desk-about">
                            <div className="image_block_nine">
                                <div className="image-box p_relative d_block mr_50">
                                    <figure className="image p_absolute l_0 wow slideInDown animated" data-wow-delay="00ms" data-wow-duration="1500ms"><img src="assets/images/banner/abb.jpg" className="img-ali" alt="" /></figure>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column res-about">
                            <div className="content_block_nine">
                                <div className="content-box p_relative d_block ml_30">
                                    <div className="sec-title p_relative d_block mb_10 rescen">
                                        <span className="sub-title p_relative d_iblock fs_25 fw_medium g_color mb_10 abp">About Us</span>
                                        <h2 className="p_relative d_block fs_30 mb_0 ffa">We Offer one of the best Paragliding Experiences at Kamshet</h2>
                                    </div>
                                    <div className="text p_relative d_block mb_35 resjus">
                                        <p className="font_family_oxygen mb_12">We are an experienced team of passionate paragliding pilots based out of Kamshet, near Pune. The entire team is certified and licensed. We continually keep our skills upgraded and validated. Some of our personal solo flying and training videos are available below.</p>
                                        <p className="font_family_oxygen">Rest assured we take our skill levels seriously which directly translates into safety of our guests. The equipment we use is all certified. Between the pilots, we have licences/ratings from British Hanggliding and Paragliding Association, Paragliding Association of India, APPI, etc </p>
                                    </div>
                                    <div className="btn-box rescen">
                                        <NavLink to="/about" className="theme-btn theme-btn-one">Explore More<i className="icon-4"></i></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column mob-about">
                            <div className="image_block_nine">
                                <div className="image-box p_relative d_block mr_50">
                                    <div className="shape parallax-scene parallax-scene-1">
                                        <div data-depth="0.40" className="shape-1 p_absolute" style={{ backgroundImage: 'url(assets/images/shape/shape-66.png)' }}></div>
                                        <div data-depth="0.50" className="shape-2 p_absolute l_0" style={{ backgroundImage: 'url(assets/images/shape/shape-66.png)' }}></div>
                                        <div data-depth="0.40" className="shape-3 p_absolute l_0" style={{ backgroundImage: 'url(assets/images/shape/shape-122.png' }}></div>
                                    </div>
                                    <figure className="image p_absolute l_0 wow slideInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms"><img src="assets/images/banner/abb.jpg" alt="" /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- about-18 end -->       */}
            <section className="project-nine project-page-6 p_relative team-two pt_45
            pb_30">
                <div className="outer-container pl_40 pr_40">
                    <div className="sortable-masonry">
                        <div className="sec-title p_relative d_block mb_35 text-center z_1">
                            <span className="sub-title p_relative d_iblock fs_15 fw_medium g_color mb_19">Our Gallery</span>
                            <h2 className="p_relative d_block fs_40 fw_bold mb_30 twhite ffa">Let's have a look on our Customer <br /> Experiences</h2>
                        </div>
                        <div className="items-container row clearfix">
                            <div className="col-lg-3 col-md-6 col-sm-12 masonry-item small-column all product finance business">
                                <div className="project-block-one">
                                    <div className="inner-box p_relative d_block b_radius_5 mb_35">
                                        <figure className="image-box"><img src="assets/images/project/31.jpg" alt="" /></figure>
                                        <div className="content-box p_absolute l_0 d_block pl_30 pr_30 pb_30">
                                            <div className="shape p_absolute l_0 b_0" style={{ backgroundImage: 'url(assets/images/shape/shape-47.png)', height: 130 }}></div>
                                            <h4 className="d_block fs_20 lh_30 font_family_oxygen"><a href="packages.html">Fly-Kamshet</a></h4>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 masonry-item small-column all analytis business corporate">
                                <div className="project-block-one">
                                    <div className="inner-box p_relative d_block b_radius_5 mb_35">
                                        <figure className="image-box"><img src="assets/images/project/41.jpg" alt="" /></figure>
                                        <div className="content-box p_absolute l_0 d_block pl_30 pr_30 pb_30">
                                            <div className="shape p_absolute l_0 b_0" style={{ backgroundImage: 'url(assets/images/shape/shape-47.png)', height: 130 }}></div>
                                            <h4 className="d_block fs_20 lh_30 font_family_oxygen"><a href="packages.html">Fly-Kamshet</a></h4>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 masonry-item small-column all product finance corporate">
                                <div className="project-block-one">
                                    <div className="inner-box p_relative d_block b_radius_5 mb_35">
                                        <figure className="image-box"><img src="assets/images/project/32.jpg" alt="" /></figure>
                                        <div className="content-box p_absolute l_0 d_block pl_30 pr_30 pb_30">
                                            <div className="shape p_absolute l_0 b_0" style={{ backgroundImage: 'url(assets/images/shape/shape-47.png)', height: 130 }}></div>
                                            <h4 className="d_block fs_20 lh_30 font_family_oxygen"><a href="packages.html">Fly-Kamshet</a></h4>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 masonry-item small-column all analytis finance business">
                                <div className="project-block-one">
                                    <div className="inner-box p_relative d_block b_radius_5 mb_35" >
                                        <figure className="image-box"><img src="assets/images/project/33.jpg" alt="" /></figure>
                                        <div className="content-box p_absolute l_0 d_block pl_30 pr_30 pb_30">
                                            <div className="shape p_absolute l_0 b_0" style={{ backgroundImage: 'url(assets/images/shape/shape-47.png)', height: 130 }}></div>
                                            <h4 className="d_block fs_20 lh_30 font_family_oxygen"><a href="packages.html">Fly-Kamshet</a></h4>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 masonry-item small-column all business finance corporate">
                                <div className="project-block-one">
                                    <div className="inner-box p_relative d_block b_radius_5 mb_35">
                                        <figure className="image-box"><img src="assets/images/project/34.jpg" alt="" /></figure>
                                        <div className="content-box p_absolute l_0 d_block pl_30 pr_30 pb_30">
                                            <div className="shape p_absolute l_0 b_0" style={{ backgroundImage: 'url(assets/images/shape/shape-47.png)', height: 130 }}></div>
                                            <h4 className="d_block fs_20 lh_30 font_family_oxygen"><a href="packages.html">Fly-Kamshet</a></h4>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 masonry-item small-column all analytis business corporate">
                                <div className="project-block-one">
                                    <div className="inner-box p_relative d_block b_radius_5 mb_35">
                                        <figure className="image-box"><img src="assets/images/project/42.jpg" alt="" /></figure>
                                        <div className="content-box p_absolute l_0 d_block pl_30 pr_30 pb_30">
                                            <div className="shape p_absolute l_0 b_0" style={{ backgroundImage: 'url(assets/images/shape/shape-47.png)', height: 130 }}></div>
                                            <h4 className="d_block fs_20 lh_30 font_family_oxygen"><a href="packages.html">Fly-Kamshet</a></h4>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 masonry-item small-column all business finance corporate">
                                <div className="project-block-one">
                                    <div className="inner-box p_relative d_block b_radius_5 mb_35">
                                        <figure className="image-box"><img src="assets/images/project/35.jpg" alt="" /></figure>
                                        <div className="content-box p_absolute l_0 d_block pl_30 pr_30 pb_30">
                                            <div className="shape p_absolute l_0 b_0" style={{ backgroundImage: 'url(assets/images/shape/shape-47.png)', height: 130 }}></div>
                                            <h4 className="d_block fs_20 lh_30 font_family_oxygen"><a href="packages.html">Fly-Kamshet</a></h4>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 masonry-item small-column all analytis business corporate">
                                <div className="project-block-one">
                                    <div className="inner-box p_relative d_block b_radius_5 mb_35">
                                        <figure className="image-box"><img src="assets/images/project/36.jpg" alt="" /></figure>
                                        <div className="content-box p_absolute l_0 d_block pl_30 pr_30 pb_30">
                                            <div className="shape p_absolute l_0 b_0" style={{ backgroundImage: 'url(assets/images/shape/shape-47.png)', height: 130 }}></div>
                                            <h4 className="d_block fs_20 lh_30 font_family_oxygen"><a href="packages.html">Fly-Kamshet</a></h4>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 masonry-item small-column all product finance business">
                                <div className="project-block-one">
                                    <div className="inner-box p_relative d_block b_radius_5 mb_35">
                                        <figure className="image-box"><img src="assets/images/project/43.jpg" alt="" /></figure>
                                        <div className="content-box p_absolute l_0 d_block pl_30 pr_30 pb_30">
                                            <div className="shape p_absolute l_0 b_0" style={{ backgroundImage: 'url(assets/images/shape/shape-47.png)', height: 130 }}></div>
                                            <h4 className="d_block fs_20 lh_30 font_family_oxygen"><a href="packages.html">Fly-Kamshet</a></h4>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 masonry-item small-column all analytis business corporate">
                                <div className="project-block-one">
                                    <div className="inner-box p_relative d_block b_radius_5 mb_35">
                                        <figure className="image-box"><img src="assets/images/project/44.jpg" alt="" /></figure>
                                        <div className="content-box p_absolute l_0 d_block pl_30 pr_30 pb_30">
                                            <div className="shape p_absolute l_0 b_0" style={{ backgroundImage: 'url(assets/images/shape/shape-47.png)', height: 130 }}></div>
                                            <h4 className="d_block fs_20 lh_30 font_family_oxygen"><a href="packages.html">Fly-Kamshet</a></h4>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 masonry-item small-column all product finance corporate">
                                <div className="project-block-one">
                                    <div className="inner-box p_relative d_block b_radius_5 mb_35">
                                        <figure className="image-box"><img src="assets/images/project/37.jpg" alt="" /></figure>
                                        <div className="content-box p_absolute l_0 d_block pl_30 pr_30 pb_30">
                                            <div className="shape p_absolute l_0 b_0" style={{ backgroundImage: 'url(assets/images/shape/shape-47.png)', height: 130 }}></div>
                                            <h4 className="d_block fs_20 lh_30 font_family_oxygen"><a href="packages.html">Fly-Kamshet</a></h4>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 masonry-item small-column all analytis finance business">
                                <div className="project-block-one">
                                    <div className="inner-box p_relative d_block b_radius_5 mb_35">
                                        <figure className="image-box"><img src="assets/images/project/38.jpg" alt="" /></figure>
                                        <div className="content-box p_absolute l_0 d_block pl_30 pr_30 pb_30">
                                            <div className="shape p_absolute l_0 b_0" style={{ backgroundImage: 'url(assets/images/shape/shape-47.png)', height: 130 }}></div>
                                            <h4 className="d_block fs_20 lh_30 font_family_oxygen"><a href="packages.html">Fly-Kamshet</a></h4>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- project-two end -->
         <!-- testimonial-five --> */}
            <section className="testimonial-five p_relative pb_60 pt_60 restes">
                <div className="shape parallax-scene parallax-scene-2">
                    <div data-depth="0.50" className="shape-1 p_absolute" style={{ backgroundImage: 'url(assets/images/shape/shape-66.png)' }}></div>
                </div>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12 title-column">
                            <div className="sec-title p_relative d_block mb_35 z_1 rescen">
                                <span className="sub-title p_relative d_iblock fs_25 fw_medium g_color mb_19 restil">Testimonials</span>
                                <h2 className="p_relative d_block fs_40 fw_bold mb_30 ffa resmb">Trusted by More Than 3k Clients.</h2>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 inner-column">
                            <div className="inner-content p_relative d_block ml_60">
                                <OwlCarousel className="two-column-carousel owl-carousel  owl-dots-none nav-style-one overflow_visible" {...testi}>
                                    <div className="testimonial-block-one">
                                        <div className="inner-box p_relative d_block b_radius_10 pt_35 pr_30 pb_40 pl_40">
                                            <div className="text p_relative d_block mb_25">
                                                <ul className="rating clearfix p_relative d_block mb_15">
                                                    <li className="p_relative d_iblock pull-left fs_16 mr_5"><i className="icon-20"></i></li>
                                                    <li className="p_relative d_iblock pull-left fs_16 mr_5"><i className="icon-20"></i></li>
                                                    <li className="p_relative d_iblock pull-left fs_16 mr_5"><i className="icon-20"></i></li>
                                                    <li className="p_relative d_iblock pull-left fs_16 mr_5"><i className="icon-20"></i></li>
                                                    <li className="p_relative d_iblock pull-left fs_16"><i className="icon-20"></i></li>
                                                </ul>
                                                <p className="font_family_oxygen">Pankaj is one of the most talented pilot. He is experienced and sensible. He does paragliding for his passion towards flying High which is what makes flying with him even more wonderful.</p>
                                            </div>
                                            <div className="author p_relative d_block pl_90 pt_7 pb_11">
                                                <figure className="thumb-box p_absolute l_0 t_0 w_70 h_70 b_radius_50"><img src="assets/images/resource/shivam.png" alt="" /></figure>
                                                <h4 className="d_block fs_20 lh_30 mb_2">Shivam Soni</h4>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-block-one">
                                        <div className="inner-box p_relative d_block b_radius_10 pt_35 pr_30 pb_40 pl_40">
                                            <div className="text p_relative d_block mb_25">
                                                <ul className="rating clearfix p_relative d_block mb_15">
                                                    <li className="p_relative d_iblock pull-left fs_16 mr_5"><i className="icon-20"></i></li>
                                                    <li className="p_relative d_iblock pull-left fs_16 mr_5"><i className="icon-20"></i></li>
                                                    <li className="p_relative d_iblock pull-left fs_16 mr_5"><i className="icon-20"></i></li>
                                                    <li className="p_relative d_iblock pull-left fs_16 mr_5"><i className="icon-20"></i></li>
                                                    <li className="p_relative d_iblock pull-left fs_16"><i className="icon-20"></i></li>
                                                </ul>
                                                <p className="font_family_oxygen">It was an amazing experience 😍🤩 flying on Sky via Paragliding for the first time where Pankaj did very good stunts (Acro Tandem) on Sky and he was very kind and experienced person among all the riders in Kamshet. Must experience this once in life time atleast.</p>
                                            </div>
                                            <div className="author p_relative d_block pl_90 pt_7 pb_11">
                                                <figure className="thumb-box p_absolute l_0 t_0 w_70 h_70 b_radius_50"><img src="assets/images/resource/ankita.png" alt="" /></figure>
                                                <h4 className="d_block fs_20 lh_30 mb_2">Aditi roude</h4>
                                                <span className="designation p_relative d_block fs_16 lh_20">Customer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-block-one">
                                        <div className="inner-box p_relative d_block b_radius_10 pt_35 pr_30 pb_40 pl_40">
                                            <div className="text p_relative d_block mb_25">
                                                <ul className="rating clearfix p_relative d_block mb_15">
                                                    <li className="p_relative d_iblock pull-left fs_16 mr_5"><i className="icon-20"></i></li>
                                                    <li className="p_relative d_iblock pull-left fs_16 mr_5"><i className="icon-20"></i></li>
                                                    <li className="p_relative d_iblock pull-left fs_16 mr_5"><i className="icon-20"></i></li>
                                                    <li className="p_relative d_iblock pull-left fs_16 mr_5"><i className="icon-20"></i></li>
                                                    <li className="p_relative d_iblock pull-left fs_16"><i className="icon-20"></i></li>
                                                </ul>
                                                <p className="font_family_oxygen">Amazing and exciting experience of paragliding. Shyam - my pilot is one of the most experienced pilot in the crew. He took me to the hill, flying on the top he asked if I am satisfied or want to explore more.This 15 minute ride is the most memorable moments of my life. Thanks flykamshet for making it happen.</p>
                                            </div>
                                            <div className="author p_relative d_block pl_90 pt_7 pb_11">
                                                <figure className="thumb-box p_absolute l_0 t_0 w_70 h_70 b_radius_50"><img src="assets/images/resource/navin.png" alt="" /></figure>
                                                <h4 className="d_block fs_20 lh_30 mb_2">Navin Tiwari</h4>

                                            </div>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- testimonial-five -->
          <!-- funfact-one --> */}
            <section className="funfact-one pt_90 pb_80 text-center p_relative">
                <div className="shape parallax-scene parallax-scene-5">
                    <div data-depth="0.50" className="shape-1 p_absolute"
                        style={{ backgroundImage: 'url(assets/images/shape/shape-21.png)' }}></div>
                    <div data-depth="0.30" className="shape-2 p_absolute"
                        style={{ backgroundImage: 'url(assets/images/shape/shape-22.png)' }}></div>
                </div>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                            <div className="counter-block-one wow slideInUp animated" data-wow-delay="00ms"
                                data-wow-duration="1500ms">
                                <div className="inner-box p_relative d_block">
                                    <CountUp start={0} end={10} duration={1.75} delay={0} suffix="K" className="count-outer count-box p_relative d_block fs_70 lh_70 g_color fw_bold mb_17">
                                    </CountUp>
                                    <p className="p_relative d_block fs_16 lh_20 fw_medium color_white">Successful Rides</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                            <div className="counter-block-one wow slideInUp animated" data-wow-delay="200ms"
                                data-wow-duration="1500ms">
                                <div className="inner-box p_relative d_block">
                                    <CountUp start={0} end={15} duration={1.75} delay={0} suffix="K" className="count-outer count-box p_relative d_block fs_70 lh_70 g_color fw_bold mb_17">
                                    </CountUp>
                                    <p className="p_relative d_block fs_16 lh_20 fw_medium color_white">Satisfied Customers</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                            <div className="counter-block-one wow slideInUp animated" data-wow-delay="400ms"
                                data-wow-duration="1500ms">
                                <div className="inner-box p_relative d_block">
                                    <CountUp start={0} end={5} duration={1.75} delay={0} className="count-outer count-box p_relative d_block fs_70 lh_70 g_color fw_bold mb_17">
                                    </CountUp>
                                    <p className="p_relative d_block fs_16 lh_20 fw_medium color_white">Experienced Pilots</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                            <div className="counter-block-one wow slideInUp animated" data-wow-delay="600ms"
                                data-wow-duration="1500ms">
                                <div className="inner-box p_relative d_block">
                                    <CountUp start={0} end={10} duration={1.75} delay={0} className="count-outer count-box p_relative d_block fs_70 lh_70 g_color fw_bold mb_17">
                                    </CountUp>
                                    <p className="p_relative d_block fs_16 lh_20 fw_medium color_white">Locations</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- funfact-one end -->   
         <!-- contact-four --> */}
            <section className="contact-four p_relative pt_45 pb_45">
                <div className="shape">
                    <div className="shape-1 p_absolute l_0 t_0" style={{ backgroundImage: 'url(assets/images/shape/shape-210.png)' }}></div>
                    <div className="shape-2 p_absolute b_0 r_150" style={{ backgroundImage: 'url(assets/images/shape/shape-211.png)' }}></div>
                </div>
                <div className="auto-container">
                    <div className="sec-title p_relative d_block mb_35 text-center z_1">
                        <span className="sub-title p_relative d_iblock fs_25 fw_medium g_color">Get In Touch</span>
                        <h2 className="p_relative d_block fs_30  mb_25 ffa">Want to Have a Ride?  Let’s Contact</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12 info-column">
                            <div className="info-inner">
                                <ul className="info-list clearfix">
                                    <li className="p_relative d_block pl_100 pb_18 mb_25">
                                        <div className="icon-box p_absolute l_0 t_0 d_iblock w_80 h_80 lh_80 b_radius_50 text-center fs_45 z_1 mb_25 tran_5">
                                            <div className="icon p_relative d_iblock"><i className="icon-180"></i></div>
                                            <div className="icon-img hidden-icon"><img src="assets/images/icons/hid-icon-133.png" alt="" /></div>
                                        </div>
                                        <h4 className="d_block fs_20 lh_30 fw_sbold mb_7">Office Location</h4>
                                        <p className="font_family_poppins">Kamshet, Old Mumbai Pune Highway</p>
                                    </li>
                                    <li className="p_relative d_block pl_100 pb_18 mb_25">
                                        <div className="icon-box p_absolute l_0 t_0 d_iblock w_80 h_80 lh_80 b_radius_50 text-center fs_45 z_1 mb_25 tran_5">
                                            <div className="icon p_relative d_iblock"><i className="icon-181"></i></div>
                                            <div className="icon-img hidden-icon"><img src="assets/images/icons/hid-icon-134.png" alt="" /></div>
                                        </div>
                                        <h4 className="d_block fs_20 lh_30 fw_sbold mb_7">Company Email</h4>
                                        <p className="font_family_poppins"><a href="mailto:flykamshet@gmail.com">flykamshet@gmail.com</a></p>
                                    </li>
                                    <li className="p_relative d_block pl_100 pb_18">
                                        <div className="icon-box p_absolute l_0 t_0 d_iblock w_80 h_80 lh_80 b_radius_50 text-center fs_45 z_1 mb_25 tran_5">
                                            <div className="icon p_relative d_iblock"><i className="icon-182"></i></div>
                                            <div className="icon-img hidden-icon"><img src="assets/images/icons/hid-icon-135.png" alt="" /></div>
                                        </div>
                                        <h4 className="d_block fs_20 lh_30 fw_sbold mb_7">Contact Us</h4>
                                        <p className="font_family_poppins"><a href="tel:+918830964374">+91 88309 64374</a><br /><a href="tel:+919970680380">+91 99706 80380</a></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 form-column">
                            <div className="form-inner p_relative ml_40 pt_45 pr_50 pb_50 pl_50 b_radius_10 b_shadow_6" style={{ boxShadow: 'rgb(0 0 0 / 35%) 0px 5px 15px' }}>
                                <div className="text p_relative d_block mb_35">
                                    <h3 className="d_block fs_30 lh_40 fw_bold ">Send a Message</h3>
                                </div>
                                <form method="post" action="contact.php" id="contact-form">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="username" placeholder="Your Name" required="" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="email" name="email" placeholder="Email Address" required="" />
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                                            <input type="text" name="phone" required="" placeholder="Phone Number" />
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                                            <input type="text" name="subject" required="" placeholder="Date" />
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                            <button className="theme-btn theme-btn-one" type="submit" name="submit-form">Send Message <i className="icon-4"></i></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- contact-four end --> */}

            <section className="faq-page-section faq-page-3 p_relative pt_45 pb_45 bg">
                <div className="auto-container">
                    <div className="sec-title p_relative d_block mb_35 text-center z_1">
                        <span className="sub-title p_relative d_iblock fs_25 fw_medium g_color">FAQ's</span>
                        <h2 className="p_relative d_block fs_30 mb_30 ffa">Frequently Asked Questions.</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 faq-column">
                            <div className="faq-content">
                                <div className="content_block_five">
                                    <div className="content-box p_relative d_block">
                                        <Accordion className='accmain'>
                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton className='accstyle'>
                                                        HOW SAFE IS IT?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>
                                                        The pilots are very experienced and certified. The equipment is certified. However paragliding is an adventure sports and has its inherent risks.
                                                    </p>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton className='accstyle'>
                                                        WHY DOES IT SOUND EXPENSIVE?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>
                                                        It is an expensive sport. All equipment is imported. Equipment degrades fast in harsh Indian conditions and have to be frequently replaced. Remember, safety cannot be compromised.
                                                    </p>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton className='accstyle'>
                                                        IS IT FOR EVERYONE?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>
                                                        If you are between 10 and 70 years of age, weigh between 40 and 95 kg, can walk and do mild jogging and do not have any medical condition then it is for you.
                                                    </p>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 faq-column">
                            <div className="faq-content">
                                <div className="content_block_five">
                                    <div className="content-box p_relative d_block">
                                        <Accordion className='accmain'>
                                            <AccordionItem  >
                                                <AccordionItemHeading>
                                                    <AccordionItemButton className='accstyle'>
                                                        WHAT IF I HAVE A MEDICAL CONDITION?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>
                                                        If you have epilepsy, fits or a heart issue it is recommended that you check with your doctor. Better safe than sorry.
                                                    </p>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                            <AccordionItem >
                                                <AccordionItemHeading>
                                                    <AccordionItemButton className='accstyle'>
                                                        HOW MUCH DOES A TANDEM RIDE COST?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>
                                                        INR 2500 for a 10 minute ride, enough to get a feel of the sport. 4000 for a 20 minute cross country ride, to explore the surroundings. 5000 for in-flight aerobatics for the adrenaline junkie in you. +700 for photos/videos for facebook. +500 in the weekends as surge pricing.
                                                    </p>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                            <AccordionItem >
                                                <AccordionItemHeading>
                                                    <AccordionItemButton className='accstyle'>
                                                        WHAT SHOULD I BRING ALONG?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>
                                                        Shoes. Sun protection. Hydration. Hard cash.
                                                    </p>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Modal size='lg' show={show} onHide={handleClose}>
                <ModalHeader closeButton>
                    <ModalTitle>
                        flykamshet Paragliding
                    </ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <Row>
                        <Col md={6} className='modmar'>
                            <img src="assets/images/banner/modd.jpg" alt="d1" className="moali" />
                        </Col>
                        <Col md={6} className='rescen'>
                        <AddForm />
                        </Col>
                    </Row>
                    
                </ModalBody>

            </Modal>
            


        </>
    )
}

export default Home;