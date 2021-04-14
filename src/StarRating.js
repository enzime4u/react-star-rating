import React, { useState } from "react";
import Star from "./Star";

const createArray = (length) => [...Array(length)];

export default function StarRating({ totalStars = 5 }, ...props) {
  const [selectedStars, setSelectedStars] = useState(0);
  const onSelect = (n) => setSelectedStars(n + 1);
  return (
    <div className="wrapper" {...props}>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => onSelect(i)}
        />
      ))}
      <p className="text">
        {selectedStars} out of {totalStars} stars
      </p>
    </div>
  );
}
