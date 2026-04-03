const leaves = [
  {
    id: "l1",
    left: "5%",
    delay: "0s",
    duration: "12s",
    size: 22,
    dir: "normal",
  },
  {
    id: "l2",
    left: "15%",
    delay: "2.5s",
    duration: "15s",
    size: 18,
    dir: "reverse",
  },
  {
    id: "l3",
    left: "25%",
    delay: "1s",
    duration: "10s",
    size: 28,
    dir: "normal",
  },
  {
    id: "l4",
    left: "38%",
    delay: "4s",
    duration: "14s",
    size: 16,
    dir: "reverse",
  },
  {
    id: "l5",
    left: "50%",
    delay: "0.5s",
    duration: "11s",
    size: 24,
    dir: "normal",
  },
  {
    id: "l6",
    left: "62%",
    delay: "3s",
    duration: "13s",
    size: 20,
    dir: "reverse",
  },
  {
    id: "l7",
    left: "72%",
    delay: "6s",
    duration: "16s",
    size: 26,
    dir: "normal",
  },
  {
    id: "l8",
    left: "82%",
    delay: "1.5s",
    duration: "9s",
    size: 18,
    dir: "reverse",
  },
  {
    id: "l9",
    left: "91%",
    delay: "5s",
    duration: "12s",
    size: 22,
    dir: "normal",
  },
  {
    id: "l10",
    left: "45%",
    delay: "7s",
    duration: "14s",
    size: 15,
    dir: "reverse",
  },
];

export default function FloatingLeaves() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none z-[2]"
      aria-hidden="true"
    >
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className={
            leaf.dir === "normal"
              ? "animate-float-leaf"
              : "animate-float-leaf-reverse"
          }
          style={{
            position: "absolute",
            left: leaf.left,
            top: "-80px",
            animationDelay: leaf.delay,
            animationDuration: leaf.duration,
          }}
        >
          <svg
            width={leaf.size}
            height={leaf.size * 1.4}
            viewBox="0 0 24 34"
            fill="none"
            aria-hidden="true"
            style={{ opacity: 0.65 }}
          >
            <path
              d="M12 1 C12 1, 22 8, 22 17 C22 26, 16 33, 12 33 C8 33, 2 26, 2 17 C2 8, 12 1, 12 1Z"
              fill="#4CAF50"
            />
            <path
              d="M12 4 C12 4, 19 10, 19 17 C19 24, 15 30, 12 30"
              fill="#2E7D32"
              opacity="0.5"
            />
            <line
              x1="12"
              y1="33"
              x2="12"
              y2="6"
              stroke="#1B5E20"
              strokeWidth="1"
              opacity="0.6"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
