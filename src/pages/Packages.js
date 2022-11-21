import React from 'react';
import { useState } from 'react';
import { Button, Row, Col, Modal, ModalBody, ModalHeader, ModalTitle } from 'react-bootstrap';
import AddForm from '../components/AddForm';
import { NavLink } from 'react-router-dom';

const Packages = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <>
            <div>
                <section className="page-title about-page-3 p_relative centred">
                    <div className="bg-layer p_absolute l_0 parallax_none parallax-bg" data-parallax="{&quot;y&quot;: 100}" style={{ backgroundImage: 'url(assets/images/banner/pt.jpg)' }} />
                    <div className="auto-container">
                        <div className="content-box">
                            <h1 className="d_block fs_60 lh_70 fw_bold mb_10">Packages</h1>
                            <ul className="bread-crumb p_relative d_block mb_8 clearfix">
                                <li className="p_relative d_iblock fs_16 lh_25 fw_sbold font_family_inter mr_20"><NavLink to="/" >Home</NavLink></li>
                                <li className="current p_relative d_iblock fs_16 lh_25 fw_sbold font_family_inter">Packages</li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/* service-19 */}
                <section className="service-19 p_relative pt_130">
                    <div className="tabs-box">
                        <div className="auto-container">
                            <div className="tabs-content">
                                <div className="tab active-tab" id="tab-1">
                                    <div className="inner-box p_relative mb_150 respac">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                                <div className="content_block_27">
                                                    <div className="content-box p_relative d_block mr_30">
                                                        <div className="sec-title-six p_relative d_block mb_15">
                                                            <h2 className="d_block fs_40 lh_50 fw_bold">Joy Tandem</h2>
                                                        </div>
                                                        <h2 className="d_block fs_40 lh_50 fw_normal mb_0">Rs.3000 <span className="fs_17">/ person</span></h2>
                                                        <div className="text p_relative d_block mb_25">
                                                            <p className="font_family_poppins">This basic ride is designed for beginner who just want to soar in the sky. Simply sit it back and enjoy the ride like never before.</p>
                                                        </div>
                                                        <ul className="list-style-one clearfix p_relative d_block mb_35">
                                                            <li className="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">8-10 min</li>
                                                            <li className="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">Pilot controls.</li>
                                                            <li className="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">Basic flying.</li>
                                                            <li className="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13"> No Spiral, SAT</li>
                                                            <li className="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25">100% Safety Rides</li>
                                                        </ul>
                                                        <div className="btn-box">
                                                        <Button className="theme-btn theme-btn-one" onClick={handleShow}>Book Now<i className="icon-4"></i></Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                                <div className="image_block_24">
                                                    <div className="image-box p_relative d_block ml_30">
                                                        <div className="shape">
                                                            <div className="shape-1 float-bob-x p_absolute w_95 h_95" style={{ backgroundImage: 'url(assets/images/shape/shape-193.png)' }} />
                                                            <div className="shape-2 p_absolute b_20 float-bob-y" style={{ backgroundImage: 'url(assets/images/shape/shape-194.png)' }} />
                                                            <div className="shape-3 p_absolute w_170 h_170 bg-color-1 b_radius_50" />
                                                        </div>
                                                        <figure className="image p_relative d_block b_radius_10"><img src="assets/images/service/ss1.jpg" alt="services" /></figure>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="inner-box p_relative mb_150">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-12 col-sm-12 image-column desk-about">
                                                <div className="image_block_24">
                                                    <div className="image-box p_relative d_block mr_30">
                                                        <div className="shape">
                                                            <div className="shape-4 float-bob-x p_absolute w_95 h_95" style={{ backgroundImage: 'url(assets/images/shape/shape-193.png)' }} />
                                                            <div className="shape-5 p_absolute b_20 float-bob-y" style={{ backgroundImage: 'url(assets/images/shape/shape-194.png)' }} />
                                                            <div className="shape-6 p_absolute w_170 h_170 bg-color-1 b_radius_50" />
                                                        </div>
                                                        <figure className="image p_relative d_block b_radius_10"><img src="assets/images/service/ttn.jpg" alt="instruction-tandem" /></figure>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                                <div className="content_block_27">
                                                    <div className="content-box p_relative d_block ml_30">
                                                        <div className="sec-title-six p_relative d_block mb_15">
                                                            <h2 className="d_block fs_40 lh_50 fw_bold">Acro Tandem</h2>
                                                        </div>
                                                        <h2 className="d_block fs_40 lh_50 fw_normal mb_0">Rs.4500 <span className="fs_17">/ person</span></h2>
                                                        <div className="text p_relative d_block mb_25">
                                                            <p className="font_family_poppins">This is extremely adrenaline rush ride. Only highly experienced pilots can takes you to this ride.</p>
                                                        </div>
                                                        <ul className="list-style-one clearfix p_relative d_block mb_35">
                                                            <li className="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">15 - 20 min</li>
                                                            <li className="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">Pilot controls</li>
                                                            <li className="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">Spiral, SAT.</li>
                                                            <li className="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">Wing Over</li>
                                                            <li className="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">Ridge Dancing</li>
                                                            <li className="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25">100% Safety Rides</li>
                                                        </ul>
                                                        <div className="btn-box">
                                                        <Button className="theme-btn theme-btn-one" onClick={handleShow}>Book Now<i className="icon-4"></i></Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-sm-12 image-column mob-about">
                                                <div className="image_block_24">
                                                    <div className="image-box p_relative d_block mr_30">
                                                        <div className="shape">
                                                            <div className="shape-4 float-bob-x p_absolute w_95 h_95" style={{ backgroundImage: 'url(assets/images/shape/shape-193.png)' }} />
                                                            <div className="shape-5 p_absolute b_20 float-bob-y" style={{ backgroundImage: 'url(assets/images/shape/shape-194.png)' }} />
                                                            <div className="shape-6 p_absolute w_170 h_170 bg-color-1 b_radius_50" />
                                                        </div>
                                                        <figure className="image p_relative d_block b_radius_10"><img src="assets/images/service/ttn.jpg" alt="Acro-Tandem" /></figure>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="inner-box p_relative mb_150">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                                <div className="content_block_27">
                                                    <div className="content-box p_relative d_block mr_30">
                                                        <div className="sec-title-six p_relative d_block mb_15">
                                                            <h2 className="d_block fs_40 lh_50 fw_bold">Instructional Tandem</h2>
                                                        </div>
                                                        <h2 className="d_block fs_40 lh_50 fw_normal mb_0">Rs.3950 <span className="fs_17">/ person</span></h2>
                                                        <div className="text p_relative d_block mb_25">
                                                            <p className="font_family_poppins">You have the control while flying. Pilot will instruct you and take care of safety. You can taste the flying on your own.</p>
                                                        </div>
                                                        <ul className="list-style-one clearfix p_relative d_block mb_35">
                                                            <li className="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">10 -15 min</li>
                                                            <li className="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">You controls*</li>
                                                            <li className="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13"> Basic flying</li>
                                                            <li className="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">No Spiral, SAT</li>
                                                            <li className="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25">100% Safety Rides</li>
                                                        </ul>
                                                        <div className="btn-box">
                                                        <Button className="theme-btn theme-btn-one" onClick={handleShow}>Book Now<i className="icon-4"></i></Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                                <div className="image_block_24">
                                                    <div className="image-box p_relative d_block ml_30">
                                                        <div className="shape">
                                                            <div className="float-bob-x shape-1 p_absolute w_95 h_95" style={{ backgroundImage: 'url(assets/images/shape/shape-193.png)' }} />
                                                            <div className="shape-2 p_absolute b_20 float-bob-y" style={{ backgroundImage: 'url(assets/images/shape/shape-194.png)' }} />
                                                            <div className="shape-3 p_absolute w_170 h_170 bg-color-1 b_radius_50" />
                                                        </div>
                                                        <figure className="image p_relative d_block b_radius_10"><img src="assets/images/service/ss3.jpg" alt="services" /></figure>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
              
            </div>

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

export default Packages;