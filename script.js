// --- MOSTRAR / OCULTAR LIGAS ---
function toggleLiga(id) {
  const liga = document.getElementById(id);
  liga.classList.toggle("oculto");
}

// --- MOSTRAR EQUIPO ---
function mostrarEquipo(equipo) {
  const info = document.getElementById("info");
  const titulo = document.getElementById("titulo");

  let contenido = "";

  switch (equipo) {
    case "barcelona":
      titulo.textContent = "Barcelona";
      contenido = `
        <div class="camiseta">
          <img src="camisetas/barcelona2011.jpg" alt="Camiseta Barcelona">
          <p>Barcelona 2010/11</p>
        </div>
        <div class="camiseta">
          <img src="camisetas/barcelona2015.jpg" alt="Camiseta Barcelona">
          <p>Barcelona 2015/16</p>
        </div>
        <div class="camiseta">
          <img src="camisetas/barcelona2008-2009.jpeg" alt="Camiseta Barcelona">
          <p>Barcelona 2008/09</p>
        </div>
        <div class="camiseta">
          <img src="camisetas/barcelona1999.webp" alt="Camiseta Barcelona">
          <p>Barcelona 1999/2000</p>
        </div>
      `;
      break;

    case "real":
      titulo.textContent = "Real Madrid";
      contenido = `
        <div class="camiseta">
          <img src="camisetas/realmadrid.jpg" alt="Camiseta Real Madrid">
          <p>Real Madrid 2017/18</p>
        </div>
        <div class="camiseta">
          <img src="camisetas/realmadrid1950.jpg" alt="Camiseta Real Madrid">
          <p>Real Madrid 1950/51</p>
        </div>
        <div class="camiseta">
          <img src="camisetas/realmadrid2001.jpeg" alt="Camiseta Real Madrid">
          <p>Real Madrid 2001/02</p>
        </div>
        <div class="camiseta">
          <img src="camisetas/realmadrid2013.webp" alt="Camiseta Real Madrid">
          <p>Real Madrid 2013/14</p>
        </div>
      `;
      break;

    case "liverpool":
      titulo.textContent = "Liverpool";
      contenido = `
        <div class="camiseta">
          <img src="camisetas/liverpool2019.jpg" alt="Camiseta Liverpool">
          <p>Liverpool 2019/20</p>
        </div>
      `;
      break;

    case "manutd":
      titulo.textContent = "Manchester United";
      contenido = `
        <div class="camiseta">
          <img src="camisetas/manchesterutd2008.jpg" alt="Camiseta Manchester United">
          <p>Manchester United 2008/09</p>
        </div>
      `;
      break;

    default:
      titulo.textContent = "Selecciona un equipo";
      contenido = "";
      break;
  }

  info.innerHTML = contenido;

  // Vuelve a activar el buscador después de cambiar el contenido
  activarBuscador();
}

// --- BUSCADOR ---
function activarBuscador() {
  const buscador = document.getElementById("buscador");
  const info = document.getElementById("info");

  if (!buscador) return;

  buscador.addEventListener("input", function () {
    const texto = this.value.toLowerCase().trim();
    const camisetas = info.querySelectorAll(".camiseta");

    camisetas.forEach(camiseta => {
      const nombre = camiseta.textContent.toLowerCase();
      camiseta.style.display = nombre.includes(texto) ? "block" : "none";
    });
  });
}

// --- INICIALIZAR AL CARGAR ---
document.addEventListener("DOMContentLoaded", activarBuscador);

