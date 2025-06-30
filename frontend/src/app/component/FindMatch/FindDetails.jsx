"use client";
import Image from "next/image";
import { useParams, useRouter } from 'next/navigation';
import React, { useState, useEffect, useRef } from "react";
import SuggestedProfiles from "../FindMatch/suggestedProfiles";
import "../../component/FindMatch/FindDetails.css";
import image from "../../Images/people2.png";
import "../MyProfile/myprofile.css";
import pic from "../../Images/user/user.jpeg";
import pic1 from "../../Images/user/user1.jpeg";
import pic2 from "../../Images/user/user2.jpg";
import pic3 from "../../Images/user/user3.jpeg";
import pic4 from "../../Images/user/user4.jpeg";
import pic5 from "../../Images/user/user5.jpeg";
import pic6 from "../../Images/user/user6.jpeg";
import pic7 from "../../Images/user/user2.jpeg";
import pic8 from "../../Images/user/user8.jpeg";
import pic9 from "../../Images/user/user9.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

const profileDetail = [
  { id: 1, gender: "female", picture: pic1, name: "Juhi Khan", age: 24, profession: "Web Developer", city: "Rohini", state: "Delhi", price: 1200, tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: true, verified: true },
  { id: 2, gender: "female", picture: pic2, name: "Divya Rathor", age: 24, profession: "Web Developer", city: "Rohini", state: "Delhi", price: 1200, tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: false, verified: false },
  { id: 3, gender: "female", picture: pic3, name: "Nirmala Devi", age: 34, profession: "Web Developer", city: "Rohini", state: "Delhi", price: 1200, tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: true, verified: true },
  { id: 4, gender: "female", picture: pic4, name: "Kalpana Chawla", age: 40, profession: "Web Developer", city: "Rohini", state: "Delhi", price: 1200, tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: true, verified: true },
  { id: 5, gender: "female", picture: pic5, name: "Vidya Devi", age: 50, profession: "Web Developer", city: "Rohini", state: "Delhi", price: 1200, tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: false, verified: false },
  { id: 6, gender: "male", picture: pic6, name: "Santosh Singh", age: 70, profession: "Web Developer", city: "Rohini", state: "Delhi", price: 1200, tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: true, verified: true },
  { id: 7, gender: "female", picture: pic7, name: "Anjali yadav", age: 30, profession: "Web Designer", city: "Delhi", state: "Delhi", price: 1200, tags: ["🎨 Art", "🎬 Movies"], isOnline: false, verified: false },
  { id: 8, gender: "female", picture: pic8, name: "Kavita Sharma", age: 28, profession: "Book Writer", city: "Gurgaon", state: "Haryana", price: 1200, tags: ["📖 Reading", "☕ Coffee"], isOnline: true, verified: true },
  { id: 9, gender: "female", picture: pic9, name: "Priya Sharma", age: 35, profession: "Doctor", city: "Noida", state: "UP", price: 1200, tags: ["💉 Health", "💪 Fitness"], isOnline: true, verified: true },
  { id: 10, gender: "female", picture: pic1, name: "Rita Kapoor", age: 38, profession: "Teacher", city: "Ghaziabad", state: "UP", price: 1200, tags: ["📚 Teaching", "🎶 Music"], isOnline: false, verified: false },
  { id: 11, gender: "female", picture: pic2, name: "Neha Singh", age: 29, profession: "Engineer", city: "Faridabad", state: "Haryana", price: 1200, tags: ["⚙️ Machines", "📈 Stocks"], isOnline: true, verified: true },
  { id: 12, gender: "female", picture: pic3, name: "Sneha Sharma", age: 31, profession: "Chef", city: "Delhi", state: "Delhi", price: 1200, tags: ["🍜 Cooking", "✈️ Travel"], isOnline: false, verified: false },
  { id: 13, gender: "female", picture: pic4, name: "Payal kapoor", age: 26, profession: "Photographer", city: "Delhi", state: "Delhi", price: 1200, tags: ["📸 Photos", "🌄 Hiking"], isOnline: true, verified: true },
  { id: 14, gender: "female", picture: pic5, name: "Juhi Khan", age: 24, profession: "Web Developer", city: "Rohini", state: "Delhi", price: 1200, tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: true, verified: true },
  { id: 15, gender: "female", picture: pic6, name: "Divya Rathor", age: 24, profession: "Web Developer", city: "Rohini", state: "Delhi", price: 1200, tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: false, verified: false },
  { id: 16, gender: "female", picture: pic7, name: "Nirmala Devi", age: 34, profession: "Web Developer", city: "Rohini", state: "Delhi", price: 1200, tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: true, verified: true },
  { id: 17, gender: "female", picture: pic8, name: "Kalpana Chawla", age: 40, profession: "Web Developer", city: "Rohini", state: "Delhi", price: 1200, tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: true, verified: true },
  { id: 18, gender: "female", picture: pic9, name: "Vidya Devi", age: 50, profession: "Web Developer", city: "Rohini", state: "Delhi", price: 1200, tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: false, verified: false },
  { id: 19, gender: "male", picture: pic1, name: "Santosh Singh", age: 70, profession: "Web Developer", city: "Rohini", state: "Delhi", price: 1200, tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: true, verified: true },
  { id: 20, gender: "female", picture: pic2, name: "Anjali", age: 30, profession: "Designer", city: "Delhi", state: "Delhi", price: 1200, tags: ["🎨 Art", "🎬 Movies"], isOnline: false, verified: false },
  { id: 21, gender: "female", picture: pic3, name: "Kavita", age: 28, profession: "Writer", city: "Gurgaon", state: "Haryana", price: 1200, tags: ["📖 Reading", "☕ Coffee"], isOnline: true, verified: true },
  { id: 22, gender: "female", picture: pic4, name: "Priya", age: 35, profession: "Doctor", city: "Noida", state: "UP", price: 1200, tags: ["💉 Health", "💪 Fitness"], isOnline: true, verified: true },
  { id: 23, gender: "female", picture: pic5, name: "Rita", age: 38, profession: "Teacher", city: "Ghaziabad", state: "UP", price: 1200, tags: ["📚 Teaching", "🎶 Music"], isOnline: false, verified: false },
  { id: 24, gender: "female", picture: pic6, name: "Neha", age: 29, profession: "Engineer", city: "Faridabad", state: "Haryana", price: 1200, tags: ["⚙️ Machines", "📈 Stocks"], isOnline: true, verified: true },
  { id: 25, gender: "female", picture: pic7, name: "Sneha", age: 31, profession: "Chef", city: "Delhi", state: "Delhi", price: 1200, tags: ["🍜 Cooking", "✈️ Travel"], isOnline: false, verified: false },
  { id: 26, gender: "female", picture: pic8, name: "Payal", age: 26, profession: "Photographer", city: "Delhi", state: "Delhi", price: 1200, tags: ["📸 Photos", "🌄 Hiking"], isOnline: true, verified: true },
];

