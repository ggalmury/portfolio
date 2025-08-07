"use client";

import { useState } from "react";
import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

import SlideAnimation from "@/components/animations/SlideAnimation";
import ContactDetail from "@/components/atoms/ContactDetail";

const ContactGroup = () => {
  const [activeContact, setActiveContact] = useState<"tel" | "email" | null>(null);

  const toggleTel = (): void => {
    setActiveContact((prev) => (prev === "tel" ? null : "tel"));
  };

  const toggleEmail = (): void => {
    setActiveContact((prev) => (prev === "email" ? null : "email"));
  };

  return (
    <div className="flex flex-col items-center w-full gap-4">
      <div className="flex gap-10">
        <BsFillTelephoneFill
          className={clsx(
            "cursor-pointer transition-transform duration-200 hover:scale-120",
            activeContact === "tel" && "text-primary-600",
          )}
          size={32}
          onClick={toggleTel}
        />

        <MdEmail
          className={clsx(
            "cursor-pointer transition-transform duration-200 hover:scale-120",
            activeContact === "email" && "text-primary-600",
          )}
          size={32}
          onClick={toggleEmail}
        />

        <a href="https://github.com/ggalmury">
          <FaGithub size={32} className="transition-transform duration-200 hover:scale-120" />
        </a>
      </div>

      <AnimatePresence mode="wait">
        {activeContact === "tel" && (
          <SlideAnimation animationKey="tel" offsetY={-20} ease="backOut">
            <ContactDetail contact="010-7199-7957" />
          </SlideAnimation>
        )}

        {activeContact === "email" && (
          <SlideAnimation animationKey="email" offsetY={-20} ease="backOut">
            <ContactDetail contact="leejaeyun0922@gmail.com" />
          </SlideAnimation>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactGroup;
