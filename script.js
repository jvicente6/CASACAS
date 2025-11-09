// --- LÓGICA PARA MOSTRAR Y OCULTAR LIGAS ---
function toggleLiga(id) {
  const liga = document.getElementById(id);
  liga.classList.toggle("oculto");
}

// --- DATOS GLOBALES DE CAMISETAS ---
const todasLasCamisetas = [
  { nombre: "Real Madrid 2011/12", equipo: "real", imagen: "camisetas/realmadrid.jpg" },
  { nombre: "Real Madrid 1950/51", equipo: "real", imagen: "camisetas/realmadrid1950.jpg" },
  { nombre: "Real Madrid 2001/02", equipo: "real", imagen: "camisetas/realmadrid2001.jpeg" },
  { nombre: "Real Madrid 2013/14", equipo: "real", imagen: "camisetas/realmadrid2013.webp" },

  { nombre: "Barcelona 2010/11", equipo: "barcelona", imagen: "camisetas/barcelona2011.jpg" },
  { nombre: "Barcelona 2015/16", equipo: "barcelona", imagen: "camisetas/barcelona2015.jpg" },
  { nombre: "Barcelona 2008/09", equipo: "barcelona", imagen: "camisetas/barcelona2008-2009.jpeg" },
  { nombre: "Barcelona 1999/2000", equipo: "barcelona", imagen: "camisetas/barcelona1999.webp" },

  { nombre: "Liverpool 2019/20", equipo: "liverpool", imagen: "camisetas/liverpool2019.jpg" },
  { nombre: "Manchester United 2008", equipo: "manutd", imagen: "camisetas/manchesterutd2008.jpg" },
];

// --- MOSTRAR EQUIPO ---
function mostrarEquipo(equipo) {
  const info = document.getElementById("info");
  const titulo = document.getElementById("titulo");

  titulo.textContent = equipo.charAt(0).toUpperCase() + equipo.slice(1).replace("real", "Real Madrid").replace("manutd", "Manchester United");

  const camisetas = todasLasCamisetas.filter(c => c.equipo === equipo);

  info.innerHTML = camisetas.map(c => `
    <div class="camiseta">
      <img src="${c.imagen}" alt="${c.nombre}">
      <p>${c.nombre}</p>
    </div>
  `).join("");
}

// --- BUSCADOR GLOBAL ---
document.addEventListener("DOMContentLoaded", () => {
  const buscador = document.getElementById("buscador");
  const info = document.getElementById("info");
  const titulo = document.getElementById("titulo");

  buscador.addEventListener("input", () => {
    const texto = buscador.value.toLowerCase().trim();

    if (texto === "") {
      titulo.textContent = "Selecciona un equipo";
      info.innerHTML = "";
      return;
    }

    const resultados = todasLasCamisetas.filter(c =>
      c.nombre.toLowerCase().includes(texto)
    );

    if (resultados.length === 0) {
      info.innerHTML = `<p style="text-align:center;">No se encontraron resultados.</p>`;
      return;
    }

    titulo.textContent = "Resultados de búsqueda";

    info.innerHTML = resultados.map(c => `
      <div class="camiseta">
        <img src="${c.imagen}" alt="${c.nombre}">
        <p>${c.nombre}</p>
      </div>
    `).join("");
  });
});
