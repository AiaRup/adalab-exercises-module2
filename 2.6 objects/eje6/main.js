'use strict';

const contador = {
  máximo: 10,
  mínimo: 0,
  valorActual: 5,
  valorInicial: 0,
  aumentar: function() {
    if (this.valorActual < this.máximo) {
      this.valorActual++;
      console.log('valorActual', this.valorActual);
    } else {
      console.log('No sepuede aumentar porque el valorActual llego al maximo');
    }
  },
  disminuir: function() {
    if (this.valorActual > this.mínimo) {
      this.valorActual--;
      console.log('valorActual', this.valorActual);
    } else {
      console.log('No sepuede disminuir porque el valorActual llego al minimo');
    }
  },
  restablecer: function() {
    this.valorActual = this.valorInicial;
    console.log('valorActual', this.valorActual);
  }
};

contador.aumentar();
contador.aumentar();
contador.aumentar();
contador.aumentar();
contador.aumentar();
contador.aumentar();
contador.disminuir();
contador.disminuir();
contador.disminuir();
contador.disminuir();
contador.disminuir();
contador.disminuir();
contador.disminuir();
contador.disminuir();
contador.disminuir();
contador.disminuir();
contador.disminuir();
contador.restablecer();
