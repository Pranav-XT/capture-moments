import React, { useEffect, useState } from "react";
import "../styles/styles.css"; // Import CSS for cursor styles

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return <div className="custom-cursor" style={{ left: position.x, top: position.y }} />;
};

export default Cursor;
