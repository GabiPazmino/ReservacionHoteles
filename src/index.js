// variables
const hotels = [
    {
        name: 'Lakewood',
        rating: 3,
        rates: { weekday: { Regular: 110, Rewards: 80 }, weekend: { Regular: 90, Rewards: 80 } },
        element: document.getElementById('lakewood')
    },
    {
        name: 'Bridgewood',
        rating: 4,
        rates: { weekday: { Regular: 160, Rewards: 110 }, weekend: { Regular: 60, Rewards: 50 } },
        element: document.getElementById('bridgewood')
    },
    {
        name: 'Ridgewood',
        rating: 5,
        rates: { weekday: { Regular: 220, Rewards: 100 }, weekend: { Regular: 150, Rewards: 40 } },
        element: document.getElementById('ridgewood')
    }
];


function checkDay() {
    // Obtener el valor del input
    const inputDate = document.getElementById('dateInput').value;
    
    // Verificar si se ingresó una fecha
    if (!inputDate) {
        document.getElementById('result').innerText = 'Por favor, ingresa una fecha.';
        return;
    }

    // Convertir la fecha en un objeto Date
    const date = new Date(inputDate);

    // Obtener el día de la semana (0 = Domingo, 1 = Lunes, ..., 6 = Sábado)
    const dayOfWeek = date.getDay();

//  Determinar si es un día de semana o fin de semana
    if (dayOfWeek === 0 || dayOfWeek === 6) {
        document.getElementById('result').innerText = 'La fecha seleccionada es un fin de semana.';
       
    } else {
        document.getElementById('result').innerText = 'La fecha seleccionada es un día entre semana.';
    }
}

let clientType = document.getvalues('clientType');

if (clientType === 'Regular') {
    document.getElementById('regular').checked = true;
} else if (clientType === 'Rewards') {
    document.getElementById('rewards').checked = true;
}