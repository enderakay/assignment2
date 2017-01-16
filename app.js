(function(){
  'use strict';

  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'] ;
function ToBuyController(ShoppingListCheckOffService){
  var tobuy = this;
  tobuy.toBuyList = ShoppingListCheckOffService.getToBuyItems();
  tobuy.buyItem = function(index){ShoppingListCheckOffService.addToBought(index);}
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'] ;
function AlreadyBoughtController(ShoppingListCheckOffService){
  var alreadyBuy = this;
  alreadyBuy.boughtItems = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService(){
  var service = this;
  var tobuylist = [{name:"milk",quantity:1},
      {name:"chocolate",quantity:2},
      {name:"pop corn",quantity:3},
      {name:"cokies",quantity:1},
      {name:"chips",quantity:2}];
  var boughtlist =[];

  service.addToBought = function (index){
    var item = tobuylist[index];
    tobuylist.splice(index,1);
    boughtlist.push(item);
  }

  service.getBoughtItems = function(){return boughtlist;}
  service.getToBuyItems = function(){return tobuylist;}
}
})();
