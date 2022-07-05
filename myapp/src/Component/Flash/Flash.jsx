import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { Add } from '../../Redux/action';
import Sdata from '../../Data';
import FlashDetails from './FlashDetails'

const Flash = () => {

  AOS.init({
    duration: 500,
    once: false

  });
  const Dispatch = useDispatch()
  const Dispaly = (x) => {
    Dispatch(Add(x, "Flash Details"))


  }
  return (
    <>
      
      <div className="headrer-flash">

        <div className="container-fluid ms-4 ">
          <div className='d-flex justify-content-between align-items-center ps-5'>
            <h1 className=' '>
               <span > <i class="fa-solid fa-bolt text-danger me-1"></i></span>
              <span className='Top_Catgies-Header fs-1 '>
                Flash Deals
              </span>
            </h1>
            <NavLink to='/all' className='nav-all'>
              <p onClick={() => Dispaly(Sdata)} className='fs-4 fw-bold text-dark pe-5 me-3 mt-2'>View All</p>

            </NavLink>
          </div>

<FlashDetails/>
        </div>
      </div>
    
    </>
  )
}

export default Flash