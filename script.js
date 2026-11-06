/* Monta a página a partir de data.js. Normalmente você não precisa mexer aqui. */
(function () {
  const D = PORTFOLIO;
  const $ = id => document.getElementById(id);

  function h(tag, attrs, ...kids) {
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v == null || v === false) continue;
      if (k === "class") el.className = v; else if (k === "text") el.textContent = v; else el.setAttribute(k, v);
    }
    kids.flat(Infinity).forEach(c => { if (c != null) el.append(c.nodeType ? c : document.createTextNode(c)); });
    return el;
  }
  const link = l => h("a", { href: l.url, target: l.url.startsWith("http") ? "_blank" : null, rel: "noopener", text: l.label });

  document.title = D.name;
  $("demo").hidden = !D.demo;
  $("name").textContent = D.name;
  $("intro").textContent = D.intro;
  D.links.forEach(l => $("links").append(link(l)));

  D.about.forEach(p => $("about").append(h("p", { text: p })));

  // projetos: <details> abre e fecha sem precisar de JavaScript
  D.projects.forEach(p => {
    const block = (title, node) => [h("h3", { text: title }), node];
    const links = (p.links || []).filter(l => l.url);
    $("projects").append(h("details", {},
      h("summary", {},
        h("span", {}, h("span", { class: "t", text: p.title }), " ", h("span", { class: "s", text: "— " + p.summary })),
        p.year ? h("span", { class: "y", text: p.year }) : null),
      h("div", { class: "body" },
        p.problem ? block("O problema", h("p", { text: p.problem })) : null,
        p.steps && p.steps.length ? block("Como eu fiz", h("ol", {}, p.steps.map(s => h("li", { text: s })))) : null,
        p.result ? block("Resultado", h("p", { text: p.result })) : null,
        p.learned ? block("O que aprendi", h("p", { text: p.learned })) : null,
        p.stack || links.length
          ? h("p", { class: "stack" }, p.stack ? "Feito com: " + p.stack : "", p.stack && links.length ? " · " : "",
              links.map((l, i) => [i ? " · " : "", link(l)]))
          : null)));
  });

  D.experience.forEach(e => $("experience").append(h("div", { class: "row" },
    h("div", {}, h("p", {}, h("strong", { text: e.role }), " — " + e.place), h("p", { class: "what", text: e.text })),
    h("span", { class: "when", text: e.period }))));

  D.education.forEach(e => $("education").append(h("div", { class: "row" },
    h("p", {}, h("strong", { text: e.title }), " — " + e.place),
    h("span", { class: "when", text: e.period }))));

  D.skills.forEach(s => $("skills").append(h("dt", { text: s.group }), h("dd", { text: s.items })));

  $("contact").append("Me escreva em ", h("a", { href: "mailto:" + D.email, text: D.email }), ".");
})();
