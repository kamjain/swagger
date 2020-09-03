'use strict';


/**
 *
 * category String 
 * returns List
 **/
exports.menuCategoryGET = function(category) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "price" : 0,
  "name" : "Sweet Potato Fries",
  "available" : true,
  "category" : "Appetizers"
}, {
  "price" : 0,
  "name" : "Sweet Potato Fries",
  "available" : true,
  "category" : "Appetizers"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * returns List
 **/
exports.menuGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "price" : 0,
  "name" : "Sweet Potato Fries",
  "available" : true,
  "category" : "Appetizers"
}, {
  "price" : 0,
  "name" : "Sweet Potato Fries",
  "available" : true,
  "category" : "Appetizers"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new item to the menu
 *
 * body MenuItem  (optional)
 * no response value expected for this operation
 **/
exports.menuPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

