import React from 'react';
import '../Css/Ticker.css';
function Ticker(props){
    return(
        <>
               <div className="tcontainer"><div className="ticker-wrap"><div className="ticker-move">
                <div className="ticker-item"><a target="_blank" rel="noopener noreferrer" href="https://ndma.gov.in/sites/default/files/2020-12/All%20India%20Severe%20Warning%20Bulletin%20%28Morning%29%20Dated%2017-12-2020.pdf">IMD Weather Forecast</a></div>
                <div className="ticker-item"><a target="_blank" rel="noopener noreferrer" href="https://ndma.gov.in/sites/default/files/2020-12/DFB_2020_17122020_0.pdf">CWC flood Bulletin</a></div>
                <div className="ticker-item"><a target="_blank" rel="noopener noreferrer" href="https://ndma.gov.in/sites/default/files/2020-12/AVALANCHE%20WARNING_0.pdf">SASE Avalanche Bulletin</a></div>

                </div></div></div>
        </>
    )
}

export default Ticker;

