import React, { useEffect, useState } from "react";

const TypewriterEffectMount: React.FC<{ text: string }> = ({ text }) => {
  const [currentText, setCurrentText] = useState(text);
  const [isHovered, setIsHovered] = useState(false); // Track hover state
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    const animateText = async () => {
      if (!isHovered) return; // Don't animate if not hovered
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
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
      // Set the last letter to the correct value
      setCurrentText(text);
    };

    animateText();
  }, []);

  return (
    <div
      className="w-auto"
      onMouseEnter={() => setIsHovered(true)} // Start animation on hover
      onMouseLeave={() => setIsHovered(false)} // Stop animation on hover out
    >
      {currentText}
    </div>
  );
};

export default TypewriterEffectMount;
