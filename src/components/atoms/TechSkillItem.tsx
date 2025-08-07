interface TechSkillItemProps {
  Icon: any;
}

const TechSkillItem = ({ Icon }: TechSkillItemProps) => {
  return (
    <div className="p-2 rounded-lg bg-white">
      <Icon width={32} />
    </div>
  );
};

export default TechSkillItem;
