"use client";
import React, { useEffect, useState } from "react";
import "./showfeedbacks.css";
import pic1 from "../../Images/user/user1.jpeg";
import pic2 from "../../Images/user/user2.jpeg";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";

export default function ShowFeedbacks() {
  const [allFeedback, setAllFeedback] = useState([]);

  const originalProfiles = [
    {
      id: 1,
      gender: "female",
      picture: pic1,
      name: "Juhi Khan",
      age: 24,
      State: "UP",
      City: "Bareli",
      Date: "04-09-1995",
      Time: "3:20",
      Location: "Cafe Coffee Day, Connaught Place, New Delhi",
      Price: 2200,
      isOnline: true,
      verified: true,
    },
    {
      id: 2,
      gender: "female",
      picture: pic2,
      name: "Juhi Khan",
      age: 24,
      State: "Delhi",
      City: "Rohini",
      Date: "04-09-1995",
      Time: "3:20",
      Location: "Cafe Coffee Day, Connaught Place, New Delhi",
      Price: 2200,
    },
  ];

  useEffect(() => {
    const keys = Object.keys(localStorage).filter((key) =>
      key.startsWith("feedback-")
    );

    const feedbacks = keys.map((key) => {
      const id = parseInt(key.replace("feedback-", ""));
      const data = JSON.parse(localStorage.getItem(key));
      return { id, ...data };
    });

    setAllFeedback(feedbacks);
  }, []);

  if (allFeedback.length === 0)
    return <p className="text-center my-5">📝 No Feedback Data Saved Yet</p>;

  return (
    <div>
      <section>
        <h3 className="text-center HeadingTopSec mb-4">💬 All Feedbacks</h3>
        <div className="FeedbackSec">
          <div className="BookingMainSec">
            <div className="container">
              <div className="row g-4">
                {allFeedback.map((feedback) => {
                  const profile = originalProfiles.find(
                    (p) => p.id === parseInt(feedback.id)
                  );
                  if (!profile) return null;

                  return (
                    <div key={profile.id} className="col-md-6 col-12">
                      <div className="feedback-card-horizontal d-flex align-items-start">
                        <div className="feedback-card-img rounded">
                          <Image
                            src={profile.picture}
                            alt={profile.name}
                            width={160}
                            height={400}
                            className="img-fluid rounded"
                          />
                          <div className="discount-badge">OTP : 4426</div>
                        </div>

                        <div className="feedback-card-info">
                          <h4 className="feedback-name">{profile.name}</h4>
                          <div className="features">
                            <span>
                              <CiLocationOn /> {profile.State}
                            </span>
                            <span>🕒 {profile.Time}</span>
                            <span>🏨 3-Star</span>
                            <span>🍸 Bar</span>
                          </div>
                          <div className="booking-meta">
                            <p>
                              <strong>📅 Date:</strong> {profile.Date}
                            </p>
                            <p className="mt-2">
                            <strong>📝 Feedback:</strong>{" "}
                            {feedback.feedbackText || "No text given"}
                          </p>

                          <p>
                            <strong>⚠️ Improvements:</strong>{" "}
                            {feedback.improvementPoints?.join(", ") || "None"}
                          </p>
                          </div>

                          <div className="price-and-book">
                          <p>
                            <strong>✅ Positive Points:</strong>{" "}
                            {feedback.positivePoints?.join(", ") || "None"}
                          </p>
                            <Link
                              href={`/pages/find-match/${profile.id}`}
                              className="book-now-btn"
                            >
                              👁️ View
                            </Link>
                          </div>

                          {/* ⭐ Star Rating */}
                          <div className="star-rating mt-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <i
                                key={star}
                                className={`bi ${
                                  feedback.rating >= star
                                    ? "bi-star-fill"
                                    : "bi-star"
                                }`}
                                style={{
                                  color:
                                    feedback.rating >= star
                                      ? "#f1c40f"
                                      : "#ccc",
                                }}
                              ></i>
                            ))}
                          </div>

                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
