const Munro = require('./models/munro.js');

const MunroListView = require('./views/munro_list_view.js')

document.addEventListener('DOMContentLoaded', () => {

  const munro = new Munro('https://munroapi.herokuapp.com/munros');
  console.log(munro);
  munro.getData();

});
