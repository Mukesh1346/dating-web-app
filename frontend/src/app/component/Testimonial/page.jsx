"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaHeart, FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

import pic1 from "@/app/Images/user/user2.jpeg";
import pic2 from "@/app/Images/user/user2.jpg";
import pic3 from "@/app/Images/user/user9.jpeg";
import heart from "@/app/Images/wishlist.png";
import love from "@/app/Images/love.png";
import user from "@/app/Images/user1.png";
import link from "@/app/Images/link.png";
import calendar from "@/app/Images/calendar.png";
import AppStore from "@/app/Images/AppStore.png";
import GooglePlay from "@/app/Images/GooglePlay.png";

import "./testimonial.css";

const testimonials = [
  {
    id: 1,
    name: "Neha Singh",
    review: `After trying multiple apps, this one felt different.
    The match quality was way better, and the filters helped a lot.
    I liked the focus on serious relationships, not hookups.
    Found someone kind, respectful, and genuine.
    Definitely worth it if you're done with casual swipes.`,
    profileImg: pic1,
    rating: 3,
  },
  {
    id: 2,
    name: "Sneha Singh",
    review: `After trying multiple apps, this one felt different.
    The match quality was way better, and the filters helped a lot.
    I liked the focus on serious relationships, not hookups.
    Found someone kind, respectful, and genuine.
    Definitely worth it if you're done with casual swipes.`,
    profileImg: pic2,
    rating: 4,
  },
  {
    id: 3,
    name: "Neha Singh",
    review: `After trying multiple apps, this one felt different.
    The match quality was way better, and the filters helped a lot.
    I liked the focus on serious relationships, not hookups.
    Found someone kind, respectful, and genuine.
    Definitely worth it if you're done with casual swipes.`,
    profileImg: pic3,
    rating: 5,
  },
];

export default function TestimonialCarousel() {
  return (<>
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12">
<h2 className="text-center heading">Dating That Actually Works</h2>

          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="testimonial-wrapper">
                <div className="testimonial-card p-4 mb-4 h-100 d-flex flex-column justify-content-between">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <FaQuoteLeft size={24} />
                    <div className="d-flex gap-1">
                      <Image src={heart} alt="heart" width={30} height={30} />
                      <Image src={heart} alt="heart" width={30} height={30} />
                    </div>
                  </div>

                  <p className="review">
                    <strong>After trying multiple apps, this one felt different.</strong>
                    <br />
                    The match quality was way better, and the filters helped a lot. <br />
                    I liked the focus on serious relationships, not hookups. <br />
                    Found someone kind, respectful, and genuine. <br />
                    Definitely worth it if you're done with casual swipes.
                  </p>

                  <div className="d-flex align-items-center section-border pt-3 position-relative">
                    <Image
                      src={item.profileImg}
                      alt={item.name}
                      className="rounded-circle me-3 profile-img"
                      width={40}
                      height={40}
                    />
                    <div className="ms-2">
                      <h6 className="mb-0">{item.name}</h6>
                      <div className="rating d-flex mt-1">
                        {[1, 2, 3].map((star) => (
                           <Image key={star} src={heart} alt="heart" width={30} height={30} />
                          // <FaHeart
                          //   key={star}
                          //   color={star <= item.rating ? "red" : "#ccc"}
                          //   size={16}
                          // />
                        ))}
                      </div>
                    </div>
                    <span className="ms-auto fs-4">→</span>
                  </div>
                </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    
    </div>

    <div className="container-fluid px-0 mx-0">
        <div className="row testi2 my-5 d-flex flex-wrap px-0 mx-0">
        <div className="col-lg-12 col-sm-12 col-12  d-flex  flex-wrap align-items-center justify-content-center px-0 mx-0">
          <div className="col-lg-6 col-md-6 col-12 one d-flex justify-content-left px-0 mx-0">
                  <Image 
                src={love}  // Public folder or remote URL
                alt="Profile Picture"
                className="img-fluid"
                
              />
          </div>
          <div className="col-lg-6 col-md-6 col-12 two">
            <h3 className="mb-5">How Does This App work</h3>
            <div className="timeline">
                {/* Step 1 */}
                <div className="step">
                  <div className="icon">
                    <Image src={user} alt="Create" width={44}  />
                  </div>
                  <div className="text">
                    <h6><strong>1. Create Your Profile</strong></h6>
                    <p className="mb-0 w-75">Add your name, age, photo, and select your purpose:</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="step">
                  <div className="icon">
                    <Image src={link} alt="Send" width={44}  />
                  </div>
                  <div className="text">
                    <h6><strong>2. Send a Connection Request</strong></h6>
                    <p className="mb-0 w-75">Like someone? Tap "Connect" or "Book Now". User can Accept or Decline — no random messages.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="step">
                  <div className="icon">
                    <Image src={calendar} alt="Book" width={44}  />
                  </div>
                  <div className="text">
                    <h6><strong>3. Book a Meeting or Call</strong></h6>
                    <p className="mb-0 w-75">Service Type: Emotional Support / Travel / Date Night / Celebrate a Moment</p>
                  </div>
                  
                </div>
                
              </div>
              <div className="w-100 d-flex gap-3">
                     <Image src={AppStore} alt="Book"  className="img-fluid" />
                     <Image src={GooglePlay} alt="Book"  className="img-fluid" />
                  </div>
 </div>
        </div>

      </div>
    </div>

    </>
  );
}
