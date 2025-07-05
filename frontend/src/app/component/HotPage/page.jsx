import Image from 'next/image'
import React from 'react'
// import pic1 from '@/app/Images/HotPic.png'
import img1 from   '@/app/Images/user/user1.jpeg'
import main from   '@/app/Images/main.png'
import heart from   '@/app/Images/heart5.png'
import mask1 from   '@/app/Images/mask1.png'
import mask2 from   '@/app/Images/mask2.png'
import mask3 from   '@/app/Images/mask3.png'
import mask4 from   '@/app/Images/mask4.png'
import mask5 from   '@/app/Images/mask5.png'
import './hotpage.css'

export default function page() {

  const cardData = [
    {
      title: "Mental / Emotional Support",
      image:mask1 ,
    },
    {
      title: "Physical Comfort / Closeness",
      image: mask2,
    },
    {
      title: "Celebrate a Moment",
      image: mask3,
    },
    {
      title: "Travel With Me",
      image: mask4,
    },
    {
      title: "Movie / Dinner Date",
      image: mask5,
    },
  ];
  


  return (
    <>
    <section className=" hero container-fluid py-5 mt-5">
      <div className="row">
        <div className="col-lg-12 d-flex align-items-center justify-content-center text-center flex-column">
            <div className="content mt-5 mb-4">
              
                <h2 className='fw-bold'>Find Real People. Build Real Connections.</h2>
                <p className='fw-semibold'>Serious dating starts here with verified users and guaranteed safety.
                 <br /> Real people. Real conversations. Real care.</p> 
              
            </div>

            <Image src={main} className='img-fluid' alt=""/>
            <div className="content2 mt-5 d-flex gap-3">
                
                <Image src={heart}  alt=""/>
                <div className="inner">
                  <h2 className='fw-bold'>Not Just Matches — We Care for You</h2>
                  <p className='fw-semibold'>We help you find genuine emotional connections that bring peace of mind <br></br> and support in your journey.</p>
                </div>
                <Image src={heart}  alt=""/>
            </div>

        </div>

      </div>
    </section>
    <section className='container-fluid py-5' style={{backgroundColor:"#EC4B60"}}>
      <div className="row">
        <div className="col-lg-12 d-flex align-items-center justify-content-center text-center">
          <h1 className='text-white'>Premium Service</h1>
        </div>
      </div>
    </section>

    <section className='container py-5'>
      <div className="row justify-content-center">
      {cardData.map((item, index) => (
          <div className="col-md-4 col-sm-6 text-center mb-4" key={index}>
            <div className="p-3">
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={300}
                style={{ borderRadius: "20px", objectFit: "cover" }}
              />
              <h5 className="mt-3 text-danger fw-bold">{item.title}</h5>
            </div>
          </div>
        ))}
      </div>

    </section>

       {/* <section>
             <div className='HotPage-mainSec'>
                <div className='HotPage-centerSec'>
                <div className='overlayText'>
                        <p className='title'>Find Real People. Build Real Connections.</p>
                        <p>Serious dating starts here with verified users and guaranteed safety.</p>
                      <p> Real people. Real conversations. Real care.</p> 
                    </div>
                    <Image src={pic1} className='' alt=""/>
                   
                </div>
             </div>
        
        </section>  */}

        {/* <section className="premiumServiceSec py-5">
  <div className="container">
    <div className="row justify-content-center">
      {
        data.map((item, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100 text-center shadow-sm border-0">
              <Image 
                src={item.image} 
                className="card-img-top serviceImage" 
                alt={item.title} 
                width={80} 
                height={400} 
              />
              <div className="card-body">
                <p className="card-text fw-bold">{item.title}</p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  </div>
</section> */}




      
    </>
  )
}
