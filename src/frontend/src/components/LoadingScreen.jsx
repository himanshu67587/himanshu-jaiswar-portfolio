export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#1a2e1e]">
      <div className="relative flex items-center justify-center mb-6">
        {/* Spinning leaf */}
        <div className="animate-spin-leaf">
          <svg
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M36 4 C36 4, 60 16, 60 36 C60 56, 44 68, 36 68 C36 68, 12 56, 12 36 C12 16, 36 4, 36 4Z"
              fill="#4CAF50"
              opacity="0.9"
            />
            <path
              d="M36 12 C36 12, 54 22, 54 36 C54 50, 44 60, 36 60"
              fill="#2E7D32"
              opacity="0.6"
            />
            <line
              x1="36"
              y1="68"
              x2="36"
              y2="20"
              stroke="#2E7D32"
              strokeWidth="2"
              opacity="0.5"
            />
          </svg>
        </div>
        {/* Pulsing ring */}
        <div className="absolute inset-0 rounded-full border-2 border-[#4CAF50]/30 animate-ping" />
      </div>
      <p
        className="text-[#4CAF50] font-display text-xl font-semibold tracking-widest uppercase"
        style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
      >
        Himanshu Jaiswar
      </p>
      <p className="text-[#81D4FA]/60 text-xs mt-2 tracking-widest uppercase">
        Loading Portfolio...
      </p>
    </div>
  );
}
