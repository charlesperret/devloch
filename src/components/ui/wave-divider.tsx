type WaveDividerProps = {
  tone?: "light" | "dark";
};

export function WaveDivider({ tone = "light" }: WaveDividerProps) {
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
