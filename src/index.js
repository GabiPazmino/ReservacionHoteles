// ARREGLO CON LA INFORMACIÓN DE LOS HOTELES
const hotels = [
  {
      name: 'Lakewood',
      rating: 3,
      rates: { weekday: { Regular: 110, Rewards: 80 }, 
              weekend: { Regular: 90, Rewards: 80 } },
      element: document.getElementById('lakewood')
  },
  {
      name: 'Bridgewood',
      rating: 4,
      rates: { weekday: { Regular: 160, Rewards: 110 }, 
              weekend: { Regular: 60, Rewards: 50 } },
      element: document.getElementById('bridgewood')
  },
  {
      name: 'Ridgewood',
      rating: 5,
      rates: { weekday: { Regular: 220, Rewards: 100 }, 
              weekend: { Regular: 150, Rewards: 40 } },
      element: document.getElementById('ridgewood')
  }
];

// DECLARACIÓN DE VARIABLES DEL DOM
const submitButton = document.querySelector("#submitButton");
const container = document.querySelector(".reservationContainer");
const customerTypeInput = document.querySelector("#customerType");
const dateInput = document.querySelector("#dates");
// const ridgewood = document.getElementById('ridgewood');
// const lakewood = document.getElementById('lakewood');
// const bridgewood = document.getElementById('bridgewood');



// FUNCION PARA OBTENER EL HOTEL MÁS BARATO
function getBestHotel(hotels, date, customerType) {
  const day = new Date(date).getDay();
  const isWeekend = (day === 0 || day === 6); // 0 = Domingo, 6 = Sábado

  let bestHotel = null;

  hotels.forEach(hotel => {
      const rateType = isWeekend ? hotel.rates.weekend : hotel.rates.weekday;
      const rate = rateType[customerType];

      if (
          !bestHotel || 
          rate < bestHotel.bestRate || 
          (rate === bestHotel.bestRate && hotel.rating > bestHotel.rating)
      ) {
          bestHotel = { name: hotel.name, bestRate: rate, rating: hotel.rating };
      }
  });
  return bestHotel;
}

// Manejador de evento para el botón
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  
  // Obtener los valores del formulario
  // const dateInput = document.querySelector("#dates");
  // const customerTypeInput = document.querySelector("#customerType");
  const date = dateInput.value;
  const customerType = customerTypeInput.value;

  // VERIFICAR QUE SE INGRESO LA FECHA Y EL TIPO DE CLIENTE
  if (!date || !customerType) {
      alert("Por favor ingresa la fecha y el tipo de cliente.");
      return;
  }

  const bestHotel = getBestHotel(hotels, date, customerType);

  // CREO UN DIV PARA MOSTRAR EL RESULTADO
  let resultDiv = document.createElement("div");
  resultDiv.classList.add("resultDiv");

  // AGREGAR LA INFORMACIÓN DEL HOTEL AL DIV
  // resultDiv.textContent = 
  //   `
  //     <h3>Hotel Más Barato</h3>
  //     <h2>${bestHotel.name}</h2>
  //     <p><strong>Tipo de cliente:</strong> ${customerType}</p>
  //     <p><strong>Fecha:</strong>${date}</p>
  //     <p><strong>Tarifa:</strong> ${bestHotel.bestRate}</p>
  //     <p><strong>Estrellas:</strong> ${bestHotel.rating}</p>
  // `;
resultDiv.innerHTML = 
  `
    <div>
      <img src="../img/${bestHotel.name}.jpg" alt="portada del álbum">
    </div>
  
    <div>
      <h3>Hotel más barato</h3>
      <br>
      <h2>${bestHotel.name}</h2>
      <br>
      <ul>
          <li><strong>Tipo de cliente:</strong> ${customerType}</li>
          <li><strong>Fecha seleccionada:</strong> ${date}</li>
          <li><strong>Tarifa:</strong> ${bestHotel.bestRate}</li>
          <li><strong>Estrellas:</strong> ${bestHotel.rating}</li>
      </ul> 
    </div>   
    `;

  
  // AGREGO EL DIV AL CONTAINER PARA VISUALIZARLO
  container.appendChild(resultDiv);     

  // LIMPIAR LOS INPUTS
  dateInput.value = "";
  customerTypeInput.value = "";
});
