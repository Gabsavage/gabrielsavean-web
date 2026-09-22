import { stack } from "@/content/stack";

function StackItems() {
  return (
    <>
      {stack.map((tool) => (
        <span key={tool} className="mx-6 inline-flex items-center">
          {tool}
          <span className="ml-6 text-bone" aria-hidden>
            /
          </span>
        </span>
      ))}
    </>
  );
}

export function StackMarquee() {
  return (
    <div className="overflow-hidden border-y border-bone bg-paper py-4">
      <div className="marquee-track flex w-max whitespace-nowrap font-mono text-sm uppercase tracking-wide text-ink">
        <StackItems />
        <div aria-hidden className="flex">
          <StackItems />
        </div>
      </div>
    </div>
  );
}
