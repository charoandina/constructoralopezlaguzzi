/* CARDS - OBRAS TERMINADAS */

const obrasTerminadasArray = [
    {
      direccion: "Triunvirato 5469",
      inicio: "2020",
      superficie: "3105 m2",
      pisos: "15",
      cocheras: "23",
      unidades: "1 - 2 - 3 ambientes",
      imagen: "img/ed-triunvirato.jpeg"
    },
    {
      direccion: "Calle 123",
      inicio: "2021",
      superficie: "2500 m2",
      pisos: "12",
      cocheras: "20",
      unidades: "2 - 3 ambientes",
      imagen: "img/segurola.jpeg"
    },
  ];

  // Obtener el contenedor de las cards
  const cardsContainer = document.getElementById('cards-container');

  // Crear las cards con los diferentes conjuntos de datos
  obrasTerminadasArray.forEach(obrasTerminadas => {
    const card = document.createElement('div');
    card.className = 'card container';

    // Agregar contenido dinámicamente
    card.innerHTML = `
      <div>
      <img src="${obrasTerminadas.imagen}" alt="${obrasTerminadas.direccion}">
      </div>
      <div>
      <h2>${obrasTerminadas.direccion}</h2>
      <p><strong>Inicio:</strong> ${obrasTerminadas.inicio}</p>
      <p><strong>Superficie:</strong> ${obrasTerminadas.superficie}</p>
      <p><strong>Pisos:</strong> ${obrasTerminadas.pisos}</p>
      <p><strong>Cocheras:</strong> ${obrasTerminadas.cocheras}</p>
      <p><strong>Unidades:</strong> ${obrasTerminadas.unidades}</p>
      </div>
    `;

    // Agregar la card al contenedor
    cardsContainer.appendChild(card);
  });