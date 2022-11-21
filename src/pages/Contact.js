import React from 'react'
import { NavLink } from 'react-router-dom';

const Contact = () => {
    return (
        <>
            <div>
                <section className="page-title about-page-3 p_relative centred">
                    <div className="bg-layer p_absolute l_0 parallax_none parallax-bg" data-parallax="{&quot;y&quot;: 100}" style={{ backgroundImage: 'url(assets/images-new/2.jpg)' }} />
                    <div className="auto-container">
                        <div className="content-box">
                            <h1 className="d_block fs_60 lh_70 fw_bold mb_10">Contact</h1>
                            <ul className="bread-crumb p_relative d_block mb_8 clearfix">
                                <li className="p_relative d_iblock fs_16 lh_25 fw_sbold font_family_inter mr_20"><NavLink to="/" >Home</NavLink></li>
                                <li className="current p_relative d_iblock fs_16 lh_25 fw_sbold font_family_inter">Contact</li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/* End Page Title */}
                {/* contact-four */}
                <section className="contact-four p_relative pt_45 mb_45">
                    <div className="shape">
                        <div className="shape-1 p_absolute l_0 t_0" style={{ backgroundImage: 'url(assets/images/shape/shape-210.png)' }} />
                        <div className="shape-2 p_absolute b_0 r_150" style={{ backgroundImage: 'url(assets/images/shape/shape-211.png)' }} />
                    </div>
                    <div className="auto-container">
                        <div className="sec-title p_relative d_block mb_35 text-center z_1">
                            <span className="sub-title p_relative d_iblock fs_25 fw_medium g_color mb_5">Get In Touch</span>
                            <h2 className="p_relative d_block fs_30 mb_30">Want to Have a Ride? <br />Let’s Contact</h2>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-12 col-sm-12 info-column">
                                <div className="info-inner">
                                    <ul className="info-list clearfix">
                                        <li className="p_relative d_block pl_100 pb_18 mb_25">
                                            <div className="icon-box p_absolute l_0 t_0 d_iblock w_80 h_80 lh_80 b_radius_50 text-center fs_45 z_1 mb_25 tran_5">
                                                <div className="icon p_relative d_iblock"><i className="icon-180" /></div>
                                                <div className="icon-img hidden-icon"><img src="assets/images/icons/hid-icon-133.png" alt="icon" /></div>
                                            </div>
                                            <h4 className="d_block fs_20 lh_30 fw_sbold mb_7">Office Location</h4>
                                            <p className="font_family_poppins">Kamshet, Old Mumbai Pune Highway</p>
                                        </li>
                                        <li className="p_relative d_block pl_100 pb_18 mb_25">
                                            <div className="icon-box p_absolute l_0 t_0 d_iblock w_80 h_80 lh_80 b_radius_50 text-center fs_45 z_1 mb_25 tran_5">
                                                <div className="icon p_relative d_iblock"><i className="icon-181" /></div>
                                                <div className="icon-img hidden-icon"><img src="assets/images/icons/hid-icon-134.png"alt="icon" /></div>
                                            </div>
                                            <h4 className="d_block fs_20 lh_30 fw_sbold mb_7">Company Email</h4>
                                            <p className="font_family_poppins"><a href="mailto:flykamshet@gmail.com">flykamshet@gmail.com</a>
                                            </p></li>
                                        <li className="p_relative d_block pl_100 pb_18">
                                            <div className="icon-box p_absolute l_0 t_0 d_iblock w_80 h_80 lh_80 b_radius_50 text-center fs_45 z_1 mb_25 tran_5">
                                                <div className="icon p_relative d_iblock"><i className="icon-182" /></div>
                                                <div className="icon-img hidden-icon"><img src="assets/images/icons/hid-icon-135.png" alt="icon" /></div>
                                            </div>
                                            <h4 className="d_block fs_20 lh_30 fw_sbold mb_7">Contact Us</h4>
                                            <p className="font_family_poppins"><a href="tel:+919970680380"><strong> +91 9970680380</strong></a><br /><a href="tel:+918830964374">+91 88309 64374</a></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12 form-column rescen">
                                <div className="form-inner p_relative ml_40 pt_45 pr_50 pb_50 pl_50 b_radius_10 b_shadow_6" style={{ boxShadow: 'rgb(0 0 0 / 35%) 0px 5px 15px' }}>
                                    <div className="text p_relative d_block mb_35">
                                        <h3 className="d_block fs_30 lh_40 fw_bold ">Send a Message</h3>
                                    </div>
                                    <form method="POST" action="contact.php" id="contact-form">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="text" name="name" placeholder="Your Name" required />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="email" name="email" placeholder="Email Address" required />
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                                                <input type="text" name="phone" required placeholder="Phone Number" />
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                                                <input type="date" name="date" required placeholder="Date" />
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                                <button className="theme-btn theme-btn-one" type="submit" name="submit-form">Send Message <i className="icon-4" /></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* contact-four end */}
                {/* google-map-section */}
                <div className="google-map-section mt_40 ">
                    <div className="google-map p_relative d_block">
                        <iframe className="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.824990718561!2d73.55610001458196!3d18.76135268726912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ab1f3d04aa3f%3A0x9f050a392670625e!2sFlykamshet%20paragliding!5e0!3m2!1sen!2sin!4v1663522047976!5m2!1sen!2sin" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </div>
                {/* google-map-section end */}
                
            </div>

        </>
    )
}

export default Contact;