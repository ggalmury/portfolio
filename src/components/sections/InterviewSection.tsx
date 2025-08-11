import SlideUpSection from "@/components/layouts/SlideUpSection";
import Content from "@/components/layouts/Content";
import InterviewItem from "@/components/molecules/InterviewItem";

const InterviewSection = () => {
  return (
    <SlideUpSection>
      <Content title="인터뷰">
        <div className="flex flex-col gap-y-8">
          <InterviewItem
            question="왜 개발자의 길을 선택하게 되었나요?"
            answer="처음 CAD를 다루며 무언가를 만들어내는 일에 매력을 느꼈습니다. 그러다 더 자유롭고 빠르게 아이디어를 실현할 수 있는 도구로서 소프트웨어 개발을 접하게 되었고, 자연스럽게 프론트엔드 개발자의 길을 걷게 됐습니다."
          />

          <InterviewItem
            question="개발자로서 가장 중요하게 여기는 가치는 무엇인가요?"
            answer="빠르게 결과를 보여주는 것과 오랫동안 유지할 수 있는 코드를 남기는 것의 균형을 가장 중요하게 생각합니다. 특히 협업하는 팀원들과 명확하게 소통할 수 있는 구조를 만드는 데 늘 신경 씁니다."
          />

          <InterviewItem
            question="어떤 개발자가 되고 싶나요?"
            answer="단순히 기능을 구현하는 데 그치지 않고, 그 선택의 이유를 설명할 수 있는 개발자가 되고 싶습니다. 작은 컴포넌트 하나를 만들더라도 사용성, 성능, 유지보수까지 함께 고민하는 개발자가 되고 싶습니다."
          />
        </div>
      </Content>
    </SlideUpSection>
  );
};

export default InterviewSection;
