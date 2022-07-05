import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { NavLink } from 'react-router-dom'
import { AddCart, DeletCart } from '../../Redux/action'
import PayPal from './PayPal'
const Cart = () => {


    const [Total, setTotal] = useState(0)

    const Dispatch = useDispatch()
    const data = useSelector((x) => x.HandleCart)


    useEffect(() => {
        GetSalay()
    }, [data])

    const GetSalay = () => {
        let sum = 0
        data.map((value, index) => {
            sum += (value.price) * (value.qty)
            setTotal(sum)

            

        })


    }
    const Add = (x) => {
        Dispatch(AddCart(x))

    }

    console.log(data.length)
    const experties = (x) => {
        let str = x.length
        if (str > 10) {
            x = x.substring(0, 10) + "..."
        }

        return x

    }


    const Minus = (x) => {
        Dispatch(DeletCart(x))

    }

    return (
        <>

            {data && data.length > 0 ?
                <>
                    <div className="container">
                        <div className="row  py-5 my-5">

                            <div className="col-md-9">

                                <div className="row">
                                    <div className="col-md-9">
                                        <h2>Shooping Cart</h2>
                                    </div>

                                    <div className="col-md-3">
                                        <h2> {data.length} Items</h2>
                                    </div>
                                </div>
                                <hr className='w-100 px-4 text-center m-auto mt-4 text-center' />

                                <div className='  px-4 py-2 parent-cart' >

                                    <div className="row pt-3   px-4 ">
                                        <div className="col-md-4">
                                            <h3 className='titles'>Product</h3>
                                        </div>
                                        <div className=" text-center col-md-2">
                                            <h3 className='titles' >Quantity</h3>

                                        </div>
                                        <div className=" text-center col-md-3">
                                            <h3 className='titles'>Price</h3>
                                        </div>
                                        <div className="text-center col-md-3">
                                            <h3 className='titles'>Total</h3>
                                        </div>
                                    </div>


                                    {data.map((value, index) => <>
                                        <div className="row cart-Row  justify-content-center align-items-center ">
                                            <div className="col-md-4">
                                                <img src={value.cover} className='w-50' />
                                                <span className='names' > {experties(value.name)}</span>


                                            </div>
                                            <div className="text-center d-flex justify-content-center align-items-center  col-md-2">
                                                <span>
                                                    <i onClick={() => Minus(value)} class="fa-solid fa-minus"></i>
                                                </span>
                                                <h3 className='Quantitys mx-2'>{value.qty}</h3>

                                                <span onClick={() => Add(value)}>
                                                    <i class="fa-solid fa-plus"></i>
                                                </span>

                                            </div>
                                            <div className=" text-center  col-md-3">
                                                <h3>${value.price}</h3>
                                            </div>
                                            <div className=" text-center  col-md-3">
                                                <h3> ${value.price * value.qty}</h3>
                                            </div>
                                        </div>



                                    </>)}




                                </div>
                            </div>


                            <div className="col-md-3">
                                <h1>Order Summery</h1>

                                <div className="payment">
                                    <div className="row">
                                        <div className="col-md-9 headers-cart">Items In Cart:</div>
                                        <div className="col-md-3 parent-cart2  "> ${Total}</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-9 headers-cart">Shopping Cart:</div>
                                        <div className="col-md-3 parent-cart2"> $25 </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-9 headers-cart"> Discount:</div>
                                        <div className="col-md-3 parent-cart2"> $50</div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-md-9 headers-cart">Total:</div>
                                        <div className="col-md-3 parent-cart2"> ${Total + 25 - 50}</div>
                                    </div>
                                </div>
<div className='mt-3'>
<PayPal TotalAll={data}  />

</div>
                            </div>

                        </div>
                    </div>

                </>
                : <div className='d-flex justify-content-center align-items-center w-100 py-5'>
                    <NavLink to='/'>
                        <img src='./images/empty.webp' />


                    </NavLink>

                </div>}



        </>
    )
}

export default Cart