
import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { UserContext } from '../Context'
import Home from '../Pages/Home'
import { AddCart } from '../Redux/action'

const AllProducts = () => {

    const Dispatch = useDispatch()
    const { user } = useContext(UserContext)
    const History = useHistory()
    const Data = useSelector((x) => x.HandleReducer)
    console.log(Data)
    const Display = (x) => {
        Dispatch(AddCart(x))
        toast.success("you added Product Successfull")

    }
    return (
        <>
            <div className="container my-5 py-5">
                <div className="row">


                    <div className="col-md-12 ">
                        <div className="container">
                            {Data && Data.Title !== "" ? <h1 className='fw-bolder fs-1  text-center '>{Data.Title}</h1> : ""}




                            <div className="row">
                                {Data && Data.Containe.length > 1 ? Data.Containe.map((value, index) => {
                                    return (<>
                                        <div className="col-md-3">

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
                                                        {user && <div className="col-md-2 ">

                                                            <i onClick={() => Display(value)} class="fa-solid fa-plus "></i>


                                                        </div>}
                                                    </div>
                                                </div>
                                            </div>

                                        </div>


                                    </>)

                                }) : History.push('/cart')}

                            </div>

                        </div>
                    </div>
                </div>





            </div>

        </>
    )
}

export default AllProducts