import React from 'react';

function Footer() {
    let url=" ";
    
  return (
  
        <div class="container-fluid bg-primary text-white footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="container py-5 px-lg-5">
                <div class="row gy-5 gx-4 pt-5">
                    <div class="col-12">
                        <h5 class="fw-bold text-white mb-4">Subscribe Our Newsletter</h5>
                        <div class="position-relative" style={{maxwidth: "400px"}}>
                            <input class="form-control bg-white border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email"/>
                            <button type="button" class="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">Submit</button>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-12">
                        <div class="row gy-5 g-4">
                            <div class="col-md-6">
                                <h5 class="fw-bold text-white mb-4">About Us</h5>
                                <a class="btn btn-link" href={url}>About Us</a>
                                <a class="btn btn-link" href={url}>Contact Us</a>
                                <a class="btn btn-link" href={url}>Privacy Policy</a>
                                <a class="btn btn-link" href={url}>Terms & Condition</a>
                                <a class="btn btn-link" href={url}>Support</a>
                            </div>
                            <div class="col-md-6">
                                <h5 class="fw-bold text-white mb-4">Our Services</h5>
                                <a class="btn btn-link" href={url}>Domain Register</a>
                                <a class="btn btn-link" href={url}>Shared Hosting</a>
                                <a class="btn btn-link" href={url}>VPS Hosting</a>
                                <a class="btn btn-link" href={url}>Dedicated Hosting</a>
                                <a class="btn btn-link" href={url}>Reseller Hosting</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <h5 class="fw-bold text-white mb-4">Get In Touch</h5>
                        <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                        <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                        <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>
                        <div class="d-flex pt-2">
                            <a class="btn btn-outline-light btn-social" href={url}><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-outline-light btn-social" href={url}><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-outline-light btn-social" href={url}><i class="fab fa-youtube"></i></a>
                            <a class="btn btn-outline-light btn-social" href={url}><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 mt-lg-n5">
                        <div class="bg-light rounded" style={{padding:"30px"}}>
                            <input type="text" class="form-control border-0 py-2 mb-2" placeholder="Name"/>
                            <input type="email" class="form-control border-0 py-2 mb-2" placeholder="Email"/>
                            <textarea class="form-control border-0 mb-2" rows="2" placeholder="Message"></textarea>
                            <button class="btn btn-primary w-100 py-2">Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container px-lg-5">
                <div class="copyright">
                    <div class="row">
                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a class="border-bottom" href={url}>Your Site Name</a>, All Right Reserved. 
							
							{/* <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/}
							Designed By <a class="border-bottom" href={"https://htmlcodex.com"}>HTML Codex</a>
                        </div>
                        <div class="col-md-6 text-center text-md-end">
                            <div class="footer-menu">
                                <a href={url}>Home</a>
                                <a href={url}>Cookies</a>
                                <a href={url}>Help</a>
                                <a href={url}>FQAs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
  
}

export default Footer;