const FindDetails = () => {
  const [activeBtn, setActiveBtn] = useState(null);
  const [friend, setFriend] = useState(false);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [showBooking, setShowBooking] = useState(false);
  const [date, setDate] = useState("");
  const [place, setPlace] = useState("");
  const [time, setTime] = useState("");
  const [surprise, setSurprise] = useState("");
  const [note, setNote] = useState("");
  const [vibe, setVibe] = useState("");
  const [thankYou, setThankYou] = useState(false);
  const [showThankYouPopup, setShowThankYouPopup] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuggested, setShowSuggested] = useState(false);
  const suggestedRef = useRef(null);

  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (id) {
      const found = profileDetail.find((p) => p.id === parseInt(id));
      setProfile(found);
     
      
    }
  }, [id]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowSuggested(true);
          
        }
      },
      { threshold: 0.2 }
    );
    if (suggestedRef.current) {
      observer.observe(suggestedRef.current);
    }
    return () => {
      if (suggestedRef.current) {
        observer.unobserve(suggestedRef.current);
      }
    };
  }, []);

  if (!profile) {
    return <div className="text-center py-5">Loading profile details...</div>;
  }

  const handleCancelDate = () => {
    setDate("");
    setTime("");
    setPlace("");
    setVibe("");
    setSurprise("");
    setNote("");
    setShowBooking(false);
    setThankYou(false); // Reset booking status
    setCurrentStep(1);
  };

  const handleToggle = () => setFriend((prev) => !prev);

  const handleBooking = () => {
    setShowBooking(true);
    setCurrentStep(1);
  };

  const handleClose = () => {
    setShowBooking(false);
    setDate("");
    setPlace("");
    setTime("");
    setVibe("");
    setSurprise("");
    setNote("");
    setCurrentStep(1);
  };

  const generateMeetingCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const handleSubmit = () => {
    if (!surprise || !note) {
      alert("Please fill all fields before submitting.");
      return;
    }
    setThankYou(true);
    setShowThankYouPopup(true);
    setShowBooking(false);
  };

  const profileImages = [pic, pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9];

  const aboutInfo = [
    { information: "A user profile is a digital representation of an individual's identity and preferences within a system." },
    { label: "Live in", value: "Tbilisi, Georgia" },
    { label: "Hometown", value: "Saint Petersburg, Russia" },
    { label: "Work as", value: "Businesswoman" },
    { label: "Education", value: "Bachelor of Software Engineering" },
    { label: "Languages", value: "English, Russian" },
    { label: "Relationship", value: "Single" },
    { label: "Family plans", value: "No kids" },
    { label: "Smoke", value: "Sometimes" },
    { label: "Drink", value: "Sometimes" },
    { label: "Marijuana", value: "Yes" },
  ];
  const leftItems = aboutInfo.slice(1, 6);
  const rightItems = aboutInfo.slice(6);

  if (!profileDetail || profileDetail.length === 0) {
    return (
      <section className="profile-match-detail-sec text-center py-5">
        <div className="container">
          <p>Profile details not available.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="profile-match-detail-sec">
      <div className="container">
        <div className="my-profile-section">
          <div className="myprofile-main">
            <div className="ribbon"> ₹ {profile.price}</div>
            <div className="row">
              <div className="col-md-4">
                <div className="my-main-image">
                  <Image src={profile.picture} className="img-fluid" alt="profile-image" />
                </div>
              </div>
              <div className="col-md-8">
                <div className="myprofile-content">
                  <h4 className="profile-name">
                    {profile.name}, <span>{profile.age}</span>      
                    {profile.verified && <i className="bi bi-patch-check text-success"></i>}
                  </h4>
                  <div className="like-dislike-btn">
                    <button
                      className={activeBtn === "like" ? "active like-btn" : "like-btn"}
                      onClick={() => setActiveBtn("like")}
                    >
                      <i className="bi bi-hand-thumbs-up"></i>
                    </button>
                    <button
                      className={activeBtn === "dislike" ? "active dislike-btn" : "dislike-btn"}
                      onClick={() => setActiveBtn("dislike")}
                    >
                      <i className="bi bi-hand-thumbs-down"></i>
                    </button>
                  </div>
                  <div className="d-flex">
                    <p className="profile-location">
                      <i className="bi bi-geo-alt"></i> {profile.city}, {profile.state}
                    </p>
                  </div>
                  <p className="profile-description">{profile.profession}</p>
                  <ul className="profile-interest">
                    {profile.tags.map((tag, i) => (
                      <li key={i}>{tag}</li>
                    ))}
                  </ul>
                </div>

                <hr />
                <div className="FindDetailsBtnSec">
                  <button
                    onClick={handleToggle}
                    className={`MakeFriendbtn ${friend ? "theme-bg" : "MakeFriendbtn"}`}
                  >
                    {friend ? <i className="bi bi-person-dash fs-3"></i> : <i className="bi bi-person-add fs-4"></i>}
                  </button>
                  <Link href="/pages/profile?tab=message" className="messagebtn">
                    <button className="messagebtn">
                      <span className="justify-content-center text-light pb-3" style={{ fontSize: "14px" }}>
                        <i className="bi bi-chat-left-dots text-light fs-5"></i>
                      </span>
                    </button>
                  </Link>
                  <div>
                    {thankYou ? (
                      <button className="Bookingbtn cancel" onClick={handleCancelDate}>
                        <span style={{ fontSize: "18px", color: "white" }}>Cancel Date</span>
                      </button>
                    ) : (
                      <button className="Bookingbtn" onClick={handleBooking} disabled={showBooking}>
                        <span style={{ fontSize: "18px" }}>Let's Date</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-own-images-sec">
            <div className="own-profile-images">
              <h5 className="mb-3 font-semibold">Photos</h5>
              <Swiper modules={[Navigation]} spaceBetween={10} slidesPerView={5} navigation className="photo-slider">
                {profileImages.map((img, i) => (
                  <SwiperSlide key={i}>
                    <Image
                      src={img}
                      alt={`Photo ${i + 1}`}
                      className="profile-image-slide"
                      onClick={() => setZoomedImage(img)}
                      style={{ cursor: "pointer" }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {zoomedImage && (
            <div className="zoom-modal" onClick={() => setZoomedImage(null)}>
              <div className="zoom-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={() => setZoomedImage(null)}>X</button>
                <Image src={zoomedImage} alt="Zoomed" className="zoomed-image" />
              </div>
            </div>
          )}

          {showBooking && (
            <div className="booking-popup animate">
              <div className="booking-form">
                <button className="close-booking" onClick={handleClose}>×</button>
                <h4 className="booking-title">Book Your Date</h4>
                {currentStep === 1 && (
                  <>
                    <label className="booking-label">Date of Your Date</label>
                    <input
                      type="date"
                      className="booking-input"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                    />
                    <label className="booking-label">Preferred Time</label>
                    <input
                      type="time"
                      className="booking-input"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                    />
                  </>
                )}
                {currentStep === 2 && (
                  <>
                    <label className="booking-label">Meeting Place</label>
                    <input
                      type="text"
                      className="booking-input"
                      placeholder="e.g., Cafe Coffee Day, Park..."
                      value={place}
                      onChange={(e) => setPlace(e.target.value)}
                    />
                    <label className="booking-label">What's the vibe for this date?</label>
                    <select
                      className="booking-input"
                      value={vibe}
                      onChange={(e) => setVibe(e.target.value)}
                    >
                      <option value="">Choose a vibe</option>
                      <option value="romantic">Romantic</option>
                      <option value="funny">Chill & Fun</option>
                      <option value="adventurous">Adventurous</option>
                      <option value="classy">Classy</option>
                      <option value="mystery">Keep it a mystery</option>
                    </select>
                  </>
                )}
                {currentStep === 3 && (
                  <>
                    <label className="booking-label">Anything special planned?</label>
                    <textarea
                      className="booking-textarea"
                      value={surprise}
                      onChange={(e) => setSurprise(e.target.value)}
                    />
                    <label className="booking-label">Any preferences or notes?</label>
                    <textarea
                      className="booking-textarea"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                    />
                  </>
                )}

                <div className="booking-buttons">
                  {currentStep > 1 && (
                    <button className="booking-btn back" onClick={() => setCurrentStep(currentStep - 1)}>
                      Back
                    </button>
                  )}
                  {currentStep < 3 ? (
                    <button
                      className="booking-btn next"
                      onClick={() => {
                        if (currentStep === 1 && (!date || !time)) {
                          alert("Please fill date and time before proceeding.");
                          return;
                        }
                        if (currentStep === 2 && (!place || !vibe)) {
                          alert("Please fill meeting place and vibe before proceeding.");
                          return;
                        }
                        setCurrentStep(currentStep + 1);
                      }}
                    >
                      Next
                    </button>
                  ) : (
                    <button className="booking-btn submit" onClick={handleSubmit}>
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {showThankYouPopup && (
            <div className="thank-you-popup-overlay" onClick={() => {}}>
              <div className="thank-you-popup" onClick={(e) => e.stopPropagation()}>
                <h3>🎉 Thank You!</h3>
                <b>Meeting Code: <span className="meeting-code bg-warning p-2 mb-3 rounded">{generateMeetingCode()}</span></b>
                <p className="mt-3">We hope your meeting will be a success ❤️</p>
                <button onClick={() => setShowThankYouPopup(false)}>Close</button>
              </div>
            </div>
          )}

          <div className="profile-about-section">
            <h5 className="mb-3 font-semibold">About</h5>
            <div className="row">
              <div className="col-md-12"><p>{aboutInfo[0].information}</p></div>
              <div className="col-md-6">{leftItems.map((item, index) => (<p key={index}><strong>{item.label}:</strong> {item.value}</p>))}</div>
              <div className="col-md-6">{rightItems.map((item, index) => (<p key={index}><strong>{item.label}:</strong> {item.value}</p>))}</div>
            </div>
          </div>
        </div>

        <div className="suggested-profiles" ref={suggestedRef}>
          <SuggestedProfiles />
        </div>
      </div>
    </section>
  );
};

export default FindDetails;















// "use client";
// import Image from "next/image";
// import { useParams } from 'next/navigation';
// import React, { useState, useEffect, useRef } from "react";
// import SuggestedProfiles from "../FindMatch/suggestedProfiles";
// import "../../component/FindMatch/FindDetails.css";
// import image from "../../Images/people2.png";
// import "../MyProfile/myprofile.css";
// import pic from "../../Images/user/user.jpeg";
// import pic1 from "../../Images/user/user1.jpeg";
// import pic2 from "../../Images/user/user2.jpg";
// import pic3 from "../../Images/user/user3.jpeg";
// import pic4 from "../../Images/user/user4.jpeg";
// import pic5 from "../../Images/user/user5.jpeg";
// import pic6 from "../../Images/user/user6.jpeg";
// import pic7 from "../../Images/user/user2.jpeg";
// import pic8 from "../../Images/user/user8.jpeg";
// import pic9 from "../../Images/user/user9.jpeg";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import Link from "next/link";

// // profileDetail is moved here so it's available for filtering
// const profileDetail = [
//   { id: 1, gender: "female", picture: pic1, name: "Juhi Khan", age: 24, profession: "Web Developer", city: "Rohini", state: "Delhi", price: 1200, tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: true, verified: true },
//   { id: 2, gender: "female", picture: pic2, name: "Divya Rathor", age: 24, profession: "Web Developer", city: "Rohini", state: "Delhi", price: 1200, tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: false, verified: false },
//   { id: 3, gender: "female", picture: pic3, name: "Nirmala Devi", age: 34, profession: "Web Developer", city: "Rohini", state: "Delhi", price: 1200, tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: true, verified: true },
//   { id: 4, gender: "female", picture: pic4, name: "Kalpana Chawla", age: 40, profession: "Web Developer", city: "Rohini", state: "Delhi", price: 1200, tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: true, verified: true },
//   { id: 5, gender: "female", picture: pic5, name: "Vidya Devi", age: 50, profession: "Web Developer", city: "Rohini", state: "Delhi", price: 1200, tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: false, verified: false },
//   { id: 6, gender: "male", picture: pic6, name: "Santosh Singh", age: 70, profession: "Web Developer", city: "Rohini", state: "Delhi", price: 1200, tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: true, verified: true },
//   { id: 7, gender: "female", picture: pic1, name: "Anjali yadav", age: 30, profession: "Web Designer", city: "Delhi", state: "Delhi", price: 1200, tags: ["🎨 Art", "🎬 Movies"], isOnline: false, verified: false },
//   { id: 8, gender: "female", picture: pic2, name: "Kavita Sharma", age: 28, profession: "Book Writer", city: "Gurgaon", state: "Haryana", price: 1200, tags: ["📖 Reading", "☕ Coffee"], isOnline: true, verified: true },
//   { id: 9, gender: "female", picture: pic3, name: "Priya Sharma", age: 35, profession: "Doctor", city: "Noida", state: "UP", price: 1200, tags: ["💉 Health", "💪 Fitness"], isOnline: true, verified: true },
//   { id: 10, gender: "female", picture: pic4, name: "Rita Kapoor", age: 38, profession: "Teacher", city: "Ghaziabad", state: "UP", price: 1200, tags: ["📚 Teaching", "🎶 Music"], isOnline: false, verified: false },
//   { id: 11, gender: "female", picture: pic5, name: "Neha Singh", age: 29, profession: "Engineer", city: "Faridabad", state: "Haryana", price: 1200, tags: ["⚙️ Machines", "📈 Stocks"], isOnline: true, verified: true },
//   { id: 12, gender: "female", picture: pic6, name: "Sneha Sharma", age: 31, profession: "Chef", city: "Delhi", state: "Delhi", price: 1200, tags: ["🍜 Cooking", "✈️ Travel"], isOnline: false, verified: false },
//   { id: 13, gender: "female", picture: pic1, name: "Payal kapoor", age: 26, profession: "Photographer", city: "Delhi", state: "Delhi", price: 1200, tags: ["📸 Photos", "🌄 Hiking"], isOnline: true, verified: true },
//   { id: 14, gender: "female", picture: pic1, name: "Juhi Khan", age: 24, profession: "Web Developer", city: "Rohini", state: "Delhi", price: 1200, tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: true, verified: true },
//   { id: 15, gender: "female", picture: pic2, name: "Divya Rathor", age: 24, profession: "Web Developer", city: "Rohini", state: "Delhi", price: 1200, tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: false, verified: false },
//   { id: 16, gender: "female", picture: pic3, name: "Nirmala Devi", age: 34, profession: "Web Developer", city: "Rohini", state: "Delhi", price: 1200, tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: true, verified: true },
//   { id: 17, gender: "female", picture: pic4, name: "Kalpana Chawla", age: 40, profession: "Web Developer", city: "Rohini", state: "Delhi", price: 1200, tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: true, verified: true },
//   { id: 18, gender: "female", picture: pic5, name: "Vidya Devi", age: 50, profession: "Web Developer", city: "Rohini", state: "Delhi", price: 1200, tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: false, verified: false },
//   { id: 19, gender: "male", picture: pic6, name: "Santosh Singh", age: 70, profession: "Web Developer", city: "Rohini", state: "Delhi", price: 1200, tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"], isOnline: true, verified: true },
//   { id: 20, gender: "female", picture: pic1, name: "Anjali", age: 30, profession: "Designer", city: "Delhi", state: "Delhi", price: 1200, tags: ["🎨 Art", "🎬 Movies"], isOnline: false, verified: false },
//   { id: 21, gender: "female", picture: pic2, name: "Kavita", age: 28, profession: "Writer", city: "Gurgaon", state: "Haryana", price: 1200, tags: ["📖 Reading", "☕ Coffee"], isOnline: true, verified: true },
//   { id: 22, gender: "female", picture: pic3, name: "Priya", age: 35, profession: "Doctor", city: "Noida", state: "UP", price: 1200, tags: ["💉 Health", "💪 Fitness"], isOnline: true, verified: true },
//   { id: 23, gender: "female", picture: pic4, name: "Rita", age: 38, profession: "Teacher", city: "Ghaziabad", state: "UP", price: 1200, tags: ["📚 Teaching", "🎶 Music"], isOnline: false, verified: false },
//   { id: 24, gender: "female", picture: pic5, name: "Neha", age: 29, profession: "Engineer", city: "Faridabad", state: "Haryana", price: 1200, tags: ["⚙️ Machines", "📈 Stocks"], isOnline: true, verified: true },
//   { id: 25, gender: "female", picture: pic6, name: "Sneha", age: 31, profession: "Chef", city: "Delhi", state: "Delhi", price: 1200, tags: ["🍜 Cooking", "✈️ Travel"], isOnline: false, verified: false },
//   { id: 26, gender: "female", picture: pic1, name: "Payal", age: 26, profession: "Photographer", city: "Delhi", state: "Delhi", price: 1200, tags: ["📸 Photos", "🌄 Hiking"], isOnline: true, verified: true },
// ];

// const FindDetails = () => {
//   const { id } = useParams();
//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     if (id) {
//       const found = profileDetail.find((p) => p.id === parseInt(id));
//       setProfile(found);
//     }
//   }, [id]);

//   if (!profile) {
//     return <div className="text-center py-5">Loading profile details...</div>;
//   }

//   // Rest of your component (UI, buttons, booking, image zoom, etc.) stays the same
//   return (
//     <section className="profile-match-detail-sec">
//       <div className="container">
//         <div className="my-profile-section">
//           <div className="myprofile-main">
//             <div className="ribbon">₹ {profile.price}</div>
//             <div className="row">
//               <div className="col-md-4">
//                 <div className="my-main-image">
//                   <Image src={profile.picture} className="img-fluid" alt="profile-image" />
//                 </div>
//               </div>
//               <div className="col-md-8">
//                 <div className="myprofile-content">
//                   <h4 className="profile-name">
//                     {profile.name}, <span>{profile.age}</span>
//                     {profile.verified && <i className="bi bi-patch-check text-success"></i>}
//                   </h4>
//                   <div className="d-flex">
//                     <p className="profile-location">
//                       <i className="bi bi-geo-alt"></i> {profile.city}, {profile.state}
//                     </p>
//                   </div>
//                   <p className="profile-description">Profession: {profile.profession}</p>
//                   <ul className="profile-interest">
//                     {profile.tags.map((tag, index) => (
//                       <li key={index}>{tag}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="suggested-profiles">
//           <SuggestedProfiles />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FindDetails;
