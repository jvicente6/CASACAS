function toggleLiga(id) {
  const liga = document.getElementById(id);
  liga.classList.toggle("oculto");
}

function mostrarEquipo(equipo) {
  const info = document.getElementById("info");
  const titulo = document.getElementById("titulo");

  let contenido = "";

  if (equipo === "barcelona") {
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
  } else if (equipo === "real") {
    titulo.textContent = "Real Madrid";
    contenido = `
      <div class="camiseta">
        <img src="camisetas/realmadrid.jpg" alt="Camiseta Real Madrid">
        <p>Real Madrid 2017/18</p>
      </div>
      <div class="camiseta">
        <img src="camisetas/realmadrid1950.jpg" alt="Camiseta Real Madrid">
        <p>Real Madrid 1950/1951</p>
      </div>
      <div class="camiseta">
        <img src="camisetas/realmadrid2001.jpeg" alt="Camiseta Real Madrid">
        <p>Real Madrid 2001/2002</p>
      </div>
      <div class="camiseta">
        <img src="camisetas/realmadrid2013.webp" alt="Camiseta Real Madrid">
        <p>Real Madrid 2013/2014</p>
      </div>
    `;
  } else if (equipo === "liverpool") {
    titulo.textContent = "Liverpool";
    contenido = `
      <div class="camiseta">
        <img src="camisetas/liverpool2019.jpg" alt="Camiseta Liverpool">
        <p>Liverpool 2019/20</p>
      </div>
    `;
  } else if (equipo === "manutd") {
    titulo.textContent = "Manchester United";
    contenido = `
      <div class="camiseta">
        <img src="camisetas/manchesterutd2008.jpg" alt="Camiseta Manchester United">
        <p>Man. United 2020/21</p>
      </div>
    `;
  }

  info.innerHTML = contenido;
}

/* --- BUSCADOR --- */
document.addEventListener("DOMContentLoaded", () => {
  const buscador = document.getElementById("buscador");

  if (buscador) {
    buscador.addEventListener("input", function () {
      const texto = this.value.toLowerCase().trim();
      const camisetas = document.querySelectorAll("#info .camiseta");

      camisetas.forEach(camiseta => {
        const nombre = camiseta.textContent.toLowerCase();
        if (nombre.includes(texto)) {
          camiseta.style.display = "block";
        } else {
          camiseta.style.display = "none";
        }
      });
    });
  }
});
