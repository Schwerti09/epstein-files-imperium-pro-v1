import clsx from "clsx";
import { ReactNode } from "react";

export function Badge({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "ok" | "warn";
}) {
  const styles =
    tone === "ok"
      ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
      : tone === "warn"
      ? "border-rose-400/30 bg-rose-400/10 text-rose-200"
      : "border-zinc-400/20 bg-zinc-400/10 text-zinc-200";

  return (
    <span className={clsx("inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs", styles)}>
      {children}
    </span>
  );
}
