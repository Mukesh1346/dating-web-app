'use client';
import React, { useState } from 'react';
import './connctedfriends.css';
import pic1 from "../../Images/user/user1.jpeg";
import pic2 from "../../Images/user/user2.jpeg";
import Image from 'next/image';
import Link from 'next/link';
import { CiLocationOn } from "react-icons/ci";

const ConnectedFriends = () => {
  const [feedbackText, setFeedbackText] = useState("");
  const [positivePoints, setPositivePoints] = useState([]);
  const [improvementPoints, setImprovementPoints] = useState([]);
  const [openPopupId, setOpenPopupId] = useState(null);
  const [requestStatus, setRequestStatus] = useState({});
  const [ratings, setRatings] = useState({});

  const handleRating = (id, value) => {
    setRatings((prev) => ({ ...prev, [id]: value }));
  };

  const handleCheckboxChange = (e, type) => {
    const value = e.target.id;
    const currentState = type === "positive" ? positivePoints : improvementPoints;
    const setState = type === "positive" ? setPositivePoints : setImprovementPoints;

    if (e.target.checked) {
      setState([...currentState, value]);
    } else {
      setState(currentState.filter((v) => v !== value));
    }
  };

  const handleSubmit = (e, itemId) => {
    e.preventDefault();
    const formData = {
      rating: ratings[itemId] || 0,
      feedbackText,
      positivePoints,
      improvementPoints,
    };
    localStorage.setItem(`feedback-${itemId}`, JSON.stringify(formData));
    alert(`Feedback saved for profile ${itemId}`);
    setFeedbackText("");
    setPositivePoints([]);
    setImprovementPoints([]);
    setOpenPopupId(null);
  };

  const originalProfiles = [
    { id: 1, gender: "female", picture: pic1, name: "Juhi Khan", age: 24, State: "UP", City: "Bareli", Date: '04-09-1995', Time: '3:20', Location: 'Cafe Coffee Day, Connaught Place, New Delhi', Price: 2200, isOnline: true, verified: true },
    { id: 2, gender: "female", picture: pic2, name: "Juhi Khan", age: 24, State: "Delhi", City: "Rohini", Date: '04-09-1995', Time: '3:20', Location: 'Cafe Coffee Day, Connaught Place, New Delhi', Price: 2200 },
  ];

  return (
    <>
      <section>
        <h3 className="text-center HeadingSec mb-4">Active / Upcoming Booking</h3>
        <div className="UpcomingBookingSec">
          <div className="BookingMainSec">
            <div className="container">
              <div className="row g-4">
                {originalProfiles.map((item, index) => (
                  <div key={index} className="col-md-6 col-12">
                    <div className="hotel-card-horizontal d-flex align-items-start">
                      <div className="hotel-card-img rounded">
                        <Image src={item.picture} alt={item.name} width={160} height={400} className="img-fluid rounded" />
                        <div className="discount-badge">OTP : 4426</div>
                      </div>
                      <div className="hotel-card-info">
                        <h4 className="hotel-name">{item.name}</h4>
                        <div className="rating">
                          <span className="star">⭐</span> {ratings[item.id] || 4.2} · <span className="text-success">Excellent Location</span>
                        </div>
                        <div className="features">
                          <span><CiLocationOn /> {item.State}</span>
                          <span>🕒 {item.Time}</span>
                          <span>🏨 3-Star</span>
                          <span>🍸 Bar</span>
                        </div>
                        <div className="booking-meta">
                          <p><strong>📅 Date:</strong> {item.Date}</p>
                          <p><strong><CiLocationOn /> Location:</strong> {item.Location}</p>
                        </div>
                        <div className="price-and-book">
                          <span className="price">₹{item.Price}</span>
                          <Link href={`/pages/find-match/${item.id}`} className="book-now-btn">👁️ View</Link>
                        </div>
                        <div className="star-rating mt-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <i
                              key={star}
                              className={`bi ${ratings[item.id] >= star ? 'bi-star-fill' : 'bi-star'}`}
                              onClick={(e) => {
                                e.preventDefault();
                                handleRating(item.id, star);
                              }}
                            ></i>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="meetings-sec container">
        <h2 className="meetings-heading mt-3">💖 People I Met</h2>
        <div className="row">
          {originalProfiles.map((item, index) => (
            <div key={index} className="col-md-3 col-6">
              <div className='ConnectedFriends-match-card position-relative'>
                <div
                  className="feedback-ribbon"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setOpenPopupId(item.id);
                  }}
                  style={{ pointerEvents: 'auto' }}
                >
                  Feedback
                </div>

                {openPopupId === item.id && (
                  <div className='popup-overlay'>
                    <div className='popup-box'>
                      <button className='close-btn' onClick={() => setOpenPopupId(null)}>×</button>
                      <h2>Session Feedback & Rating!</h2>
                      <p>Please rate your experience and leave a message:</p>

                      <form onSubmit={(e) => handleSubmit(e, item.id)}>
                        <div className="star-rating mb-3">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <i
                              key={star}
                              className={`bi ${ratings[item.id] >= star ? 'bi-star-fill' : 'bi-star'} star-icon`}
                              style={{ cursor: 'pointer', color: ratings[item.id] >= star ? '#f1c40f' : '#ccc' }}
                              onClick={(e) => {
                                e.preventDefault();
                                handleRating(item.id, star);
                              }}
                            ></i>
                          ))}
                        </div>

                        <p>Additional feedback</p>
                        <textarea
                          className="feedback-textarea"
                          placeholder="Write your experience..."
                          rows={4}
                          value={feedbackText}
                          onChange={(e) => setFeedbackText(e.target.value)}
                        ></textarea>

                        <div className="feedback-points-popup">
                          <h5 className="mb-3">✅ Select Positive Points</h5>
                          <div className="compact-checkbox-grid">
                            {["polite", "supportive", "friendly", "listener"].map((id) => (
                              <div className="checkbox-item" key={id}>
                                <input type="checkbox" id={id} onChange={(e) => handleCheckboxChange(e, "positive")} />
                                <label htmlFor={id}>{{
                                  polite: "Polite",
                                  supportive: "Emotional Supportive",
                                  friendly: "Friendly & Kind",
                                  listener: "Good Listener"
                                }[id]}</label>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="feedback-points-popup">
                          <h5 className="mb-3">✅ What Could Be Improved</h5>
                          <div className="compact-checkbox-grid">
                            {["rude", "uncomfortable", "emotionally unavailable", "dominated"].map((id) => (
                              <div className="checkbox-item" key={id}>
                                <input type="checkbox" id={id} onChange={(e) => handleCheckboxChange(e, "improvement")} />
                                <label htmlFor={id}>{{
                                  rude: "Was Rude",
                                  uncomfortable: "Uncomfortable",
                                  "emotionally unavailable": "Emotionally Unavailable",
                                  dominated: "Dominated Conversation"
                                }[id]}</label>
                              </div>
                            ))}
                          </div>
                        </div>

                        <br />
                        <button type="submit" className="submit-feedback-btn mt-3">Submit Feedback</button>
                      </form>
                    </div>
                  </div>
                )}

                <Link href={`/pages/find-match/${item.id}`} className='ConnectedFriends-match-link'>
                  <div className="ConnectedFriends-image-wrapper">
                    <Image src={item.picture} alt={item.name} className="ConnectedFriends-img" />
                  </div>
                  <div className="ConnectedFriends-info">
                    <h4 className="name-price mb-1">{item.name}, <span className="price-tag">₹{item.Price}</span></h4>
                    <p className="profession mb-2"><i className="bi bi-briefcase-fill me-1"></i>{item.State}</p>
                    <div className="ConnectedFriends-meta text-start">
                      <div className="mb-1"><span className="label">📅 Date:</span> {item.Date}<span className="label ms-2">🕒 Time:</span> {item.Time}</div>
                      <div className="mb-1"><span className="label">🏙️ City:</span> {item.City}</div>
                      <div><span className="label">📍 Location:</span> {item.Location}</div>
                    </div>
                    <div className="rating-booking-wrapper mt-2 px-2">
                      <button className="btn btn-sm btn-primary rebook-btn">Rebook Again</button>
                    </div>
                  </div>
                </Link>

                <div className="bottom-avatar">
                  <Image src={item.picture} alt="small" className="avatar-img" />
                </div>
                <div className={`online-offline-dot ${item.isOnline ? 'green' : 'red'}`}></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ConnectedFriends;
