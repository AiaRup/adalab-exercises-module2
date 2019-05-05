'use strict';

const adalaber1 = {
  name: 'Susana',
  age: 34,
  job: 'periodista',
  run: () => {
    console.log('Estoy corriendo');
  },
  runMarathon: distance => {
    console.log(`Estoy corriendo un maratón de ${distance} kilómetros`);
  }
};

adalaber1.run();
adalaber1.runMarathon(50);
