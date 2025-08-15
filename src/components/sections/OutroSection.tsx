import SlideUpSection from "@/components/layouts/SlideUpSection";
import Display2 from "@/components/atoms/typography/Display2";
import Heading1 from "@/components/atoms/typography/Heading1";
import ContactCard from "@/components/molecules/ContactCard";

const OutroSection = () => {
  return (
    <SlideUpSection>
      <p className="text-center">
        <Display2 text="함께 만들어갈 수 있는" />
        <br />

        <Display2 text="더 나은 웹" styles={{ color: "text-primary-600" }} />
        <Display2 text="을 기대합니다." />
      </p>

      <div className="flex flex-col justify-center items-center gap-y-8">
        <p className="text-center">
          <Heading1 text="새로운 도전을 통해 사용자에게 가치있는 서비스를 만들어가고 싶습니다." styles={{ color: "text-gray-400" }} />
          <br />
          <Heading1 text="궁금한 점이 있다면 언제든 편하게 연락주세요." styles={{ color: "text-gray-400" }} />
        </p>

        <ContactCard />
      </div>
    </SlideUpSection>
  );
};

export default OutroSection;
