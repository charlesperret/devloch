type WaveDividerProps = {
  tone?: "light" | "dark";
  variant?: "simple" | "layered-top" | "layered-bottom";
};

export function WaveDivider({ tone = "light", variant = "simple" }: WaveDividerProps) {
  if (variant === "layered-top") {
    return (
      <div className="pointer-events-none -mb-1 h-16 w-full overflow-hidden sm:h-20">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block h-full w-full" aria-hidden>
          <path d="M0,50 C480,80 960,10 1440,50 L1440,80 L0,80 Z" fill="#1e6b9e" />
          <path d="M0,58 C360,20 1080,70 1440,40 L1440,80 L0,80 Z" fill="#1a5f8a" opacity="0.85" />
          <path d="M0,65 C400,35 1100,75 1440,55 L1440,80 L0,80 Z" fill="#154f74" opacity="0.7" />
          <path d="M0,72 C320,50 1120,80 1440,65 L1440,80 L0,80 Z" fill="#0f3d5c" opacity="0.6" />
        </svg>
      </div>
    );
  }

  if (variant === "layered-bottom") {
    return (
      <div className="pointer-events-none -mt-1 h-16 w-full overflow-hidden sm:h-20">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block h-full w-full" aria-hidden>
          <path d="M0,0 L1440,0 L1440,35 C960,70 480,10 0,40 Z" fill="#0f3d5c" opacity="0.6" />
          <path d="M0,0 L1440,0 L1440,25 C1100,55 400,5 0,45 Z" fill="#154f74" opacity="0.7" />
          <path d="M0,0 L1440,0 L1440,15 C1080,55 360,20 0,55 Z" fill="#1a5f8a" opacity="0.85" />
          <path d="M0,0 L1440,0 L1440,10 C960,45 480,5 0,60 Z" fill="white" />
        </svg>
      </div>
    );
  }

  const fill = tone === "dark" ? "#0b5b86" : "#f3f4f6";

  return (
    <div className="pointer-events-none h-10 w-full overflow-hidden sm:h-12">
      <svg className="block h-full w-full" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden>
        <path
          d="M0,74 C95,120 195,18 300,50 C415,86 520,6 640,45 C745,79 855,34 960,56 C1080,82 1198,24 1295,46 C1370,63 1415,77 1440,90 L1440,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
