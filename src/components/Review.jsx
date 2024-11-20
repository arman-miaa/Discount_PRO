

import React from "react";

// Sample data for reviews
const reviews = [
  {
    reviewer_name: "Sofia Rahman",
    reviewer_photo: "https://example.com/sofia.jpg",
    review:
      "This coupon helped me save a lot on my laptop purchase. Definitely recommend!",
  },
  {
    reviewer_name: "Imran Hossain",
    reviewer_photo: "https://example.com/imran.jpg",
    review: "Great deal, but the minimum purchase requirement is a bit high.",
  },
  {
    reviewer_name: "Ayesha Begum",
    reviewer_photo: "https://example.com/ayesha.jpg",
    review:
      "I love that I can get free shipping on all my orders. Such a great perk!",
  },
];

const Review = () => {
  return (
      <div className="bg-base-200 py-12">
          <div className="text-center md:w-1/2 mx-auto">
              <h1 className="text-3xl font-semibold">Users Reviews</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla laboriosam, laudantium fugit quis reiciendis quibusdam sed alias provident. Distinctio, vero!</p>
          </div>
      <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg shadow-md"
          >
            <img
              src={review.reviewer_photo}
              alt={review.reviewer_name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">{review.reviewer_name}</p>
              <p className="text-gray-600">{review.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
