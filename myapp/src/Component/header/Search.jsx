import React, { useContext } from 'react'
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Search from '@material-ui/icons/Search';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../Context';

const Searchs = () => {

  let data = useSelector((x) => x.HandleCart)
  const { user ,setuser} = useContext(UserContext)
  return (
    <>
      <div className="parent-search row">
        <div className="left col-md-2">
          <h2 className='Logo-search'>Bonik</h2>
        </div>
        <div className="center d-flex  row col-md-8">

          <div className="search col-md-10 row">
            <div className='col-md-1  icons-search'>
              <Search className="fs-1 fw-bold " style={{ color: "lightgray" }} />
            </div>
            <div className="col-md-11 ">
              <input placeholder='Search And hit Enter...' className='input-search h-100 w-100' type='search' />

            </div>

          </div>
          <div className="categoreis-serach  col-md-2">
            <h2>Categoeies</h2>
          </div>



        </div>
        <div className="right-icons col-md-2">
          <div className="d-flex  align-items-center justify-content-center" >
            {user ?<> <span className='fw-bolder fs-5'>welcome {user.first_name}</span>
             <span className="fs-3 text-center m-auto">  <i onClick={()=>setuser(null)} class="fa-solid fa-arrow-right-from-bracket"></i>  </span></> : <NavLink to='/login'>
              <span><  AccountCircle className="fs-1 text-center m-auto" /></span>

            </NavLink>}

            <div className="left-icons">
              <NavLink to='/cart'>
                <span > <ShoppingBasket className="fs-1 text-center m-auto" />
                </span>
              </NavLink>

              <div className="shopping-cart">
                <p>{data.length}</p>

              </div>

            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default Searchs