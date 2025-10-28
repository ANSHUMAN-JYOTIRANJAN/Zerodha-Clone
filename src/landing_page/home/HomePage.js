import React from 'react';
import Hero from './Hero';
import Awards from './Award';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Pricing from './Pricing';
import Stats from './Stats';
function HomePage() {
    return ( 
        <>
        <Hero/>
        <Awards/>
        <Pricing/>
        <Stats/>
        <Education/>
        <OpenAccount/>
        </>
      );
}

export default HomePage;