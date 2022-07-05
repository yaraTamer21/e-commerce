import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Banner = () => {
    AOS.init({
        duration: 3000,
        once: false
    });
    return (
        <>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-4 ">
                        <img className="w-100" src="./images/banner-1.png" alt="" />
                    </div>
                    <div className="col-md-8">
                        <img className="w-100" src="./images/banner-2.png" alt="" />
                    </div>
                </div>


                <div className="row my-5">
                    <div className="col-md-3 text-center  " data-aos="flip-left">

                        <div className='blanner'>
                            <span><i class="fa-solid fa-car-on"></i></span>
                            <h3>WorldWide Delavariy</h3>
                            <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, doloremque!</p>
                        </div>

                    </div>

                    <div data-aos="flip-left" className="col-md-3 text-center  ">
                        <div className='blanner'>
                            <span><i class="fa-solid fa-credit-card"></i></span>
                            <h3>Safe Payment</h3>
                            <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, doloremque!</p>
                        </div>

                    </div>

                    <div data-aos="flip-left" className="col-md-3 text-center  ">
                        <div className='blanner'>
                            <span><i class="fa-brands fa-confluence"></i></span>
                            <h3>Confidence</h3>
                            <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, doloremque!</p>
                        </div>

                    </div>

                    <div data-aos="flip-left" className="col-md-3 text-center  " >
                            
                        <div className='blanner'>
                            <span><i class="fa-solid fa-headset"></i></span>
                            <h3>Support</h3>
                            <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, doloremque!</p>
                        </div>

                    </div>



                </div>
            </div>

        </>
    )
}

export default Banner