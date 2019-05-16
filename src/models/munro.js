const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Munro = function(url) {
  this.url = url;
  this.munros = [];
};

Munro.prototype.getData = function () {
  const request = new RequestHelper(this.url);

    request.get()
      .then((data) => {
        this.munros = data;
        PubSub.publish('Munro:munro-data-ready', this.munros);
        console.log(data);
      })
  };

Munro.prototype.handleDataReady = function (munros) {
  const munroNames = this.getMunroNames(munros);
  console.log(munroNames);
}

Munro.prototype.getMunroNames = function (munros) {
  return munros
    .map(munro => munro.name)
}


module.exports = Munro;
