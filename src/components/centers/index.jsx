import React from 'react';
import PollingStationForm from './center1';
import PollingStationForm1 from './center2';
import PollingStationForm2 from './center3';

const Center = () => {
    return ( 
        <React.Fragment>
         <div style = {{marginBottom : '3em'}} >
            <h3>
                Polling Stations
            </h3>
        </div>
            <PollingStationForm/>
             <PollingStationForm1/>
              <PollingStationForm2/>

        </React.Fragment>
     );
}
 
export default Center;