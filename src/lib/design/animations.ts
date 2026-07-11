export const animations = {
  duration: {
    fast: 0.2,
    normal: 0.35,
    slow: 0.6,
  },

  spring: {
    type: "spring",
    stiffness: 220,
    damping: 22,
  },

  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },

  slideUp: {
    initial: {
      opacity: 0,
      y: 30,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  },

  slideLeft: {
    initial: {
      opacity: 0,
      x: -30,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
  },

  scaleHover: {
    whileHover: {
      scale: 1.03,
    },
  },

  buttonTap: {
    whileTap: {
      scale: 0.97,
    },
  },
};