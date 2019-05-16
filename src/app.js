const Munro = require('./models/munro.js');
const MunroListView = require('./views/munro_list_view.js')

document.addEventListener('DOMContentLoaded', () => {
  const munroListContainer = document.querySelector('#munros')
  const munroListView = new MunroListView(munroListContainer)
  munroListView.bindEvents();

  const munro = new Munro('https://munroapi.herokuapp.com/munros');
  console.log(munro);
  munro.getData();

});
