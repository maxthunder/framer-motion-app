import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import ".././App.css";

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/getting-started-with-framer-motion
 */
const FramerMotion = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  const defaultState = {
    opacity: 0,
    scale: 0.6
  };

  return (
    <div className="container">
      <button onClick={() => setIsMounted(!isMounted)}>
        {`${isMounted ? "Unmount" : "Mount"} Element`}
      </button>
      <AnimatePresence>
        {isMounted && (
          <motion.div
            className="block"
            initial={defaultState}
            exit={defaultState}
            animate={{
              opacity: 1,
              boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.3)",
              scale: 1
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default FramerMotion;