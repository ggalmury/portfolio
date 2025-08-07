import InterviewItem from "@/components/molecules/InterviewItem";
import SlideUpSection from "@/components/organisms/layouts/SlideUpSection";
import Content from "@/components/organisms/layouts/Content";

const InterviewSection = () => {
  return (
    <SlideUpSection>
      <Content title="인터뷰">
        <div className="flex flex-col gap-y-8">
          <InterviewItem
            question="왜 개발자의 길을 선택하게 되었나요?"
            answer="건축학과에서 처음 CAD 도구를 다루며 “무언가를 만들어낸다”는 경험에 매료됐습니다. 하지만 물리적인 제약보다 더 자유롭게 상상하고 빠르게 실현해볼 수 있는 도구가 무엇일까 고민하다가 소프트웨어 개발을 접하게 됐고, 관련 학과로 전과를 결심, 그 이후로는 자연스럽게 프론트엔드 중심의 웹 개발자로 성장해왔습니다. 눈에 보이는 결과를 통해 사람들의 경험을 바꾸는 것, 그 자체가 큰 동기부여가 되었습니다."
          />

          <InterviewItem
            question="개발자로서 가장 중요하게 여기는 가치는 무엇인가요?"
            answer="“빠르게 볼 수 있게 만드는 것”과 “지속적으로 관리할 수 있게 남기는 것” 사이의 균형을 가장 중요하게 생각합니다. 완성도 높은 결과를 빠르게 내는 것도 중요하지만, 결국 서비스는 시간이 흐를수록 무너지지 않는 구조와 의사소통에 유리한 코드가 핵심이라고 믿습니다. 또한 개발은 혼자 잘하는 게 아니라, 팀과 함께 방향을 정하고 서로를 성장시키는 과정이라는 것도 항상 염두에 두고 있습니다."
          />

          <InterviewItem
            question="어떤 개발자가 되고 싶나요?"
            answer="기능을 “작동하게만” 만드는 것이 아니라, 왜 그렇게 구성하는지가 명확한 개발자, 그리고 서비스 전체의 맥락 속에서 유기적으로 사고할 수 있는 개발자가 되고 싶습니다. 컴포넌트 하나를 만들더라도 사용자의 흐름, 팀의 유지보수성, 성능, 데이터 구조까지 고려하며 일합니다. 또한, 낯선 기술이나 복잡한 요구사항 앞에서도 물러서지 않고 작게 쪼개고 실험하며 감을 잡는 걸 즐깁니다."
          />
        </div>
      </Content>
    </SlideUpSection>
  );
};

export default InterviewSection;
