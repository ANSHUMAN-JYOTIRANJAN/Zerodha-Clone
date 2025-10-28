import React from 'react';

function Awards() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

        <div className="col-md-6 mb-5">
          <h2 className="mb-5 fw-semibold">Trust with confidence</h2>

          <div className="mb-4">
            <h4 className="fw-semibold">Customer-first always</h4>
            <p className="text-muted fs-5">
              That’s why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments,
              making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="fw-semibold">No spam or gimmicks</h4>
            <p className="text-muted fs-5">
              No gimmicks, spam, "gamification", or annoying push notifications. High-quality apps that you
              use at your pace, the way you like. <a href="#" className="text-decoration-none text-primary">Our philosophies.</a>
            </p>
          </div>

          <div className="mb-4">
            <h4 className="fw-semibold">The Zerodha universe</h4>
            <p className="text-muted fs-5">
              Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you
              tailored services specific to your needs.
            </p>
          </div>

          <div>
            <h4 className="fw-semibold">Do better with money</h4>
            <p className="text-muted fs-5">
              With initiatives like <strong>Nudge</strong> and <strong>Kill Switch</strong>, we don’t just
              facilitate transactions, but actively help you do better with your money.
            </p>
          </div>
        </div>

        <div className="col-md-6 text-center">
          <img
            src="media/images/ecosystem.png"
            style={{width:"95%"}}
          />
          <div className='text-center'>            
            <a href='' className='mx-5' style={{textDecoration :"none"}}>Explore our products<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <a href='' style={{textDecoration : "none"}}>Try Kite demo</a>
          </div>
        </div>
          <img src='media/images/pressLogos.png' style={{ maxWidth: '60%' }} className='col-12'></img>
      </div>
    </div>
  );
}

export default Awards;