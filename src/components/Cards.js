import React from 'react';

function Cards() {
    let url=" ";

  return (
   
   <div class="container-xxl py-5">
     <div class="container px-lg-5">
       <div class="section-title position-relative text-center mx-auto mb-5 pb-4 wow fadeInUp" data-wow-delay="0.1s" style={{maxwidth: "600px"}}>
           <h1 class="mb-3">Our Hosting Plans</h1>
           <p class="mb-1">Vero justo sed sed vero clita amet. Et justo vero sea diam elitr amet ipsum eos ipsum clita duo sed. Sed vero sea diam erat vero elitr sit clita.</p>
       </div>
       <div class="row gy-5 gx-4">
           <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
               <div class="position-relative shadow rounded border-top border-5 border-primary">
                   <div class="d-flex align-items-center justify-content-center position-absolute top-0 start-50 translate-middle bg-primary rounded-circle"
                    style={{width: "45px", height: "45px", margintop: "-3px"}}>
                       <i class="fa fa-share-alt text-white"></i>
                   </div>
                   <div class="text-center border-bottom p-4 pt-5">
                       <h4 class="fw-bold">Share Hosting</h4>
                       <p class="mb-0">Eirmod erat dolor amet est clita lorem erat justo rebum elitr eos</p>
                   </div>
                   <div class="text-center border-bottom p-4">
                       <p class="text-primary mb-1">Latest Offer - <strong>Save 30%</strong></p>
                       <h1 class="mb-3">
                           <small class="align-top" style={{fontsize: "22px",lineheight: "45px"}}>$</small>2.49<small
                               class="align-bottom" style={{fontsize: "16px", lineheight: "40px"}}>/ Month</small>
                       </h1>
                       <a class="btn btn-primary px-4 py-2" href={url}>Buy Now</a>
                   </div>
                   <div class="p-4">
                       <p class="border-bottom pb-3"><i class="fa fa-check text-primary me-3"></i>100 GB Disk Space</p>
                       <p class="border-bottom pb-3"><i class="fa fa-check text-primary me-3"></i>Unlimited Bandwith</p>
                       <p class="border-bottom pb-3"><i class="fa fa-check text-primary me-3"></i>Upgrade to Positive SSL</p>
                       <p class="border-bottom pb-3"><i class="fa fa-check text-primary me-3"></i>Automatic Malware Removal</p>
                       <p class="mb-0"><i class="fa fa-check text-primary me-3"></i>30 Days Money Back Guarantee</p>
                   </div>
               </div>
           </div>
           <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
               <div class="position-relative shadow rounded border-top border-5 border-secondary">
                   <div class="d-flex align-items-center justify-content-center position-absolute top-0 start-50 translate-middle bg-secondary rounded-circle" 
                   style={{width: "45px", height: "45px", margintop: "-3px"}}>
                       <i class="fa fa-server text-white"></i>
                   </div>
                   <div class="text-center border-bottom p-4 pt-5">
                       <h4 class="fw-bold">VPS Hosting</h4>
                       <p class="mb-0">Eirmod erat dolor amet est clita lorem erat justo rebum elitr eos</p>
                   </div>
                   <div class="text-center border-bottom p-4">
                       <p class="text-primary mb-1">Latest Offer - <strong>Save 30%</strong></p>
                       <h1 class="mb-3">
                           <small class="align-top" style={{fontsize: "22px", lineheight: "45px"}}>$</small>5.49<small
                               class="align-bottom" style={{fontsize: "16px", lineheight: "40px"}}>/ Month</small>
                       </h1>
                       <a class="btn btn-secondary px-4 py-2" href={url}>Buy Now</a>
                   </div>
                   <div class="p-4">
                       <p class="border-bottom pb-3"><i class="fa fa-check text-primary me-3"></i>100 GB Disk Space</p>
                       <p class="border-bottom pb-3"><i class="fa fa-check text-primary me-3"></i>Unlimited Bandwith</p>
                       <p class="border-bottom pb-3"><i class="fa fa-check text-primary me-3"></i>Upgrade to Positive SSL</p>
                       <p class="border-bottom pb-3"><i class="fa fa-check text-primary me-3"></i>Automatic Malware Removal</p>
                       <p class="mb-0"><i class="fa fa-check text-primary me-3"></i>30 Days Money Back Guarantee</p>
                   </div>
               </div>
           </div>
           <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
               <div class="position-relative shadow rounded border-top border-5 border-primary">
                   <div class="d-flex align-items-center justify-content-center position-absolute top-0 start-50 translate-middle bg-primary rounded-circle" 
                   style={{width: "45px", height: "45px", margintop: "-3px"}}>
                       <i class="fa fa-cog text-white"></i>
                   </div>
                   <div class="text-center border-bottom p-4 pt-5">
                       <h4 class="fw-bold">Dedi Hosting</h4>
                       <p class="mb-0">Eirmod erat dolor amet est clita lorem erat justo rebum elitr eos</p>
                   </div>
                   <div class="text-center border-bottom p-4">
                       <p class="text-primary mb-1">Latest Offer - <strong>Save 30%</strong></p>
                       <h1 class="mb-3">
                           <small class="align-top" style={{fontsize: "22px", lineheight: "45px"}}>$</small>11.49<small
                               class="align-bottom" style={{fontsize: "16px", lineheight: "40px"}}>/ Month</small>
                       </h1>
                       <a class="btn btn-primary px-4 py-2" href={url}>Buy Now</a>
                   </div>
                   <div class="p-4">
                       <p class="border-bottom pb-3"><i class="fa fa-check text-primary me-3"></i>100 GB Disk Space</p>
                       <p class="border-bottom pb-3"><i class="fa fa-check text-primary me-3"></i>Unlimited Bandwith</p>
                       <p class="border-bottom pb-3"><i class="fa fa-check text-primary me-3"></i>Upgrade to Positive SSL</p>
                       <p class="border-bottom pb-3"><i class="fa fa-check text-primary me-3"></i>Automatic Malware Removal</p>
                       <p class="mb-0"><i class="fa fa-check text-primary me-3"></i>30 Days Money Back Guarantee</p>
                   </div>
               </div>
           </div>
       </div>
   </div>
</div>
  
 ) ;
}

export default Cards;