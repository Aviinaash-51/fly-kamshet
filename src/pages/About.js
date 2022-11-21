import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CountUp from 'react-countup';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, } from 'react-accessible-accordion';
// import 'react-accessible-accordion/dist/fancy-example.css';

const About = () => {
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
    return (

        <>
            {/* <!-- Page Title --> */}
            <section className="page-title about-page-3 p_relative centred">
                <div className="bg-layer p_absolute l_0 parallax_none parallax-bg" data-parallax='{"y": 100}' style={{ backgroundImage: 'url(assets/images-new/2.jpg)' }}></div>
                <div className="auto-container">
                    <div className="content-box">
                        <h1 className="d_block fs_60 lh_70 fw_bold mb_10">About Us</h1>
                        <ul className="bread-crumb p_relative d_block mb_8 clearfix">
                            <li className="p_relative d_iblock fs_16 lh_25 fw_sbold font_family_inter mr_20"><a href="index.html">Home</a></li>
                            <li className="current p_relative d_iblock fs_16 lh_25 fw_sbold font_family_inter">About Us</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* <!-- End Page Title -->

<!-- about-nine --> */}
            <section className="about-nine p_relative">
                <div className="auto-container">
                    <div className="row align-items-center row_aboutus clearfix mt_40 mb_40">
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image_block_nine">

                                <div className="image-box p_relative d_block mr_20 pt_10">
                                    <img src="assets/images-new/circle-cloud1.png" alt='fly-kamshet' className="img-fluid cloudimage" />
                                    <figure className="image image-aboutus ml_40 p_absolute l_0 wow slideInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        <img src="assets/images-new/p4.png" alt="" className="img-fluid" />
                                    </figure>
                                </div>

                            </div>

                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content-box content-box-aboutus p_relative d_block pt_10">
                                <div className="sec-title-six p_relative d_block mb_25">
                                    <h4 className="p_relative d_block fs_17 uppercase lh_30 fw_sbold mb_10 rescen resheading">About Us</h4>
                                    <h2 className="d_block fs_40 lh_52 fw_bold rescen reshead">We Offer one of the Best Paragliding Experiences at Kamshet</h2>

                                </div>
                                <div className="text p_relative d_block mb_35">
                                    <p className="font_family_oxygen mb_25 rescen">We are an experienced team of passionate paragliding pilots based out of Kamshet, near Pune. The entire team is certified and licensed. We continually keep our skills upgraded and validated. Some of our personal solo flying and training videos are available below
                                        Rest assured we take our skill levels seriously which directly translates into safety of our guests. </p>
                                    <p className="font_family_oxygen rescen">The equipment we use is all certified. Between the pilots, we have licences/ratings from British Hanggliding and Paragliding Association, Paragliding Association of India, APPI, etc

                                    </p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- about-nine end -->

<!-- funfact-nine -->
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
<!-- funfact-nine end -->



<!-- about-19 --> */}
            <section className="about-19 about-responsive p_relative sec-pad mt_60">
                <div className="pattern-layer p_absolute l_100 t_10 float-bob-y" style={{ backgroundImage: 'url(assets/images/shape/shape-184.png)' }}></div>
                <div className="auto-container">
                    <div className="row clearfix align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column content-column-kamshet">
                            <div className="content_block_one">
                                <div className="content-box p_relative d_block">
                                    <div className="sec-title-six p_relative d_block mb_25">
                                        <h4 className="p_relative d_block fs_17 uppercase lh_30 fw_sbold mb_10 rescen">About Kamshet</h4>
                                        <h2 className="d_block fs_40 lh_52 fw_bold rescen">FLY KAMSHET PARAGLIDING</h2>

                                    </div>
                                    <div className="text p_relative d_block mb_25">
                                        <p className="font_family_poppins rescen"> Kamshet is famous for paragliding and it is popularly known as the paragliders' paradise.The best Tandem Paraglider pilots are here. Our job is to get you airborne with utmost safety. Feel free to pick up the phone with any questions you have and we’ll be glad to help with all aspects of paragliding</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image_block_20">
                                <div className="image-box p_relative d_block ml_30 pl_50 pb_50">
                                    <div className="shape">
                                        <div className="shape-3 p_absolute rotate-me" style={{ backgroundImage: 'url(assets/images/shape/shape-176.png)' }}></div>
                                        <div className="shape-4 p_absolute l_15 t_120 rotate-me" style={{ backgroundImage: 'url(assets/images/shape/shape-176.png)' }}></div>
                                    </div>
                                    <iframe width="100%" height="280px" src="https://www.youtube.com/embed/xY7rnP4SUxs" title="fun@pokhra" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- about-19 end -->

<!-- team-details -->

