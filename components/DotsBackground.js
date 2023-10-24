// import React from 'react';
// import styles from './DotsBackground.module.css';

// const DotsBackground = () => {
//   return (
//     <div className={styles.background}>
//       <svg className={styles.svg} xmlns="http://www.w3.org/TR/SVG">
//         {/* Add your dots here */}
//         <circle className={styles.dot} cx="50%" cy="50%" r="3" />
//         <circle className={styles.dot} cx="50%" cy="50%" r="3" />
//         <circle className={styles.dot} cx="30%" cy="70%" r="4" />
//         <circle className={styles.dot} cx="80%" cy="40%" r="5" />
//         <circle className={styles.dot} cx="50%" cy="50%" r="3" />
//         <circle className={styles.dot} cx="50%" cy="50%" r="3" />
//         <circle className={styles.dot} cx="30%" cy="70%" r="4" />
//         <circle className={styles.dot} cx="80%" cy="40%" r="5" />
//         <circle className={styles.dot} cx="50%" cy="50%" r="3" />
//         <circle className={styles.dot} cx="50%" cy="50%" r="3" />
//         <circle className={styles.dot} cx="30%" cy="70%" r="4" />
//         <circle className={styles.dot} cx="80%" cy="40%" r="5" />
//         <circle className={styles.dot} cx="50%" cy="50%" r="3" />
//         <circle className={styles.dot} cx="50%" cy="50%" r="3" />
//         <circle className={styles.dot} cx="30%" cy="70%" r="4" />
//         <circle className={styles.dot} cx="80%" cy="40%" r="5" />
//         {/* Add more dots as needed */}
//       </svg>
//     </div>
//   );
// };

// export default DotsBackground;

import React from 'react';
import styles from './DotsBackground.module.css';

const DotsBackground = () => {
  const numCols = 100; // Number of columns
  const numRows = 50; // Number of rows
  const spacing = 1.095; // Spacing between circles

  const circleElements = [];

  // Calculate circle positions
  for (let i = 0; i < numCols; i++) {
    for (let j = 0; j < numRows; j++) {
      const cx = (i * (100 / numCols)) + (spacing * i) + (50 / numCols);
      const cy = (j * (100 / numRows)) + (spacing * j) + (50 / numRows);

      circleElements.push(
        <circle
          key={`${i}-${j}`}
          className={styles.dot}
          cx={`${cx}%`}
          cy={`${cy}%`}
          r="11"
        />
      );
    }
  }

  return (
    <div className={styles.background}>
      <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg">
        {circleElements}
      </svg>
    </div>
  );
};

export default DotsBackground;

