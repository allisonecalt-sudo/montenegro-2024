/**
 * Montenegro 2024 — recap site
 * The page is fully static HTML/CSS and reads perfectly with no JS — content
 * is NEVER hidden behind script. This only adds a small nicety: highlighting
 * the nav link for whichever section is currently on screen. If it fails or is
 * unsupported, nothing breaks.
 */

function highlightActiveSection(): void {
  const links = Array.from(
    document.querySelectorAll<HTMLAnchorElement>('.topnav__links a'),
  );
  if (links.length === 0 || !('IntersectionObserver' in window)) return;

  const byId = new Map<string, HTMLAnchorElement>();
  links.forEach((link) => {
    const id = link.getAttribute('href')?.replace('#', '');
    if (id) byId.set(id, link);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = byId.get(entry.target.id);
        if (link) link.classList.toggle('is-active', entry.isIntersecting);
      });
    },
    { rootMargin: '-45% 0px -45% 0px' },
  );

  byId.forEach((_link, id) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', highlightActiveSection);
} else {
  highlightActiveSection();
}
