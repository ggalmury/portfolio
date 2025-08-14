"use client";

import clsx from "clsx";
import { FaChevronUp } from "react-icons/fa6";

const ScrollToTopButton = () => {
  const scrollToTop = (): void => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      className={clsx(
        "fixed right-6 bottom-6 z-50 p-3 rounded-full text-white shadow-lg bg-primary-600 transition-transform duration-200",
        "hover:scale-120",
      )}
      onClick={scrollToTop}
    >
      <FaChevronUp size={24} />
    </button>
  );
};

export default ScrollToTopButton;
