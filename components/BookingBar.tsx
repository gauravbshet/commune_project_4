export default function BookingBar({
  variant = "dark",
}: {
  variant?: "dark" | "light";
}) {
  const isDark = variant === "dark";
  return (
    <div
      className={`w-full max-w-3xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center rounded-md overflow-hidden shadow-lg ${
        isDark ? "bg-linen/95" : "bg-white"
      }`}
    >
      <div className="grid grid-cols-3 flex-1 divide-x divide-ink/10">
        <label className="px-4 py-3 flex flex-col">
          <span className="text-[9px] tracking-[0.15em] font-medium text-sage-dark mb-1">
            CHECK IN
          </span>
          <input
            type="text"
            placeholder="Enter date"
            className="bg-transparent text-xs text-ink/70 placeholder:text-ink/40 outline-none"
            readOnly
          />
        </label>
        <label className="px-4 py-3 flex flex-col">
          <span className="text-[9px] tracking-[0.15em] font-medium text-sage-dark mb-1">
            CHECK OUT
          </span>
          <input
            type="text"
            placeholder="Enter date"
            className="bg-transparent text-xs text-ink/70 placeholder:text-ink/40 outline-none"
            readOnly
          />
        </label>
        <label className="px-4 py-3 flex flex-col">
          <span className="text-[9px] tracking-[0.15em] font-medium text-sage-dark mb-1">
            DISCOUNT CODE
          </span>
          <input
            type="text"
            defaultValue="COMMUNE18"
            className="bg-transparent text-xs text-ink/70 outline-none"
            readOnly
          />
        </label>
      </div>
      <button className="bg-bark hover:bg-ink transition-colors text-linen text-xs tracking-[0.15em] font-medium px-8 py-4 flex items-center justify-center gap-3 shrink-0">
        CHECK RATES
        <span aria-hidden>&#8594;</span>
      </button>
    </div>
  );
}
