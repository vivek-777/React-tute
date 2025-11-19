import React, { useEffect, useRef, useState } from "react";

const IntersectObserver = () => {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <div style={{ height: "150vh", padding: "20px" }}>
      <h2>Scroll down to see the box</h2>
      <div
        ref={targetRef}
        style={{
          width: "200px",
          height: "200px",
          background: isVisible ? "green" : "red",
          margin: "100px auto",
          textAlign: "center",
          lineHeight: "200px",
          color: "white",
          fontWeight: "bold",
        }}
      >
        {isVisible ? "Visible" : "Hidden"}
      </div>
    </div>
  );
};

export default IntersectObserver;
