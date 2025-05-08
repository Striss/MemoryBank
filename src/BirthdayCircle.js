import React, { useEffect, useRef } from "react";
import { 
  getDaysUntilNextBirthday,
  calculateAge, 
  extractBirthDateWithoutYear,
  calculateBirthdayProgress, 
} from "./utils/dateUtils";


const BirthdayCircle = ({ name, birthDate, id }) => {
  const age = calculateAge(birthDate);
  const birthDateWithoutYear = extractBirthDateWithoutYear(birthDate);
  const radius = 60;
  const pathId = `circlePath-${id}`;
  const roughRef = useRef();

  const progress = calculateBirthdayProgress(birthDate);
  const outerRadius = radius + 6;
  const circumference = 2 * Math.PI * outerRadius;
  const progressLength = circumference * progress;

  const daysUntilBirthday = getDaysUntilNextBirthday(birthDate);
  const showCountdown = daysUntilBirthday <= 22;


  return (
    <svg width="150" height="150" viewBox="0 0 150 150">

      
        {/* Outer progress ring (background) */}
        <circle
        cx="75"
        cy="75"
        r={outerRadius}
        fill="none"
        stroke="#eee"
        strokeWidth="5"
      />

      {/* Outer progress ring (progress) */}
      <circle
        cx="75"
        cy="75"
        r={outerRadius}
        fill="none"
        stroke="rgb(8, 214, 250) "
        strokeWidth="12"
        strokeDasharray={circumference}
        strokeDashoffset={circumference - progressLength}
        strokeLinecap="square"
        transform="rotate(-90 75 75)" // Rotate to start from top
      />
      {/* Rough circle container */}

      
      <g ref={roughRef}></g>
      

      {/* Age in center */}
      <text
        x="75"
        y="85"
        textAnchor="middle"
        fontSize="42"
        fill="rgb(55, 22, 97)  "
        fontWeight="bold"
        style={{ 
          fontFamily: "'Fredoka', sans-serif" ,
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
        }}
      >
        {age}
      </text>

      {/* Birth Date (month and day) below the age */}
      <text
        x="75"
        y="103"
        textAnchor="middle"
        fontSize="14"
        fill="#333"
        style={{ fontFamily: "'Fredoka', sans-serif" }}
      >
        {birthDateWithoutYear}
      </text>

      {/* Arc path */}
      <defs>
        <path
          id={pathId}
          d={`
            M ${75 - radius},105
            a ${radius},${radius} 0 0,1 ${radius * 2},0
          `}
        />
      </defs>

      {/* Name curved inside the top of the circle */}
      <text fontSize="22" fill="#333"  style={{ fontFamily: "'Fredoka', sans-serif" }}>
        <textPath href={`#${pathId}`} startOffset="50%" textAnchor="middle">
          {name}
        </textPath>
      </text>

      {showCountdown && (
        <>
          <rect
            x="25"
            y="114"
            width="104"
            height="24"
            rx="6"
            fill="#ffcc00"
            strokeWidth="1"
            stroke="#ff9900"
          />
          <text
            x="75"
            y="130"
            textAnchor="middle"
            fontSize="14"
            fill="#000"
            fontWeight="bold"
          >
            {daysUntilBirthday} days left
          </text>
        </>
      )}

    </svg>
  );
};

export default BirthdayCircle;