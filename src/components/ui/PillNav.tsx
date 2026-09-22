const links = [
  { href: "#accueil", label: "Accueil" },
  { href: "#ecosysteme", label: "Écosystème" },
];

export function PillNav() {
  return (
    <nav
      className="fixed inset-x-0 bottom-6 z-50 flex justify-center px-4"
      aria-label="Navigation principale"
    >
      <div className="flex items-center gap-1 whitespace-nowrap rounded-pill bg-charcoal px-2 py-2 font-mono text-xs text-paper sm:text-sm">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-pill px-3 py-2 transition-colors hover:bg-ink sm:px-4"
          >
            {link.label}
          </a>
        ))}
        <a
          href="mailto:gabriel.savean@gmail.com"
          className="rounded-pill bg-paper px-3 py-2 text-ink transition-colors hover:bg-white sm:px-4"
        >
          Contact →
        </a>
      </div>
    </nav>
  );
}
