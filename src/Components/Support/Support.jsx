import React, {useEffect} from "react";
import aos from 'aos';
import 'aos/dist/aos.css';
import gridv from '../../assets/gridv.mp4';

const Support = () =>{

    useEffect(()=>{
        aos.init({duration:2000},[])
    })
    
    return (
        <>
        <div className="support container section">
            <div className="sectionContainer">

              <div className="tittlesDiv">
                <small>Travel Support</small>
                <h2>Plan your travel with confidence</h2>
                <p>Find help with booking and travel plans, see what to expect along the Journey!</p>
              </div>
               
              <div className="infoDiv grid">

                <div className="textDiv grid">

                    <div data-aos='fade-down' data-aos-duration='2500' className="singleInfo">
                        <span className="number">01</span>
                        <h4>Travel requirement for Dubai</h4>
                        <p>Find help with booking and travel plans, see what to expect along the Journey!</p> 
                    </div>

                    <div data-aos='fade-down' data-aos-duration='3500' className="singleInfo">
                        <span className="number colorOne">02</span>
                        <h4>Multi-risk travel insurance</h4>
                        <p>Find help with booking and travel plans, see what to expect along the Journey!</p> 
                    </div>

                    <div data-aos='fade-down' data-aos-duration='4500' className="singleInfo">
                        <span className="number colorTwo">03</span>
                        <h4>Chauffeur services at your arrival</h4>
                        <p>Find help with booking and travel plans, see what to expect along the Journey!</p> 
                    </div>

                </div>
                <div data-aos='fade-up' data-aos-duration='2000' className="imgDiv">
                    <video src={gridv} autoPlay muted loop/>
                </div>
              </div>
            </div>  
        </div>
        </>
    )
}

export default Support;