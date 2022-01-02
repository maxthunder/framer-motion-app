import React from "react";
import "./App.css";
import DragDrop from "./components/DragDrop";
import Mount from "./components/Mount";

/** Based on https://letsbuildui.dev/articles/getting-started-with-framer-motion */

export default function App() {
  return (
    <div>
      <Mount/>
      <DragDrop />
    </div>
  );
}