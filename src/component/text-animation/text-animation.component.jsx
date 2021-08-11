import React, { useState } from "react";

import "./text-animation.styless.scss";

const TextAnimation = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["UI / UX DESIGNER", "UX Researcher", "Product Designer"];

  const nextText = () => {
    if (textIndex + 1 === texts.length) {
      return setTextIndex(0);
    }
    setTextIndex(textIndex + 1);
  };

  return (
    <div key={textIndex} className="text-animation" onAnimationEnd={nextText}>
      {texts[textIndex]}
    </div>
  );
};

export default TextAnimation;
