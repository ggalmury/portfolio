import Body1 from "@/components/atoms/typography/Body1";

interface BulletListCard {
  items: string[];
}

const BulletListCard = ({ items }: BulletListCard) => {
  return (
    <ul className="list-disc pl-5 space-y-1">
      {items.map((item) => (
        <li key={item}>
          <Body1 text={item} />
        </li>
      ))}
    </ul>
  );
};

export default BulletListCard;
