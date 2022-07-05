import React, { useContext } from 'react'
import { Mobiles } from '../Data'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Add, AddCart } from '../Redux/action';
import { toast } from 'react-toastify';
import { UserContext } from '../Context';

const Mobile = () => {

    const {user}=useContext(UserContext)
    AOS.init({
        duration: 2000,
        once: false
    });
    const Dispatch = useDispatch()
    const Dispaly = (x) => {
        Dispatch(Add(x, "Mobiles"))


    }
    const Display1 = (data) => {

        Dispatch(AddCart(data) )
        toast.success("Product add successfull")

            }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div data-aos="zoom-in" className="col-md-3 left-mobiles ">
                        <div className="row mt-4 text-center mobiles-names ">
                            <div className="col-md-6 Brands-shops">
                                <h3>Brands</h3>
                            </div>
                            <div className="col-md-6">
                                <h3>Shops</h3>
                            </div>
                        </div>

                        <div className="container container_h1">
                            <div className="row align-items-center my-4 justify-content-center  container-mobiles   px-4">
                                <div className="col-md-2">
                                    <img className='w-100' src='./images/category/cat-1.png' />
                                </div>
                                <div className="col-md-10">
                                    <h2>Apple</h2>
                                </div>
                            </div>

                            <div className="row align-items-center  my-4  justify-content-center  container-mobiles   px-4">
                                <div className="col-md-2">
                                    <img className='w-100' src='./images/category/cat-2.png' />
                                </div>
                                <div className="col-md-10">
                                    <h2 >SammSoung</h2>
                                </div>
                            </div>

                            <div className="row align-items-center  my-4  justify-content-center  container-mobiles   px-4">
                                <div className="col-md-2">
                                    <img className='w-100' src='./images/category/cat-3.png' />
                                </div>
                                <div className="col-md-10">
                                    <h2 >Oppo</h2>
                                </div>
                            </div>

                            <div className="row align-items-center  my-4  justify-content-center  container-mobiles   px-4">
                                <div className="col-md-2">
                                    <img className='w-100' src='./images/category/cat-2.png' />
                                </div>
                                <div className="col-md-10">
                                    <h2 >Vivo</h2>
                                </div>
                            </div>

                            <div className="row align-items-center  my-4  justify-content-center  container-mobiles   px-4">
                                <div className="col-md-2">
                                    <img className='w-100' src='./images/category/cat-1.png' />
                                </div>
                                <div className="col-md-10">
                                    <h2 >Redmi</h2>
                                </div>
                            </div>

                            <div className="row align-items-center  my-4  justify-content-center  container-mobiles   px-4">
                                <div className="col-md-2">
                                    <img className='w-100' src='./images/category/cat-2.png' />
                                </div>
                                <div className="col-md-10">
                                    <h2 >Sony</h2>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="col-md-9 ">
                        <div className="container">
                            <div className='d-flex justify-content-between'>
                                <h1 className='fw-bolder fs-2 '>Mobile Phones</h1>
                                <NavLink to='/all' className='nav-all'>
                                    <p onClick={() => Dispaly(Mobiles)} className='fs-4 fw-bold text-dark'>View All</p>

                                </NavLink>
                            </div>
                            <div className="row">
                                { Mobiles.map((value, index) => {
                                    return (<>
                                        <div className="col-md-4">

                                            <div className="parent-flash mb-5 " >
                                                <div className="offers">
                                                    <p> {value.discount}% Offers</p>
                                                </div>
                                                <div>
                                                <NavLink to={`/products/${value.id}`}>
                                                <img className='w-100' src={value.cover} />

</NavLink>



                                                </div>
                                                <div className='w-100 px-4  '>
                                                    <div className="height-slider">
                                                        <h3> {value.name}</h3>
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
                                                      {user&& <div className="col-md-2 ">
                                                            <i onClick={()=>Display1(value)} class="fa-solid fa-plus "></i>
                                                        </div>}
                                                    </div>
                                                </div>
                                            </div>

                                        </div>


                                    </>)

                                })}

                            </div>

                        </div>
                    </div>
                </div>





            </div>

        </>
    )
}

export default Mobile