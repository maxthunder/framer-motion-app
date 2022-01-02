import React, { useState } from 'react';
import { motion } from "framer-motion";
import ".././App.css"

const Rotate = () => {
  const [isActive, setIsActive] = useState(false);

  const defaultState = {// for mount/unmount animation (fade in/out)
    opacity: 0
  }

  const variant = {
    active: {
      rotate: 360,
      x: 850,
      background: 'lightcoral',
      opacity: 1
    },
    inactive: {
      rotate: 0,
      x: 0,
      background: '#fff',
      opacity: 1
    }
  };

  return (
    <motion.div
      className="block"
      onClick={() => setIsActive(!isActive)}
      variants={variant}
      initial={defaultState}
      exit={defaultState}
      animate={isActive ? variant.active : variant.inactive}
      transition={{
        duration: 0.33 // seconds
      }}
    >
    </motion.div>
  )
}

export default Rotate;