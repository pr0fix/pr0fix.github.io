import React, { useMemo } from "react";
import classes from "./Stars.module.css";

const createStars = (amount: number) => {
  const stars = [];
  const colors = ["#ffffff", "#fffaf0", "#f0f8ff", "#ffe4e1"];

  for (let i = 0; i <= amount; i++) {
    const size = Math.random() * 3 + 1;
    stars.push(
      <div
        key={i}
        className={classes.star}
        style={
          {
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            animationDelay: `${Math.random() * 2}s`,
            opacity: Math.random() * 0.5 + 0.5,
            filter: `brightness(${Math.random() * 0.5 + 0.5})`,
          } as React.CSSProperties
        }
      ></div>
    );
  }
  return stars;
};

const Star: React.FC = () => {
  const stars = useMemo(() => createStars(450), []);

  return <div className={classes.starContainer}>{stars}</div>;
};

export default Star;
