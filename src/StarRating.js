import React, { useState } from "react";
import Star from "./Star";

const createArray = (length) => [...Array(length)];

export default function StarRating({ totalStars = 5 }, ...props) {
  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <div className="wrapper" style={{ padding: 10 }} {...props}>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p className="text">
        {selectedStars} out of {totalStars} stars
      </p>
    </div>
  );
}
