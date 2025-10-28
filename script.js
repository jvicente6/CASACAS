function toggleLiga(id) {
  const lista = document.getElementById(id);
  lista.classList.toggle('oculto');
}

function mostrarEquipo(equipo) {
  const titulo = document.getElementById('titulo');
  const info = document.getElementById('info');

  const data = {
    liverpool: {
      nombre: "Liverpool FC",
      descripcion: "Camiseta 2019/20 – año en que ganaron la Premier después de 30 años.",
      img: "img/liverpool.jpg"
    },
    manutd: {
      nombre: "Manchester United",
      descripcion: "Camiseta 2008 – cuando ganaron la Champions con Cristiano y Rooney.",
      img: "img/manutd.jpg"
    },
    barcelona: {
      nombre: "FC Barcelona",
      descripcion: "Camiseta 2011 – el equipo de Guardiola, Messi, Xavi e Iniesta.",
      img: "img/barcelona.jpg"
    },
    real: {
      nombre: "Real Madrid",
      descripcion: "Camiseta 2018 – la 13ª Champions, con Cristiano y Zidane.",
      img: "img/realmadrid.jpg"
    }
  };

  if (data[equipo]) {
    titulo.textContent = data[equipo].nombre;
    info.innerHTML = `
      <img src="${data[equipo].img}" alt="${data[equipo].nombre}" style="width:300px;border-radius:10px;">
      <p>${data[equipo].descripcion}</p>
    `;
  }
}
