/* CARDS - OBRAS TERMINADAS */

const obrasTerminadasArray = [
    {
      direccion: "Triunvirato 5469",
      inicio: "2020",
      superficie: "3105 m2",
      pisos: "15",
      cocheras: "23",
      unidades: "1 - 2 - 3 ambientes",
      imagen: "../img/desaguadero4147.jpg",
      id: 1,
      detalles: "../detalles-obras/desaguadero.html"
    },
    {
      direccion: "Calle 123",
      inicio: "2021",
      superficie: "2500 m2",
      pisos: "12",
      cocheras: "20",
      unidades: "2 - 3 ambientes",
      imagen: '../img/segurola.jpeg'
    },
  ];

  // Obtener el contenedor de las cards
  const cardsContainer = document.getElementById('cards-container');

  // Manejador de clic en el enlace "Más información"
  function redirectToDetailsPage(id) {
      window.location.href = `detalles.html?id=${id}`;
  }

  // Crear las cards con los diferentes datos
  obrasTerminadasArray.forEach(obrasTerminadas => {
    const card = document.createElement('div');
    card.className = 'card container';

    // Agregar contenido dinámicamente
    card.innerHTML = `
      <div>
      <img src="${obrasTerminadas.imagen}" alt="${obrasTerminadas.direccion}" class="img-cards">
      </div>
      <div class="cards-info">
      <h2>${obrasTerminadas.direccion}</h2>
      <p>Inicio: ${obrasTerminadas.inicio}</p>
      <p>Superficie: ${obrasTerminadas.superficie}</p>
      <p>Pisos: ${obrasTerminadas.pisos}</p>
      <p>Cocheras: ${obrasTerminadas.cocheras}</p>
      <p>Unidades: ${obrasTerminadas.unidades}</p>
      <a href="#" class="a-card" onclick="redirectToDetailsPage('${obrasTerminadas.id}')">Más información <img src="../img/arrow.png" alt="flecha mas informacion" class="flecha"></a>      </div>
    `;

    // Agregar la card al contenedor
    cardsContainer.appendChild(card);
  });