/**
 *
 * Hello Vue
 *
 *
 */

// Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.
// BONUS aggiungere un'immagine presa anch'essa da un data (url dell'immagine)

  const app = new Vue({
    el: '#root',
    data: {
      titolo: 'Hello Vue',
      imm: 'https://miro.medium.com/max/900/1*vYKA-nnA_hvBZil2TTq37g.jpeg'
    }
  });
