import React from "react";

function Header() {
    let url=" ";
   
  return (
    <div class="container-xxl bg-white p-0">
   
        <div id="spinner" class=" bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" style={{width:' 3rem', height: "3rem;", role:"status"}}>
                <span class="sr-only">Loading...</span>
            </div>
        </div>
       
        <div class="container-xxl position-relative p-0">
            <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href={url} class="navbar-brand p-0">
                    <h1 class="m-0"><i class="fa fa-server me-3"></i>GreenHost</h1>
                    {/* <img src={img/logo.png} alt=" "/>  */}
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="fa fa-bars"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-0">
                        <a href={url} class="nav-item nav-link active">Home</a>
                        <a href={url} class="nav-item nav-link">About</a>
                        <a href={url} class="nav-item nav-link">Domain</a>
                        <a href={url} class="nav-item nav-link">Hosting</a>
                        <div class="nav-item dropdown">
                            <a href={url} class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div class="dropdown-menu m-0">
                                <a href={url} class="dropdown-item">Our Team</a>
                                <a href={url} class="dropdown-item">Testimonial</a>
                                <a href={url} class="dropdown-item">Comparison</a>
                            </div>
                        </div>
                        <a href={url} class="nav-item nav-link">Contact</a>
                    </div>
                    <button type="button" class="btn text-secondary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fa fa-search"></i></button>
                    <a href={url} class="btn btn-secondary py-2 px-4 ms-3">Register</a>
                </div>
            </nav>

            <div class="container-xxl py-5 bg-primary hero-header mb-5">
                <div class="container my-5 py-5 px-lg-5">
                    <div class="row g-5">
                        <div class="col-lg-6 pt-5 text-center text-lg-start">
                            <h1 class="display-4 text-white mb-4 animated slideInLeft">Shared Hosting</h1>
                            <p class="text-white animated slideInLeft">Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd.</p>
                            <h1 class="text-white mb-4 animated slideInLeft">
                                <small class="align-top fw-normal" style={{fontsize: '15px', lineheight:'25px'}}>Starting:</small>
                                <span>$2.49</span>
                                <small class="align-bottom fw-normal" style={{fontsize: '15px', lineheight:'33px'}}>/ Mo</small>
                            </h1>
                            <a href={url} class="btn btn-secondary py-sm-3 px-sm-5 me-3 animated slideInLeft">Get Started Now</a>
                        </div>
                        <div class="col-lg-6 text-center text-lg-start">
                            <img class="img-fluid animated zoomIn" src="img/hero.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        
    </div>
  );
}

export default Header;
