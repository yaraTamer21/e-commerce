import React, { useContext } from 'react'
import Banner from '../Component/Banner'
import BigComponent from '../Component/BigComponent'
import Categories from '../Component/Categories'
import Flash from '../Component/Flash/Flash'
import Mobile from '../Component/Mobile'
import NewArrival from '../Component/NewArrival'
import Sliders from '../Component/Slider'
import TopCatgeories from '../Component/TopCatgeories'
import { UserContext } from '../Context'

const Home = () => {
  const{user}=useContext(UserContext)
  console.log(user)
  return (
    <>
      <div className="row">
        <div className="col-md-3">
          <Categories />
        </div>
        <div className="col-md-8">
          <Sliders />
        </div>
      </div>

      <Flash />
      <TopCatgeories />
      <NewArrival />
      <BigComponent />
      <Mobile />
      <Banner />
    </>
  )
}

export default Home