import React  from 'react';
import {  Search } from 'react-feather'; 
function Hero() {
const heroBackgroundStyle = {
    
    backgroundColor: '#f8f8f8', 
    paddingBottom: '30px',
  };
  return (
<div style={heroBackgroundStyle} className='mb-5'>
    <div className="container pt-5">
  
      <div className="d-flex justify-content-between align-items-center mt-5 mb-4">
        <h1 className="fw-semibold ">Support Portal</h1>
        <button className="btn btn-primary btn-sm">My tickets</button>
      </div>
      <div className="input-group mb-5">
        <span className="input-group-text bg-white border-end-0" style={{ borderRight: 'none' }}>
          <Search size={20} color="#6c757d" />
        </span>
        <input
          type="text"
          className="form-control border-start-0 form-control-no-focus"
          placeholder="Eg: How do I open my account, How do I activate F&O..."
          style={{ height: '50px', fontSize: '1.1rem' }}
        />
      </div>
    </div>
</div>
  );
}

export default Hero;