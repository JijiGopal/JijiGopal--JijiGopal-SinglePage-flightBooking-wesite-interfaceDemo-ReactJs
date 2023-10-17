import React, {useEffect} from "react";

import aos from 'aos';
import 'aos/dist/aos.css';

const Subscribers = () =>{

    useEffect(()=>{
        aos.init({duration:2000},[])
    })

    return (
        <div className="subscribers section ">
            <div data-aos='fade-up' data-aos-duration='2000' className="sectionContainer container">
                <h2>Subscribe Newsletters & get Latest News</h2>

                <div className="inputDiv flex">
                    <input type="text" placeholder="Enter Your Email Address" />
                    <button className="btn">Subscribe</button>
                </div>
            </div>
        </div>
        
    )
}

export default Subscribers;