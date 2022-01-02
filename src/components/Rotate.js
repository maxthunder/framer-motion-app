import React, { useState } from 'react';
import { motion } from "framer-motion";
import ".././App.css"

const Rotate = () => {
  const [isActive, setIsActive] = useState(false);

  const variant = {
    active: {
      rotate: 360,
      x: 850,
      background: 'lightcoral'
    },
    inactive: {
      rotate: 0,
      x: 0,
      background: '#fff'
    }
  };

  return (
    <motion.div
      className="block"
      onClick={() => setIsActive(!isActive)}
      variants={variant}
      animate={isActive ? variant.active : variant.inactive}
      transition={{
        duration: 0.33 // seconds
      }}
    >
    </motion.div>
  )
}

export default Rotate;