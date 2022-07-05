import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TopCatgeories = () => {

   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: false,


   };

   return (
      <>
         <div className=" mt-5 mb-5  container">
            <h1 className='py-3 '>  <span>

               <i class="fa-solid fa-table-cells-large fs-2  me-1" style={{ fontSize: "22px" }} ></i>
            </span>
               <span className='Top_Catgies-Header fs-1 '>
                  Top Catrogirs
               </span>
            </h1>


            <Slider {...settings} className='Sliders'>


               <div className="TopCateories-Images ">
                  <img src='./images/top/category-1.png' className='w-100' />
                  <div className="left">
                     <p>HeadPhone</p>
                  </div>
                  <div className="right">
                     <p>3K Order This Week</p>
                  </div>
               </div>


               <div className="TopCateories-Images ">
                  <img src='./images/top/category-2.png' className='w-100' />
                  <div className="left">
                     <p>HeadPhone</p>
                  </div>
                  <div className="right">
                     <p>3K Order This Week</p>
                  </div>
               </div>


               <div className="TopCateories-Images ">
                  <img src='./images/top/category-3.png' className='w-100' />
                  <div className="left">
                     <p>HeadPhone</p>
                  </div>
                  <div className="right">
                     <p>3K Order This Week</p>
                  </div>
               </div>

               <div className="TopCateories-Images ">
                  <img src='./images/top/category-3.png' className='w-100' />
                  <div className="left">
                     <p>HeadPhone</p>
                  </div>
                  <div className="right">
                     <p>3K Order This Week</p>
                  </div>
               </div>

            </Slider>
         </div>


      </>
   )
}

export default TopCatgeories