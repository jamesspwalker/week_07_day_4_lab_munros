const PubSub = require('../helpers/pub_sub.js');

const MunroView = function (container, munro) {
  this.container = container;
  this.munro = munro;
};

MunroView.prototype.render = function() {
  const munroContainer = document.createElement('div');

  const munroName = this.createMunroList();
  munroContainer.appendChild(munroName)
  console.log(munroName);
  this.container.appendChild(munroContainer);
}


MunroView.prototype.createMunroList = function () {
  const name = document.createElement('ul');
  this.populateList(name);
  return name;
}

MunroView.prototype.populateList = function(list) {
    const munroListItem  = document.createElement('li');
    munroListItem.textContent = this.munro.name;
    list.appendChild(munroListItem);
    console.log('Munro list item', munroListItem.textContent);
}

module.exports = MunroView;
