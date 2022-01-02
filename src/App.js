import React from "react";
import "./App.css";
import Rotate from "./components/Rotate";
import FramerMotion from "./components/FramerMotion"
import Alert from 'react-bootstrap/Alert'

export default function App() {
  return (
    <div>
      <Rotate/>
      <Divider />
      <FramerMotion/>
      <Divider />
    </div>
  );
}

const Divider = () => {
  return <Alert variant="dark"></Alert>
}