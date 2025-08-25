import SanitizedContent from '../SanitizeHTML/index.js';

export type SectionHeadingProps = {
  title: string;
  message: string;
};

export function HeroHeading({ title, message }: SectionHeadingProps) {
  return (
    <div className="text-display flex flex-col items-start  text-start gap-3 w-2/3 mb-10">
      <h1 className="text-hero-heading text-white text-6xl">
        <SanitizedContent content={title} />
      </h1>
      <p className="text-hero-message text-white text-3xl font-extralight ">
        <SanitizedContent content={message} />
      </p>
    </div>
  );
}
