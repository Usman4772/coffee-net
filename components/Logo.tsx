export function Logo({
  variant = "light",
  compact = false,
}: {
  variant?: "light" | "dark";
  compact?: boolean;
}) {
  const color = variant === "light" ? "#f3ead9" : "#14110e";
  const gold = "#c4a04a";

  return (
    <span className="inline-flex items-center gap-2.5">
      <svg
        viewBox="0 0 48 48"
        className={compact ? "h-9 w-9" : "h-11 w-11"}
        aria-hidden
      >
        <path
          d="M14 18c0-2 1.5-5 5-7.2 1.2 2.6 3.6 4.2 5 4.2 1.2 0 3.4-1.4 4.6-3.8 3.2 2 5.4 5 5.4 6.8"
          fill="none"
          stroke={gold}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M12 22h20c.8 8-2.4 16-10 16s-10.8-8-10-16Z"
          fill="none"
          stroke={color}
          strokeWidth="1.7"
        />
        <path
          d="M32 24h4.2c2.2 0 4 1.6 4 4s-1.8 4-4 4H32"
          fill="none"
          stroke={color}
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M14 40h16"
          stroke={color}
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
      <span className="leading-none">
        <span
          className="block font-display text-[1.15rem] font-semibold tracking-[0.18em]"
          style={{ color }}
        >
          KOFFEE NET
        </span>
        {!compact ? (
          <span
            className="mt-1 block text-[0.62rem] tracking-[0.32em] uppercase"
            style={{ color: gold }}
          >
            Love. Life. Food.
          </span>
        ) : null}
      </span>
    </span>
  );
}
