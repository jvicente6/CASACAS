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
        <img src="img/barcelona2011.jpg" alt="Camiseta Barcelona">
        <p>Barcelona 2015/16</p>
      </div>
    `;
  } else if (equipo === "real") {
    titulo.textContent = "Real Madrid";
    contenido = `
      <div class="camiseta">
        <img src="img/realmadrid.jpg" alt="Camiseta Real Madrid">
        <p>Real Madrid 2017/18</p>
      </div>
      
      <div class="camiseta">
        <img src="img/realmadrid1950.jpg" alt="Camiseta Real Madrid">
        <p>Real Madrid 1950/1951</p>
      </div>
      
       <div class="camiseta">
        <img src="img/realmadrid2001.jpeg" alt="Camiseta Real Madrid">
        <p>Real Madrid 2001/2002</p>
      </div>

        <div class="camiseta">
        <img src="img/realmadrid2013.webp" alt="Camiseta Real Madrid">
        <p>Real Madrid 2013/2014</p>
      </div>
      
    `;
  } else if (equipo === "liverpool") {
    titulo.textContent = "Liverpool";
    contenido = `
      <div class="camiseta">
        <img src="img/liverpool2019.jpg" alt="Camiseta Liverpool">
        <p>Liverpool 2019/20</p>
      </div>
    `;
  } else if (equipo === "manutd") {
    titulo.textContent = "Manchester United";
    contenido = `
      <div class="camiseta">
        <img src="img/manchesterutd2008.jpg" alt="Camiseta Manchester United">
        <p>Man. United 2020/21</p>
      </div>
    `;
  }

  info.innerHTML = contenido;
}
