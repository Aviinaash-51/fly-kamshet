import React from 'react'

const Blog = () => {
    return (
        <>
            <div>
                <section className="page-title about-page-3 p_relative centred">
                    <div className="bg-layer p_absolute l_0 parallax_none parallax-bg" data-parallax="{&quot;y&quot;: 100}" style={{ backgroundImage: 'url(assets/images-new/2.jpg)' }} />
                    <div className="auto-container">
                        <div className="content-box">
                            <h1 className="d_block fs_60 lh_70 fw_bold mb_10">Blog</h1>
                            <ul className="bread-crumb p_relative d_block mb_8 clearfix">
                                <li className="p_relative d_iblock fs_16 lh_25 fw_sbold font_family_inter mr_20"><a href="index.html">Home</a></li>
                                <li className="current p_relative d_iblock fs_16 lh_25 fw_sbold font_family_inter">Blog</li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/* End Page Title */}
                {/* blog-grid-one */}
                <section className="blog-grid-one p_relative sec-pad-blog">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-4 col-sm-12 news-block">
                                <div className="news-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box p_relative d_block mb_70">
                                        <div className="image-box p_relative d_block">
                                            <figure className="image p_relative d_block"><a href="blog-details-one.html"><img src="assets/images-new/3.jpg" alt="fly kamshet" /></a></figure>
                                        </div>
                                        <div className="lower-content p_relative d_block pt_25">
                                            <h4 className="d_block fs_20 lh_30 mb_6"><a href="blog-details-one.html">Dream valentine's date at Kamshet pune</a></h4>
                                            <ul className="post-info clearfix p_relative d_block mb_16">
                                                <li className="p_relative d_iblock float_left mr_30 fs_16 font_family_poppins"><a href="blog-details-one.html">25 Apr 2020 </a></li>
                                            </ul>
                                            <p className="d_block mb_25 font_family_poppins">Received note below from one of our dear guest we at flykamshet love you jyoti shinde....
                                            </p>
                                            <div className="btn-box">
                                                <a href="blog-details-one.html" className="theme-btn theme-btn-one">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 news-block">
                                <div className="news-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box p_relative d_block mb_70">
                                        <div className="image-box p_relative d_block">
                                            <figure className="image p_relative d_block"><a href="blog-details-two.html"><img src="assets/images-new/blog/blog6.jpg" alt="fly kamshet" /></a></figure>
                                        </div>
                                        <div className="lower-content p_relative d_block pt_25">
                                            <h4 className="d_block fs_20 lh_30 mb_6"><a href="blog-details-two.html">shelar hills - for those perfect summer flights</a></h4>
                                            <ul className="post-info clearfix p_relative d_block mb_16">
                                                <li className="p_relative d_iblock float_left mr_30 fs_16 font_family_poppins"><a href="blog-details-two.html">Mar 4, 2020</a></li>
                                            </ul>
                                            <p className="d_block mb_25 font_family_poppins">Shelar hill is a summer paragliding site in kamshet. Kamshet shift our flying to Shelar....</p>
                                            <div className="btn-box">
                                                <a href="blog-details-two.html" className="theme-btn theme-btn-one">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 news-block">
                                <div className="news-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box p_relative d_block mb_70">
                                        <div className="image-box p_relative d_block">
                                            <figure className="image p_relative d_block"><a href="blog-details-three.html"><img src="assets/images-new/blog/blog7.jpg" alt="fly kamshet" /></a></figure>
                                        </div>
                                        <div className="lower-content p_relative d_block pt_25">
                                            <h4 className="d_block fs_20 lh_30 mb_6"><a href="blog-details-three.html">KAMSHET- paradise for paragliding lovers</a></h4>
                                            <ul className="post-info clearfix p_relative d_block mb_16">
                                                <li className="p_relative d_iblock float_left mr_30 fs_16 font_family_poppins"><a href="blog-details-three.html">Apr 26, 2020</a></li>
                                            </ul>
                                            <p className="d_block mb_25 font_family_poppins">Kamshet is one of the many small towns located in pune district. it is uniquely a place....</p>
                                            <div className="btn-box">
                                                <a href="blog-details-three.html" className="theme-btn theme-btn-one">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  <div class="col-lg-6 col-md-6 col-sm-12 news-block">
                  <div class="news-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                      <div class="inner-box p_relative d_block mb_70">
                          <div class="image-box p_relative d_block">
                              <figure class="image p_relative d_block"><a href="blog-details-one.html"><img src="assets/images-new/blog/blog7.jpg" alt="fly kamshet"=""></a></figure>
                          </div>
                          <div class="lower-content p_relative d_block pt_25">
                              <h4 class="d_block fs_20 lh_30 mb_6"><a href="blog-details-one.html">Dream valentine's date</a></h4>
                              <ul class="post-info clearfix p_relative d_block mb_16">
                                  <li class="p_relative d_iblock float_left mr_30 fs_16 font_family_poppins"><a href="blog-details-one.html">Apr 25, 2020</a></li>
                                  
                              </ul>
                              <p class="d_block mb_25 font_family_poppins">Received note below from one of our dear guest we at flykamshet love you jyoti shinde :)</p>
                              <div class="btn-box">
                                  <a href="blog-details-one.html" class="theme-btn theme-btn-one">Read More</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              */}
                        </div>
                    </div>
                </section>
                {/* blog-grid-one end */}
                <a href="https://wa.me/919970680380?text=" className="float">
                    <i className="fa fa-whatsapp my-float" />
                </a>
            </div>


        </>
    )
}

export default Blog;