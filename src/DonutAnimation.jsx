import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSVG = () => {
  // Calculate outward positions for circles
  const circleAnimations = {
    c1: { initial: { cx: 568.5, cy: 204.5 }, outward: { cx: 600, cy: 170 } },
    c2: { initial: { cx: 548.5, cy: 184.5 }, outward: { cx: 570, cy: 150 } },
    c3: { initial: { cx: 758.5, cy: 344.5 }, outward: { cx: 820, cy: 320 } },
    c4: { initial: { cx: 788.5, cy: 344.5 }, outward: { cx: 850, cy: 330 } },
    c5: { initial: { cx: 738.5, cy: 324.5 }, outward: { cx: 790, cy: 290 } },
  };

  return (
    <svg 
      width="1000" 
      height="1000" 
      viewBox="0 0 1000 1000" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <mask id="pathMask">
          <path d="M517.909 284.366L517.106 157.729C517.048 148.613 524.622 141.256 533.705 142.038C664.366 153.291 775.55 236.848 826.841 353.195C830.531 361.567 825.978 371.141 817.288 374.004L697.899 413.329C690.242 415.851 681.961 412.246 678.02 405.214C647.525 350.805 593.769 311.465 532.24 300.703C524.186 299.295 517.961 292.543 517.909 284.366Z" fill="#E3E6E8"/>
        </mask>
        <linearGradient id="paint0_linear_1_132" x1="516.734" y1="417.83" x2="517.277" y2="417.116" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0"/>
          <stop offset="1" stopColor="#FFCD3D"/>
        </linearGradient>
      </defs>
      
      {/* Circles - animated outward then scaled down and faded */}
      {Object.entries(circleAnimations).map(([id, positions]) => (
        <motion.circle
          key={id}
          id={id}
          r="8.5"
          fill="#FFCD3D"
          initial={{
            cx: positions.initial.cx,
            cy: positions.initial.cy,
            scale: 1,
            opacity: 1
          }}
          animate={{
            cx: [positions.initial.cx, positions.outward.cx, positions.outward.cx + (positions.outward.cx - positions.initial.cx) * 0.3],
            cy: [positions.initial.cy, positions.outward.cy, positions.outward.cy + (positions.outward.cy - positions.initial.cy) * 0.3],
            scale: [1, 1, 0],
            opacity: [1, 1, 0]
          }}
          transition={{
            times: [0, 0.65, 1],
            duration: 2.7,
            delay: 1.8,
            ease: "easeOut"
          }}
        />
      ))}
      
      {/* Static paths */}
      <path id="5" d="M479.852 284.624L480.655 157.987C480.712 148.871 473.138 141.513 464.056 142.295C333.395 153.548 222.211 237.106 170.92 353.453C167.229 361.825 171.783 371.399 180.473 374.261L299.862 413.587C307.519 416.109 315.8 412.504 319.741 405.471C350.236 351.063 403.992 311.723 465.52 300.961C473.574 299.552 479.8 292.8 479.852 284.624Z" fill="#E3E6E8"/>
      <path id="4" d="M290.738 452.232L170.547 412.335C161.895 409.463 152.557 414.393 150.494 423.273C120.82 551.016 165.93 682.579 260.733 767.313C267.554 773.41 278.067 772.038 283.475 764.657L357.769 663.264C362.533 656.761 361.664 647.772 356.193 641.85C313.872 596.035 293.068 532.753 301.847 470.91C302.996 462.815 298.498 454.808 290.738 452.232Z" fill="#E3E6E8"/>
      <path id="3" d="M389.75 685.161L315.551 787.786C310.21 795.174 312.103 805.562 319.951 810.2C432.854 876.923 571.893 873.472 681.217 808.545C689.083 803.873 690.937 793.434 685.525 786.057L611.172 684.707C606.404 678.207 597.569 676.332 590.276 679.768C533.853 706.35 467.244 707.157 410.905 680.184C403.531 676.654 394.541 678.535 389.75 685.161Z" fill="#E3E6E8"/>
      <path id="2" d="M709.068 449.232L829.259 409.335C837.911 406.463 847.249 411.393 849.312 420.273C878.986 548.016 833.876 679.579 739.074 764.313C732.252 770.41 721.739 769.038 716.331 761.657L642.038 660.264C637.273 653.761 638.142 644.772 643.613 638.85C685.934 593.035 706.738 529.753 697.959 467.91C696.81 459.815 701.308 451.808 709.068 449.232Z" fill="#E3E6E8"/>
      
      {/* Path #1 - scaled then back with spring */}
      <motion.path
        id="1"
        d="M517.409 284.624L516.606 157.987C516.548 148.871 524.122 141.513 533.205 142.295C663.866 153.548 775.05 237.106 826.341 353.453C830.031 361.825 825.478 371.399 816.788 374.261L697.399 413.587C689.742 416.109 681.461 412.504 677.52 405.471C647.025 351.063 593.269 311.723 531.74 300.961C523.686 299.552 517.461 292.8 517.409 284.624Z"
        fill="#E3E6E8"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.5, 1] }}
        transition={{
          times: [0, 0.55, 1],
          duration: 2.2,
          delay: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 10
        }}
        style={{ transformOrigin: '517px 417px' }} // Bottom left of path
      />
      
      {/* Fade path - scaled and faded */}
      <motion.path
        id="fade"
        d="M516.502 417.704L516.5 417.111C516.5 417.091 516.517 417.074 516.537 417.076C516.852 417.105 517.358 417.352 517.49 417.759C517.496 417.777 517.486 417.796 517.468 417.802L516.902 417.99C516.885 417.996 516.867 417.988 516.858 417.972C516.79 417.851 516.671 417.764 516.534 417.74C516.516 417.737 516.502 417.722 516.502 417.704Z"
        fill="url(#paint0_linear_1_132)"
        initial={{ scale: 1, opacity: 1 }}
        animate={{ scale: [1, 1.5, 1.5], opacity: [1, 1, 0] }}
        transition={{
          times: [0, 0.43, 1],
          duration: 1.8,
          delay: 0.8
        }}
        style={{ transformOrigin: '517px 417px' }} // Bottom left
      />
      
      {/* Ellipse - animated x position */}
      <motion.ellipse
        id="ellipse"
        cy="226"
        rx="257.5"
        ry="226"
        fill="#FFCD3D"
        mask="url(#pathMask)"
        initial={{ cx: 257.5 }}
        animate={{ cx: 500 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut"
        }}
      />
    </svg>
  );
};

export default AnimatedSVG;