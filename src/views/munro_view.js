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
  this.container.appendChild(munroContainer)


}


MunroView.prototype.createMunroList = function () {
  const munroUl = document.createElement('ul');
  this.populateListName(munroUl);
  this.populateListHeight(munroUl);
  this.populateListMeaning(munroUl);
  return munroUl;
}

MunroView.prototype.populateListName = function(list) {
    const munroListItem  = document.createElement('h3');
    munroListItem.textContent = this.munro.name;
    list.appendChild(munroListItem);
    console.log('Munro list item', munroListItem.textContent);
}

MunroView.prototype.populateListHeight = function(list) {
    const munroListItem  = document.createElement('li');
    munroListItem.textContent = this.munro.height;
    list.appendChild(munroListItem);
    console.log('Munro list item', munroListItem.textContent);
}

MunroView.prototype.populateListMeaning = function(list) {
    const munroListItem  = document.createElement('li');
    munroListItem.textContent = this.munro.meaning;
    list.appendChild(munroListItem);
    console.log('Munro list item', munroListItem.textContent);
}



module.exports = MunroView;
