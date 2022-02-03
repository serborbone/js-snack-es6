let bici = [

    {
      nome: 'Alpina Bike',
      peso: 7.90,
    },

    {
      nome: 'Voyager',
      peso: 10.98,
    },

    {
      nome: 'Bikestar',
      peso: 12.60,
    },

    {
      nome: 'Daytona',
      peso: 15.20,
    },

    {
      nome: 'Legnano Ciclo 101',
      peso: 8.20,
    },

];

let biciName = [];
let biciPeso = [];

for (let key in bici) {

  biciName.push(bici[key].nome);
  biciPeso.push(bici[key].peso);

}

  let [nome] = biciName;

//trovo la bici col peso minore
 let minPeso = Math.min(...biciPeso);

document.getElementById('stamp').innerHTML = `La bici che pesa meno è: ${nome} con un peso di ${minPeso} kg`;