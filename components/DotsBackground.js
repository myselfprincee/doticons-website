import React from 'react';
import styles from './DotsBackground.module.css';

const DotsBackground = () => {
  const numCols = 100;
  const numRows = 50;
  const spacing = 1.095;

  const circleElements = [];

  for (let i = 0; i < numCols; i++) {
    for (let j = 0; j < numRows; j++) {
      const cx = i * (100 / numCols) + spacing * i + 50 / numCols;
      const cy = j * (100 / numRows) + spacing * j + 50 / numRows;

      const animationDelay = Math.random() * 1 + 's';
      const animationDuration = Math.random() * 5 + 5 + 's';

      circleElements.push(
        <circle
          key={`${i}-${j}`}
          className={styles.dot}
          style={{
            cx: `${cx}%`,
            cy: `${cy}%`,
            r: '11',
            animation: `dotAnimation ${animationDuration} linear ${animationDelay} infinite`,
          }}
        />
      );
    }
  }

  return (
    <div className={styles.background}>
      <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg">
        <style>
          {`
            @keyframes dotAnimation {
              0% {
                opacity: 0.4;
              }
              100% {
                opacity: 1;
              }
            }
          `}
        </style>
        {circleElements}
      </svg>
    </div>
  );
};

export default DotsBackground;
