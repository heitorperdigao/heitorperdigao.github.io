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

  /* ---------- cabeçalho / coluna lateral ---------- */
  document.title = D.name;
  $("demo").hidden = !D.demo;
  const words = D.name.split(" ");
  const last = words.pop();
  $("name").append(words.join(" ") + " ", h("em", { text: last }));
  $("role").textContent = D.role || "";
  $("intro").textContent = D.intro;
  D.links.forEach(l => $("links").append(link(l)));
  // links do rodapé da lateral não precisam do sublinhado de texto; o estilo cuida disso

  /* ---------- sobre ---------- */
  D.about.forEach(p => $("about").append(h("p", { text: p })));

  /* ---------- projetos (cada um abre e fecha com <details>, sem JavaScript extra) ---------- */
  D.projects.forEach(p => {
    const block = (title, node) => [h("h3", { text: title }), node];
    const links = (p.links || []).filter(l => l.url);
    const stack = [].concat(p.stack || []);
    $("projects").append(h("details", {},
      h("summary", {},
        h("span", {}, h("span", { class: "t", text: p.title }), h("span", { class: "s", text: p.summary })),
        p.year ? h("span", { class: "y", text: p.year }) : null),
      h("div", { class: "body" },
        p.problem ? block("O problema", h("p", { text: p.problem })) : null,
        p.steps && p.steps.length ? block("Como eu fiz", h("ol", {}, p.steps.map(s => h("li", { text: s })))) : null,
        p.result ? block("Resultado", h("p", { text: p.result })) : null,
        p.learned ? block("O que aprendi", h("p", { text: p.learned })) : null,
        stack.length || links.length
          ? h("p", { class: "stack" },
              stack.length ? ["Feito com: ", stack.map((s, i) => [i ? " " : "", h("code", { text: s })])] : "",
              stack.length && links.length ? " · " : "",
              links.map((l, i) => [i ? " · " : "", link(l)]))
          : null)));
  });

  /* ---------- experiência e formação ---------- */
  D.experience.forEach(e => $("experience").append(h("div", { class: "row" },
    h("span", { class: "when", text: e.period }),
    h("div", {},
      h("p", {}, h("strong", { text: e.role }), " · ", h("span", { class: "place", text: e.place })),
      h("p", { class: "what", text: e.text })))));

  D.education.forEach(e => $("education").append(h("div", { class: "row" },
    h("span", { class: "when", text: e.period }),
    h("div", {}, h("p", {}, h("strong", { text: e.title })), h("p", { class: "what", text: e.place })))));

  /* ---------- habilidades ---------- */
  D.skills.forEach(s => $("skills").append(h("div", { class: "skill" },
    h("span", { class: "k", text: s.group }),
    h("p", { text: s.items }))));

  /* ---------- contato ---------- */
  $("contact").append("Me escreva em ", h("a", { href: "mailto:" + D.email, text: D.email }), ".");

  /* ---------- extras (só aparecem se a página tiver o elemento) ---------- */
  if (D.photo && document.querySelector(".side")) {
    document.querySelector(".side").prepend(h("img", { class: "photo", src: D.photo, alt: "Foto de " + D.name, width: 64, height: 64 }));
  }
  if ($("foot")) {
    $("foot").append("Feito à mão com HTML, CSS e JavaScript. ", D.repo ? link({ label: "Ver o código ↗", url: D.repo }) : "");
  }
  const themeBtn = $("theme");
  if (themeBtn) {
    const root = document.documentElement;
    try { const s = localStorage.getItem("tema"); if (s) root.dataset.theme = s; } catch (e) {}
    const isDark = () => (root.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")) === "dark";
    const label = () => { themeBtn.textContent = isDark() ? "tema: escuro" : "tema: claro"; };
    label();
    themeBtn.addEventListener("click", () => {
      const next = isDark() ? "light" : "dark";
      root.dataset.theme = next;
      try { localStorage.setItem("tema", next); } catch (e) {}
      label();
    });
  }
  console.log("Curioso? O código deste site está em " + (D.repo || "") + "\nSe quiser conversar: " + D.email);

  /* ---------- destaca no menu a seção que está na tela ---------- */
  const navLinks = [...document.querySelectorAll("#nav a")];
  const spy = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
    });
  }, { rootMargin: "-25% 0px -65% 0px" });
  document.querySelectorAll("main section").forEach(s => spy.observe(s));
})();
