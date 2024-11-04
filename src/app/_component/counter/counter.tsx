"use client";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

type CounterProps = { end: number };

const Counter: React.FC<CounterProps> = ({ end }) => {
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  const handleObserver = (entries: any) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.1, // Trigger when 10% of the target is visible
    });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <div ref={counterRef}>
      {isVisible ? (
        <CountUp start={0} end={end} duration={2.75} separator="," />
      ) : (
        <span>0</span> // Show 0 before the animation starts
      )}
    </div>
  );
};

export default Counter;
