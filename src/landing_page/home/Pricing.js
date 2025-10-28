import React from 'react';

function Pricing() {
    return (
        
        <div className='container py-5 my-5'> 
            <div className='row'>
                <div className='col-lg-4 col-md-12 mb-5'>
                    <h2 className='mb-3 fw-semibold'>Unbeatable pricing</h2>
                    <p className='text-muted fs-5 mb-4'>
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a href="/pricing" className="text-primary text-decoration-none fw-semibold" style={{ fontSize: "1.1rem" }}>
                        See pricing 
                    </a>

                </div>
                <div className='col-lg-8 col-md-12 d-flex flex-column flex-md-row justify-content-lg-start'> 
                    
                    <div className='d-flex align-items-center mb-4 me-lg-4'>
                        <img 
                            src='media/images/pricing0.svg' 
                            alt='Free account opening'
                            className='img-fluid' 
                            style={{ maxWidth: '100px' }} 
                        />
                        <div className='ms-3'> 
                            <p className='text-muted fw-semibold mb-0 small'>Free account opening</p>
                        </div>
                    </div>

                    <div className='d-flex align-items-center mb-4 me-lg-4'>
                        <img 
                            src='media/images/pricing0.svg' 
                            alt='Free equity delivery'
                            className='img-fluid' 
                            style={{ maxWidth: '100px' }}
                        />
                        <div className='ms-3'>
                            <p className='text-muted fw-semibold mb-0 small'>Free equity delivery and direct mutual funds</p>
                        </div>
                    </div>
        
                    <div className='d-flex align-items-center mb-4'>
                        <img 
                            src='media/images/intradayTrades.svg' 
                            alt='Rs 20 Intraday and F&O'
                            className='img-fluid' 
                            style={{ maxWidth: '100px' }}
                        />
                        <div className='ms-3'>
                            <p className='text-muted fw-semibold mb-0 small '>Intraday and F&O</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Pricing;