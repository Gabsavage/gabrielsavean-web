export function StatusIndicator({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-charcoal">
      <span className="h-2 w-2 rounded-full bg-charcoal" aria-hidden />
      {label}
    </div>
  );
}
