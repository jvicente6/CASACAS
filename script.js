function mostrarEquipo(equipo) {
  const info = document.getElementById("info");
  const titulo = document.getElementById("titulo");

  let contenido = "";

  if (equipo === "barcelona") {
    titulo.textContent = "Barcelona";
    contenido = `
      <div class="camiseta" data-nombre="barcelona 2010 2011 fc barça">
        <img src="camisetas/barcelona2011.jpg" alt="Camiseta Barcelona">
        <p>Barcelona 2010/11</p>
      </div>
      <div class="camiseta" data-nombre="barcelona 2015 2016 fc barça">
        <img src="camisetas/barcelona2015.jpg" alt="Camiseta Barcelona">
        <p>Barcelona 2015/16</p>
      </div>
      <div class="camiseta" data-nombre="barcelona 2008 2009 fc barça">
        <img src="camisetas/barcelona2008-2009.jpeg" alt="Camiseta Barcelona">
        <p>Barcelona 2008/09</p>
      </div>
      <div class="camiseta" data-nombre="barcelona 1999 2000 fc barça">
        <img src="camisetas/barcelona1999.webp" alt="Camiseta Barcelona">
        <p>Barcelona 1999/2000</p>
      </div>
    `;
  } else if (equipo === "real") {
    titulo.textContent = "Real Madrid";
    contenido = `
      <div class="camiseta" data-nombre="real madrid 2017 2018 realmadrid">
        <img src="camisetas/realmadrid.jpg" alt="Camiseta Real Madrid">
        <p>Real Madrid 2017/18</p>
      </div>
      <div class="camiseta" data-nombre="real madrid 1950 1951 realmadrid">
        <img src="camisetas/realmadrid1950.jpg" alt="Camiseta Real Madrid">
        <p>Real Madrid 1950/1951</p>
      </div>
      <div class="camiseta" data-nombre="real madrid 2001 2002 realmadrid">
        <img src="camisetas/realmadrid2001.jpeg" alt="Camiseta Real Madrid">
        <p>Real Madrid 2001/2002</p>
      </div>
      <div class="camiseta" data-nombre="real madrid 2013 2014 realmadrid">
        <img src="camisetas/realmadrid2013.webp" alt="Camiseta Real Madrid">
        <p>Real Madrid 2013/2014</p>
      </div>
    `;
  } else if (equipo === "liverpool") {
    titulo.textContent = "Liverpool";
    contenido = `
      <div class="camiseta" data-nombre="liverpool 2019 2020 premier league">
        <img src="camisetas/liverpool2019.jpg" alt="Camiseta Liverpool">
        <p>Liverpool 2019/20</p>
      </div>
    `;
  } else if (equipo === "manutd") {
    titulo.textContent = "Manchester United";
    contenido = `
      <div class="camiseta" data-nombre="manchester united 2020 2021 manutd premier league">
        <img src="camisetas/manchesterutd2008.jpg" alt="Camiseta Manchester United">
        <p>Man. United 2020/21</p>
      </div>
    `;
  }

  info.innerHTML = contenido;
}
