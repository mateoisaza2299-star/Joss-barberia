document.documentElement.classList.add("js");
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) document.documentElement.classList.add("motion");
window.__mcMotion = "pending";
window.setTimeout(function () {
  if (window.__mcMotion === "ready") return;
  document.documentElement.classList.add("motion-ready");
}, 300);

// Único lugar de la marca. Para usar un logo, sustituye este bloque.
function pintarMarca() {
  document.querySelectorAll("[data-marca]").forEach(function (slot) {
    var marca = document.createElement("span");
    marca.className = "marca";
    var nombre = document.createElement("span");
    nombre.className = "marca-script";
    nombre.textContent = "Joss";
    var rubro = document.createElement("span");
    rubro.className = "marca-rubro";
    rubro.textContent = "Peluquería";
    marca.appendChild(nombre);
    marca.appendChild(rubro);
    slot.replaceChildren(marca);
  });
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", pintarMarca);
else pintarMarca();
