// IgelTools Docs — active sidebar link and footer year. No dependencies.

(() => {
  const path = window.location.pathname.replace(/\/$/, "/index.html");
  const hash = window.location.hash;

  document.querySelectorAll(".docs-sidebar a").forEach((link) => {
    const href = link.getAttribute("href") || "";
    if (!href || href.startsWith("http")) return;
    const [linkPath, linkHash] = href.split("#");
    const target = new URL(linkPath, window.location.href).pathname.replace(/\/$/, "/index.html");
    const samePath = target === path;
    const sameHash = linkHash ? `#${linkHash}` === hash : !hash;
    if (samePath && sameHash) link.classList.add("is-active");
  });

  document.querySelectorAll("#year").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
})();
