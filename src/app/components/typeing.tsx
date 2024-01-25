"use client";

import { useEffect, useState } from "react";

const TypingAnimation = () => {
  const [text, setText] = useState("");
  const textToType =
    "موقع موفي تايم الاصلي الموقع الاول الموفر لجميع المحتوي يرجي دعم الموقع ومشاركة";
  let index = 0;
  let isDeleting = false;

  useEffect(() => {
    const typeText = () => {
      const currentText = textToType.substring(0, index);

      setText(currentText);

      if (isDeleting) {
        index--;
      } else {
        index++;
      }

      if (index > textToType.length) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        isDeleting = true;
        setTimeout(typeText, 500); // Time to wait before starting to delete
      } else if (index < 0) {
        isDeleting = false;
        setTimeout(typeText, 500); // Time to wait before starting to type again
      } else {
        const typingSpeed = isDeleting ? 200 : 200; // Adjust typing speed
        setTimeout(typeText, typingSpeed);
      }
    };

    typeText();
  }, []);

  return <p className="text-white text-end">{text}</p>;
};

export default TypingAnimation;