<!-- team-details end -->

  <!-- team-one --> */}
            <section className="team-one team-two team-page-1 p_relative">
                <div className="auto-container">
                    <div data-animation-box className="sec-title p_relative centred mb_50">
                        <h2 data-animation-text className="twhite pt_45 d_block fs_40 fw_bold" data-animation="overlay-animation">Introduce Our Team</h2>

                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-4 col-sm-12 team-block">
                            <div className="team-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box p_relative d_block b_radius_5 b_shadow_6 mb_30">
                                    <div className="image-box p_relative d_block">
                                        <div className="overlay-pattern-1 p_absolute r_0" style={{ backgroundImage: 'url(assets/images/shape/shape-43.png)' }}></div>
                                        <div className="overlay-pattern-2 p_absolute l_0" style={{ backgroundImage: 'url(assets/images/shape/shape-44.png)' }}></div>
                                        <figure className="image p_relative d_block"><img src="assets/images-new/team/team1.jpg" alt="" /></figure>
                                        <ul className="social-links">
                                            <li><a href="index.html"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="index.html"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="index.html"><i className="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="index.html"><i className="fab fa-pinterest-p"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="lower-content p_relative d_block pt_20 pr_30 pb_25 pl_30">
                                        <h4 className="p_relative d_block fs_20 lh_30 fw_sbold pl_30 rescen"><a href="index.html">Pankaj Gugale</a></h4>
                                        <span className="designation fs_16 p_relative d_block font_family_poppins rescen">Team Member</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 team-block">
                            <div className="team-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="inner-box p_relative d_block b_radius_5 b_shadow_6 mb_30">
                                    <div className="image-box p_relative d_block">
                                        <div className="overlay-pattern-1 p_absolute r_0" style={{ backgroundImage: 'url(assets/images/shape/shape-43.png)' }}></div>
                                        <div className="overlay-pattern-2 p_absolute l_0" style={{ backgroundImage: 'url(assets/images/shape/shape-44.png)' }}></div>
                                        <figure className="image p_relative d_block"><img src="assets/images-new/team/team22.jpg" alt="" /></figure>
                                        <ul className="social-links">
                                            <li><a href="index.html"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="index.html"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="index.html"><i className="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="index.html"><i className="fab fa-pinterest-p"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="lower-content p_relative d_block pt_20 pr_30 pb_25 pl_30">
                                        <h4 className="p_relative d_block fs_20 lh_30 fw_sbold pl_30 rescen"><a href='index.html'>Mohsin Mujawar</a></h4>
                                        <span className="designation fs_16 p_relative d_block font_family_poppins rescen">Team Member</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 team-block">
                            <div className="team-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                                <div className="inner-box p_relative d_block b_radius_5 b_shadow_6 mb_30">
                                    <div className="image-box p_relative d_block">
                                        <div className="overlay-pattern-1 p_absolute r_0" style={{ backgroundImage: 'url(assets/images/shape/shape-43.png)' }}></div>
                                        <div className="overlay-pattern-2 p_absolute l_0" style={{ backgroundImage: 'url(assets/images/shape/shape-44.png)' }}></div>
                                        <figure className="image p_relative d_block"><img src="assets/images-new/team/team1.jpg" alt="" /></figure>
                                        <ul className="social-links">
                                            <li><a href="index.html"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="index.html"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="index.html"><i className="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="index.html"><i className="fab fa-pinterest-p"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="lower-content p_relative d_block pt_20 pr_30 pb_25 pl_30">
                                        <h4 className="p_relative d_block fs_20 lh_30 fw_sbold pl_30 rescen"><a href='index.html'>Nicolas Lawson</a></h4>
                                        <span className="designation fs_16 p_relative d_block font_family_poppins rescen">Team Member</span>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>
            </section>
            {/* <!-- team-one end -->
<!-- faq-two --> */}
            <section className="about-ten p_relative sec-pad">
                <div className="auto-container">
                    <div className="row align-items-center clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image_block_ten">
                                <div className="image-box p_relative d_block pr_70 mr_30">
                                    <div className="shape parallax-scene parallax-scene-1">
                                        <div data-depth="0.40" className="shape-1 p_absolute" style={{ backgroundImage: 'url(assets/images/shape/shape-66.png)' }}></div>
                                        <div data-depth="0.50" className="shape-2 p_absolute" style={{ backgroundImage: 'url(assets/images/shape/shape-66.png)' }}></div>
                                    </div>
                                    <figure className="image p_relative d_block"><img src="assets/images-new/6.jpg" alt="" /></figure>
                                    <div className="text p_absolute r_0 b_85 centred pt_55 pr_15 pb_55 pl_15">
                                        <h2 className="d_block fs_45 lh_50 fw_exbold font_family_spartan mb_1">18</h2>
                                        <h5 className="d_block fs_18 lh_25 fw_sbold font_family_spartan">Years Of Exps</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_five">
                                <div className="content-box p_relative d_block mr_30">
                                    <div className="sec-title-12 p_relative d_block mb_35">
                                        <h5 className="d_block d_block_head5 fs_17 lh_26 fw_sbold font_family_inter uppercase mb_19 rescen">You Asked, We Answered</h5>
                                        <h2 className="d_block d_block_head2 fs_40 lh_50 fw_bold font_family_inter rescen faqres">FREQUENTLY ASKED QUESTIONS</h2>
                                    </div>
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
                </div>
            </section>
            {/* <!-- faq-two end -->

<!-- testimonial-three --> */}
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
                                <OwlCarousel className="two-column-carousel owl-carousel owl-theme owl-dots-none nav-style-one overflow_visible" {...testi}>
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
            {/* <!-- testimonial-three --> */}
            <a href="https://wa.me/9970680380?text=" className="float">
                <i className="fa fa-whatsapp my-float"></i>
            </a>


        </>
    )
}

export default About;