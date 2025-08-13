import { IconCard } from '../../../Cards/icon-card.js';

type HeroCardProps = {
  cards: Array<{
    icon: string;
    heading: string;
    message: string;
  }>;
};
export function HeroCards({ cards }: HeroCardProps) {
  return (
    <div className="flex w-full justify-center items-center ">
      <div className=" bg-gradient-to-r p-5 flex gap-2  rounded-xl from-niba-blue-gradient to-niba-blue-gradient-light">
        {cards.map((card, i) => (
          <IconCard
            key={card.heading}
            {...card}
            rightBorder={i < cards.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
