import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import { getReviews } from '../../utils/api';
import moment from 'moment';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function loadReviews() {
      const data = await getReviews();
      console.log("Reviews API returned:", data);

      if (Array.isArray(data)) {
        setReviews(data);
      } else if (data && Array.isArray(data.results)) {
        setReviews(data.results);
      } else {
        setReviews([]);
      }
    }
    loadReviews();
  }, []);

  const settings = {
    dots: true,
    infinite: reviews.length > 1,  // ✅ disable infinite if only one
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: reviews.length > 1,  // ✅ disable autoplay if only one
    autoplaySpeed: 5000,
  };

  return (
    <div className="max-w-4xl mx-auto py-14 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">What Our Guests Say</h2>
      {reviews.length === 0 && <p className="text-gray-500">No reviews yet.</p>}

      {reviews.length > 0 && (
        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review.id} className="p-8 bg-white rounded-xl shadow-md">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < review.star ? 'text-yellow-400 text-2xl' : 'text-gray-300 text-2xl'}>
                    ★
                  </span>
                ))}
              </div>
              <p className="italic text-lg md:text-xl mb-6 max-w-2xl mx-auto">
                "{review.message}"
              </p>
              <div className="flex flex-col items-center">
                {review.reviewer_image && (
                  <img
                    src={review.reviewer_image}
                    alt={review.reviewer_name}
                    className="w-16 h-16 rounded-full mb-2 object-cover"
                  />
                )}
                <p className="font-semibold">{review.reviewer_name}</p>
                <p className="text-gray-500 text-sm">{moment(review.created_at).fromNow()}</p>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}
