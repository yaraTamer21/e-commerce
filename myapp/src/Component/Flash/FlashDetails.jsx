import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Sdata from '../../Data';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AddCart } from '../../Redux/action';
import { toast } from 'react-toastify'
import { UserContext } from '../../Context';



const NextArrow = (props) => {
    const { onClick } = props;
    return (<>
        <div className='control' onClick={onClick}>
            <button className='bottons-control-next'>
                <i class="fa-solid fa-arrow-right-long"></i>
            </button>
        </div>

    </>)

}
const PrevArrow = (props) => {
    const { onClick } = props;
    return (<>
        <div className='control' onClick={onClick}>
            <button className='bottons-control-prev'>
                <i class="fa-solid fa-arrow-left-long"></i>
            </button>
        </div>

    </>)

}
const FlashDetails = () => {

    const {user}=useContext(UserContext)
    console.log(user)
    const dispatch = useDispatch()

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />

    };
    const erperies = (srt) => {

        if (srt.length > 20) {
            srt = srt.substring(0, 10) + "..."
        }
        return srt

    }
    const Dispaly = (data) => {

dispatch(AddCart(data) )       
toast.success("Product add successfull")

    }

    return (
        <>
            <div className="slider-flashDetails">
                <Slider {...settings} className='Sliders'>
                    {Sdata.map((value, index) => {
                        return (<>

                            <div className="parent-flash mb-5 " >
                                <div className="offers">
                                    <p> {value.discount}% Offers</p>
                                </div>
                                <div>
                                    <Link to={`/products/${value.id}`} >
                                        <img className='w-100' src={value.cover} />

                                    </Link>


                                </div>
                                <div className='w-100 px-4  '>
                                    <div className="height-slider">
                                        <h3> {erperies(value.name)}</h3>
                                    </div>
                                    <div className='mt-4'>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                    <div className="row  prices-flash mt-2 pb-4">
                                        <div className="col-md-8 dolar">
                                            ${value.price}.00
                                        </div>
                                        <div className="col-md-2 ">
                                          {user&&<i onClick={() => Dispaly(value)} class="fa-solid fa-plus "></i>}
                                            

                                            
                                         </div>
                                    </div>
                                </div>
                            </div>



                        </>)
                    })}

                </Slider>

            </div>



        </>
    )
}

export default FlashDetails




