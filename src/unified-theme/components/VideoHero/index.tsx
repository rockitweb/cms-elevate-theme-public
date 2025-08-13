import React from 'react';

interface HeroBackgroundVideoProps {
  videoUrl: string;
  posterUrl?: string; // fallback image while loading
  children?: React.ReactNode;
}

const HeroBackgroundVideo: React.FC<HeroBackgroundVideoProps> = ({
  videoUrl,
  posterUrl,
  children,
}) => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden z-0">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={videoUrl}
        autoPlay
        muted
        loop
        playsInline
        poster={posterUrl}
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4 text-center">
        {children}
      </div>
    </div>
  );
};

export default HeroBackgroundVideo;
