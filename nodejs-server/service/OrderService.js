'use strict';


/**
 *
 * body Order  (optional)
 * returns MenuItemsOrdered
 **/
exports.orderPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "itemName" : "Sweet Potato Fries",
  "quantity" : 2
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

