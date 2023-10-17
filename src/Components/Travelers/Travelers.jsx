import React, {useEffect} from "react";

import aos from 'aos';
import 'aos/dist/aos.css';

// import imgs
import paris from '../../assets/paris.jpg';
import london from '../../assets/london.jpg';
import prague from '../../assets/prague.jpg';
import newyork from '../../assets/newyork.jpg';


import traveler1 from '../../assets/traveler1.jpg';
import traveler2 from '../../assets/traveler2.jpg';
import traveler3 from '../../assets/traveler3.jpg';
import traveler4 from '../../assets/traveler4.jpg';


// using high order  array to display travelers data

const travelers = [
    {
        id: 1,
        destinationImg: paris,
        travelerImg: traveler1,
        travelerName: 'Mary',
        socialLink: '@Mary87'
    },
    {
        id: 2,
        destinationImg: london,
        travelerImg: traveler2,
        travelerName: 'Martin Marli',
        socialLink: '@MartinMarli'
    },
    {
        id: 3,
        destinationImg: prague,
        travelerImg: traveler3,
        travelerName: 'Alex Christy',
        socialLink: '@Alexxx'
    },
    {
        id: 4,
        destinationImg: newyork,
        travelerImg: traveler4,
        travelerName: 'Mike Candy',
        socialLink: '@MikeeeXX'
    },
]
const Travelers = () => {

    useEffect(()=>{
        aos.init({duration:2000},[])
    })

    return (

        <div className="travelers container section">
            <div className="sectionContainer">
                <h2 data-aos='fade-down' data-aos-duration='2000'>Top Travelers of this month!</h2>

                <div className="travelersContaner grid">

                    {
                        travelers.map(({ id, destinationImg, travelerImg, travelerName, socialLink }) => {
                            return (

                                <div data-aos='fade-up' data-aos-duration='2000' key={id} className="singleTraveler">
                                    <img src={destinationImg} className="destinationImg" />
                                    <div className="travelerDetails">
                                        <div className="travelerPicture">
                                            <img src={travelerImg} className="travelerImg" />
                                        </div>
                                        <div className="travelerName">
                                            <span>{travelerName}</span>
                                            <p>{socialLink}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </div>

    )
}

export default Travelers;