import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSVG = () => {
  // Calculate outward positions for circles with radius
  const circleAnimations = {
    c1: { initial: { cx: 568.5, cy: 204.5, r: 6 }, outward: { cx: 620, cy: 150, r: 8 } },
    c2: { initial: { cx: 548.5, cy: 184.5, r: 8.5 }, outward: { cx: 590, cy: 120, r: 10 } },
    c3: { initial: { cx: 758.5, cy: 344.5, r: 6 }, outward: { cx: 840, cy: 300, r: 8 } },
    c4: { initial: { cx: 788.5, cy: 344.5, r: 8.5 }, outward: { cx: 870, cy: 320, r: 10 } },
    c5: { initial: { cx: 738.5, cy: 324.5, r: 6 }, outward: { cx: 810, cy: 270, r: 8 } },
  };

  const horizontalNod = {
    initial: { x: 0 },
    animate: {
      x: [0, -15, 15, -15, 15, -10, 0],
      transition: { duration: 0.7, delay: 1.5, times: [0, .15, .3, .45, .6, .75, 1], ease: 'easeInOut' }
    }
  };

  const verticalNod = {
    initial: { y: 0 },
    animate: {
      y: [0, -15, 15, -15, 15, -10, 0],
      transition: { duration: 0.7, delay: 2.0, times: [0, .15, .3, .45, .6, .75, 1], ease: 'easeInOut' }
    }
  };

  // Shared pulse used by Path #1 and the ellipse (so they stay in sync)
  const pulse = {
    initial: { scale: 1 },
    animate: { scale: [1, 1.1, 0.9, 1] },
    transition: { times: [0, 0.6, 0.7, 1], duration: 1.4, ease: [0.34, 1.76, 0.34, 1] }
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
        {/* Static mask: Firefox-safe */}
        <mask
          id="pathMask"
          maskUnits="userSpaceOnUse"
          maskContentUnits="userSpaceOnUse"
          x="0" y="0" width="1000" height="1000"
          mask-type="alpha"
        >
          <g>
            {/* IMPORTANT: pure white for full reveal */}
            <path
              d="M517.909 284.366L517.106 157.729C517.048 148.613 524.622 141.256 533.705 142.038C664.366 153.291 775.55 236.848 826.841 353.195C830.531 361.567 825.978 371.141 817.288 374.004L697.899 413.329C690.242 415.851 681.961 412.246 678.02 405.214C647.525 350.805 593.769 311.465 532.24 300.703C524.186 299.295 517.961 292.543 517.909 284.366Z"
              fill="white"
            />
          </g>
        </mask>

        <linearGradient id="linearFill" x1="516.734" y1="417.83" x2="517.277" y2="417.116" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0"/>
          <stop offset="1" stopColor="#FFCD3D"/>
        </linearGradient>
      </defs>

      {/* Circles - animated outward then scaled down and faded */}
      {Object.entries(circleAnimations).map(([id, positions]) => (
        <motion.circle
          key={id}
          id={id}
          fill="#FFCD3D"
          initial={{
            cx: positions.initial.cx,
            cy: positions.initial.cy,
            r: positions.initial.r,
            scale: 1,
            opacity: 1
          }}
          animate={{
            cx: [positions.initial.cx, positions.outward.cx, positions.outward.cx + (positions.outward.cx - positions.initial.cx) * 0.3],
            cy: [positions.initial.cy, positions.outward.cy, positions.outward.cy + (positions.outward.cy - positions.initial.cy) * 0.3],
            r: [positions.initial.r, positions.outward.r, positions.outward.r * 1.2],
            scale: [1, 1, 0],
            opacity: [1, 1, 0]
          }}
          transition={{ times: [0, 0.65, 1], duration: 1, delay: 0.7, ease: 'easeOut' }}
        />
      ))}

      {/* Static paths */}
      <path id="5" d="M479.852 284.624L480.655 157.987C480.712 148.871 473.138 141.513 464.056 142.295C333.395 153.548 222.211 237.106 170.92 353.453C167.229 361.825 171.783 371.399 180.473 374.261L299.862 413.587C307.519 416.109 315.8 412.504 319.741 405.471C350.236 351.063 403.992 311.723 465.52 300.961C473.574 299.552 479.8 292.8 479.852 284.624Z" fill="#E3E6E8"/>

      <motion.g id="g4" variants={verticalNod} initial="initial" animate="animate" style={{ originX: 0.5, originY: 0.5 }}>
        <path id="4" d="M290.738 452.232L170.547 412.335C161.895 409.463 152.557 414.393 150.494 423.273C120.82 551.016 165.93 682.579 260.733 767.313C267.554 773.41 278.067 772.038 283.475 764.657L357.769 663.264C362.533 656.761 361.664 647.772 356.193 641.85C313.872 596.035 293.068 532.753 301.847 470.91C302.996 462.815 298.498 454.808 290.738 452.232Z" fill="#B6B8BA"/>
        <path d="M241.2 590.84C240.5 589.66 238.75 589.66 238.05 590.84L231.39 602.13C230.7 603.3 231.57 604.75 232.96 604.75H246.29C247.68 604.75 248.55 603.3 247.86 602.13L241.2 590.84Z" fill="#9A9EA2"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M218.42 573.97H223.31V564.5C223.31 555.78 230.61 548.71 239.62 548.71C248.63 548.71 255.93 555.78 255.93 564.5V573.97H260.82C263.52 573.97 265.71 576.09 265.71 578.71V621.34H218.41C215.71 621.34 213.52 619.22 213.52 616.6V578.71C213.52 576.09 215.71 573.97 218.41 573.97H218.42ZM239.63 555.02C234.23 555.02 229.84 559.26 229.84 564.49V573.96H249.41V564.49C249.41 559.26 245.03 555.02 239.62 555.02H239.63ZM220.05 580.28V615.01H259.19V580.28H220.05Z" fill="#9A9EA2"/>
      </motion.g>

      <motion.g id="g3" variants={horizontalNod} initial="initial" animate="animate" style={{ originX: 0.5, originY: 0.5 }}>
        <path id="3" d="M389.75 684.817L315.551 787.443C310.21 794.831 312.103 805.219 319.951 809.857C432.854 876.579 571.893 873.128 681.217 808.201C689.083 803.529 690.937 793.09 685.525 785.713L611.172 684.363C606.404 677.863 597.569 675.989 590.276 679.424C533.853 706.006 467.244 706.813 410.905 679.841C403.531 676.31 394.541 678.191 389.75 684.817Z" fill="#B6B8BA"/>
        <path d="M500.68 784.13C499.98 782.95 498.23 782.95 497.53 784.13L490.87 795.42C490.18 796.59 491.05 798.04 492.44 798.04H505.77C507.16 798.04 508.03 796.59 507.34 795.42L500.68 784.13Z" fill="#9A9EA2"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M477.9 767.26H482.79V757.79C482.79 749.07 490.09 742 499.1 742C508.11 742 515.41 749.07 515.41 757.79V767.26H520.3C523 767.26 525.19 769.38 525.19 772V814.63H477.89C475.19 814.63 473 812.51 473 809.89V772C473 769.38 475.19 767.26 477.89 767.26H477.9ZM499.11 748.31C493.71 748.31 489.32 752.55 489.32 757.78V767.25H508.89V757.78C508.89 752.55 504.51 748.31 499.1 748.31H499.11ZM479.53 773.57V808.3H518.67V773.57H479.53Z" fill="#9A9EA2"/>
      </motion.g>

      <path id="2" d="M709.068 449.232L829.259 409.335C837.911 406.463 847.249 411.393 849.312 420.273C878.986 548.016 833.876 679.579 739.074 764.313C732.252 770.41 721.739 769.038 716.331 761.657L642.038 660.264C637.273 653.761 638.142 644.772 643.613 638.85C685.934 593.035 706.738 529.753 697.959 467.91C696.81 459.815 701.308 451.808 709.068 449.232Z" fill="#E3E6E8"/>

      {/* Path #1 — pulse (moved transform to a motion.g with transformBox/origin set) */}
      <motion.g
        variants={pulse}
        initial="initial"
        animate="animate"
        style={{ transformBox: 'fill-box', transformOrigin: '517px 417px' }}
      >
        <path
          id="1"
          d="M517.409 284.624L516.606 157.987C516.548 148.871 524.122 141.513 533.205 142.295C663.866 153.548 775.05 237.106 826.341 353.453C830.031 361.825 825.478 371.399 816.788 374.261L697.399 413.587C689.742 416.109 681.461 412.504 677.52 405.471C647.025 351.063 593.269 311.723 531.74 300.961C523.686 299.552 517.461 292.8 517.409 284.624Z"
          fill="#E3E6E8"
        />
      </motion.g>

      {/* Fade path (unchanged) */}
      <motion.path
        id="fade"
        d="M516.502 417.704L516.5 417.111C516.5 417.091 516.517 417.074 516.537 417.076C516.852 417.105 517.358 417.352 517.49 417.759C517.496 417.777 517.486 417.796 517.468 417.802L516.902 417.99C516.885 417.996 516.867 417.988 516.858 417.972C516.79 417.851 516.671 417.764 516.534 417.74C516.516 417.737 516.502 417.722 516.502 417.704Z"
        fill="url(#linearFill)"
        initial={{ scale: 1, opacity: 0, transformOrigin: 'bottom left' }}
        animate={{ scale: [200, 450, 450], opacity: [0, 1, 0], transformOrigin: 'bottom left' }}
        transition={{ times: [0, 0.5, 1], duration: 1.2, delay: 0.2, ease: 'easeOut' }}
        style={{ transformOrigin: 'bottom left' }}
      />

      {/* Ellipse — move + pulse in sync; transform applied on a wrapper motion.g */}
      <motion.g
        variants={pulse}
        initial="initial"
        animate="animate"
        style={{ transformBox: 'fill-box', transformOrigin: '517px 417px' }}
      >
        <motion.ellipse
          id="ellipse"
          cy="226"
          rx="257.5"
          ry="226"
          fill="#FFCD3D"
          mask="url(#pathMask)"
          initial={{ cx: 257.5 }}
          animate={{ cx: 650 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </motion.g>
    </svg>
  );
};

export default AnimatedSVG;
