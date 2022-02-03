const squadre = [

    {
      nome: 'Sassuolo',
      punti_fatti: 0,
      falli_subiti: 0,
    },

    {
      nome: 'Bologna',
      punti_fatti: 0,
      falli_subiti: 0,
    },

    {
      nome: 'Verona',
      punti_fatti: 0,
      falli_subiti: 0,
    },

    {
      nome: 'Cagliari',
      punti_fatti: 0,
      falli_subiti: 0,
    },

];

/*ciclo gli oggetti dell'array squadre e per le chiavi 'punti_fatti' e 'falli_subiti'
assegno un numero randomico*/
for (let i = 0; i < squadre.length; i++) {

      squadre[i]['punti_fatti'] = Math.floor(Math.random() * 15 + 1);
      squadre[i]['falli_subiti'] = Math.floor(Math.random() * 40 + 1);

}

results = [];

/*ciclo nuovamente gli oggetti dell'array e con la destrutturazione assegno
a i numeri randomici alle rispettivi chiavi e pusho il tutto in un nuovo array*/
for (let i = 0; i < squadre.length; i++) {
    let {punti_fatti, falli_subiti} = squadre[i];

    results.push({puntiFatti: punti_fatti, falliSubiti: falli_subiti});
}

console.log(results);