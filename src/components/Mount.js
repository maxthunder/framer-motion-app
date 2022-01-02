import React from "react";
import { AnimatePresence } from "framer-motion";
import ".././App.css";
import Rotate from "./Rotate";

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/getting-started-with-framer-motion
 */
const Mount = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  return (
    <div className="container">
      <button onClick={() => setIsMounted(!isMounted)}>
        {`${isMounted ? "Unmount" : "Mount"} Element`}
      </button>
      <AnimatePresence>
        {isMounted && <Rotate />}
      </AnimatePresence>
    </div>
  );
}

export default Mount;