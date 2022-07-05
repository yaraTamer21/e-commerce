import React, { useContext } from 'react'
import { arrivals } from '../Data'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { Add, AddCart } from '../Redux/action';
import { toast } from 'react-toastify';
import { UserContext } from '../Context';
const NewArrival = () => {
    const dispatch = useDispatch()
    const {user} = useContext(UserContext)
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,

    };
    const Dispatch=useDispatch()
    const Dispaly=(x)=>{
       Dispatch(Add(x,"Arrivals"))
     

    }
    const Dispaly1 = (data) => {

        dispatch(AddCart(data) )
        toast.success("Product add successfull")

            }
        
    return (
        <>
            <div className="arrival-header container ">
                <div className='d-flex justify-content-between'>
                    <h1>
                        <span>NEW</span>Arrival
                    </h1>
                    <NavLink to='/all' className='nav-all'>
                        <p onClick={() => Dispaly(arrivals)} className='fs-4 fw-bold text-dark'>View All</p>

                    </NavLink>
                </div>

            </div>
            <div className="arrival-content container my-4">
                <Slider {...settings} className='Sliders'>

                    {arrivals.map((value, index) => {
                        return (<>

                            <div className='arrival mb-3 '>
                                <NavLink to={`/products/${value.id}`}>
                                <img src={value.cover} className='w-100' alt="" />

                                </NavLink>
                                <h3 className='my-2'>{value.name}</h3>
                                <div className="row  align-content-center justify-content-center ">
                                    <div className="col-md-9">
                                        <p>${value.price}</p>
                                    </div>

                                    {user?<div className="col-md-2 fs-4 mt-1 me-3  arrivals  ">
                                        <i onClick={() => Dispaly1(value)}  class="fa-solid fa-plus "></i>

                                    </div>:""}
                                  


                                </div>
                            </div>


                        </>)
                    })}
                </Slider>


            </div>

        </>
    )
}

export default NewArrival