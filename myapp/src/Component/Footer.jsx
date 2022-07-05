import React from 'react'

const Footer = () => {
  return (
  <>
     <div className=" Footer py-5 px-4">
       <div className="row px-5">
        <div className="col-md-3">
            <h2 className='mb-4'>Bonik</h2>
            <p className='text-muted mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore saepe maxime iusto magni assumenda sunt, harum, nemo laudantium repellat ullam dicta quasi ad neque ut cumque asperiores dignissimos in tenetur.</p>

             <span className='footer-span'>App Play</span>
             <span className='footer-span'>App Store</span>
        </div>

        <div className="col-md-3 footer-About">
            <h2>About Us</h2>
            <ul>
                <li > <span>Carrers</span></li>
                <li > <span>Our Stores</span></li>
                <li >  <span>  Our Cares</span></li>
                <li >  <span> Terms Confidence</span> </li>
                <li >  <span> Privcy Policy</span> </li>
            </ul>
        </div>
        <div className="col-md-3">
            <h2>Customer Care</h2>
            <ul>
                <li > <span>Help Center</span></li>
                <li > <span>How To Buy</span></li>
                <li >  <span>  Track Your Order</span></li>
                <li >  <span>Bulk Purchasing</span> </li>
                <li >  <span> Returns</span> </li>
            </ul>
        </div>
        <div className="col-md-3">
            <h2>Conract Us</h2>
            <ul>
                <li >  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem nobis voluptate accusamus, dolorum ut facilis, </p></li>
                <li > Email:ytamer230@gmail.com</li>
                <li >   Phone: 01013532503</li>
              </ul>
        </div>
       </div>
     </div>
  
  </>
  )
}

export default Footer