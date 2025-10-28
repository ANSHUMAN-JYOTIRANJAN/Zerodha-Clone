import React from 'react';
import ChargesTable from './ChargesTable';
import HeroPrice from './HeroPrice';
import Charges from './Charges';
import ChargesExplain from './ChargesExplain';
function PricePage() {
    return ( 
       <>
       <HeroPrice/>
       <ChargesTable/>
       <Charges/>
       <ChargesExplain/>
       </>
     );
}

export default PricePage;