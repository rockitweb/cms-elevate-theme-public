import SanitizedContent from '../SanitizeHTML/index.js';

export type SectionHeadingProps = {
  title: string;
  message: string;
};

export function HeroHeading({ title, message }: SectionHeadingProps) {
  return (
    <div className="text-display flex flex-col items-start  text-start gap-2 ">
      <h1 className="text-hero-heading text-white">
        <SanitizedContent content={title} />
      </h1>
      <p className="text-hero-message text-white ">
        <SanitizedContent content={message} />
      </p>
    </div>
  );
}
