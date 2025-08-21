import React, { useEffect, useRef, useState } from "react";

export default function CoolCursor() {
  const cursorRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const previousPos = useRef({ x: 0, y: 0 });
  const animationRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

 

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 🎯 Animate circle
  const animate = () => {
    const circle = cursorRef.current;
    if (!circle) return;

    const easing = 0.15;
    const prev = previousPos.current;
    const newX = prev.x + (mousePos.x - prev.x) * easing;
    const newY = prev.y + (mousePos.y - prev.y) * easing;

    circle.style.transform = `translate3d(${newX - 16}px, ${newY - 16}px, 0)`;
    previousPos.current = { x: newX, y: newY };

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [mousePos]);

   useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    setIsTouchDevice(isTouch);
  }, []);

  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-5 h-5 rounded-full border-1 border-red-100 bg-red-100 bg-opacity-20 pointer-events-none z-[9999] transition-transform ease-out duration-300 shadow-lg"
    />
  );
}
