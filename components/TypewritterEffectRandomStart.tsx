import React, { useEffect, useState } from "react";

const TypewriterEffectRandom: React.FC<{ text: string }> = ({ text }) => {
  const [currentText, setCurrentText] = useState(text);
  const [isHovered, setIsHovered] = useState(false); // Track hover state
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const containerStyle: React.CSSProperties = {
    width: `${text.length * 10}px`, // Adjust the width as needed
    overflow: "hidden",
    whiteSpace: "nowrap",
  };

  useEffect(() => {
    const animateText = async () => {
      if (!isHovered) {
        // Randomize all letters on hover
        let newText = "";
        for (let j = 0; j < text.length; j++) {
          newText += alphabet[Math.floor(Math.random() * 26)];
        }
        setCurrentText(newText);
        await new Promise((resolve) => setTimeout(resolve, 0));
      } else {
        for (let i = 0; i < text.length - 1; i++) {
          // Exclude the last letter
          let newText = "";
          for (let j = 0; j < text.length; j++) {
            if (j === i) {
              newText += alphabet[Math.floor(Math.random() * 26)];
            } else {
              newText += currentText[j];
            }
          }
          setCurrentText(newText);
          await new Promise((resolve) => setTimeout(resolve, 75));
        }
        // Set the last letter to the correct value
        setCurrentText(text);
        await new Promise((resolve) => setTimeout(resolve, 50)); // Delay after completing the animation
      }
    };

    animateText();
  }, [text, isHovered]);

  return (
    <div
      className="w-auto"
      style={containerStyle}
      onMouseEnter={() => setIsHovered(true)} // Start animation on hover
      onMouseLeave={() => setIsHovered(false)} // Stop animation on hover out
    >
      {currentText}
    </div>
  );
};

export default TypewriterEffectRandom;
