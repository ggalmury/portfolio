import { ReactNode } from "react";

import SlideAnimation from "@/components/animations/SlideAnimation";
import Section from "@/components/layouts/Section";

interface SlideUpSectionProps {
  children: ReactNode;
}

const SlideUpSection = ({ children }: SlideUpSectionProps) => {
  return (
    <SlideAnimation className="w-full" offsetY={80} delay={0.2} triggerOnReveal>
      <Section>{children}</Section>
    </SlideAnimation>
  );
};

export default SlideUpSection;
