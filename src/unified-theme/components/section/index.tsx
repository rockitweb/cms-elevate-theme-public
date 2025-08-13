//A component that is full width but has a internal section , centred with a max width as set by the prop maxWidth

export function Section({
  children,
  maxWidth = 'max-w-7xl',
}: {
  children: React.ReactNode;
  maxWidth?: string;
}) {
  return (
    <div className={`w-full flex justify-center`}>
      <div className={`w-full ${maxWidth}`}>{children}</div>
    </div>
  );
}
