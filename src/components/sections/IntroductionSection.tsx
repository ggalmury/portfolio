import SlideAnimation from "@/components/animations/SlideAnimation";
import Section from "@/components/layouts/Section";
import Display1 from "@/components/atoms/typography/Display1";
import Title1 from "@/components/atoms/typography/Title1";
import Heading1 from "@/components/atoms/typography/Heading1";
import ContactCard from "@/components/molecules/ContactCard";

const IntroductionSection = () => {
  return (
    <Section>
      <SlideAnimation offsetY={40} duration={0.5}>
        <p className="text-center">
          <Display1 text="안녕하세요" />
          <br />
          <Display1 text="개발자 " />
          <Display1 text="이재윤" styles={{ color: "text-primary-600" }} />
          <Display1 text="입니다" />
        </p>
      </SlideAnimation>

      <SlideAnimation offsetY={-20} delay={1}>
        <div className="flex flex-col justify-center items-center gap-y-8">
          <p className="text-center">
            <Title1 text="Frontend " styles={{ color: "text-primary-600" }} />
            <Title1 text="Developer" styles={{ color: "text-gray-400" }} />
          </p>

          <p className="text-center">
            <Heading1 text="사용자의 입장에서 더 나은 경험을 고민하고," styles={{ color: "text-gray-400" }} />
            <br />
            <Heading1 text="기술에 대한 열정을 양분삼는 개발자입니다." styles={{ color: "text-gray-400" }} />
          </p>

          <ContactCard />
        </div>
      </SlideAnimation>
    </Section>
  );
};

export default IntroductionSection;
