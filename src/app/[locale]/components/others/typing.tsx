"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import MainButton from "../buttons/main-button";

const TypingAnimation = () => {
  const t = useTranslations();

  const [text, setText] = useState("");
  const textToType = t("message.header");
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

  return (
    <article className="myContainer flex justify-start items-center gap-3 my-4 z-10">
      <MainButton color="warning" className="bg-yellow-500 z-10 px-3" text={t("fields.news")} />
      <p className="text-white text-start z-10">{text}</p>
    </article>
  );
};

export default TypingAnimation;
