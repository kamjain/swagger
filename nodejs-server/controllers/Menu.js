'use strict';

var utils = require('../utils/writer.js');
var Menu = require('../service/MenuService');

module.exports.menuCategoryGET = function menuCategoryGET (req, res, next, category) {
  Menu.menuCategoryGET(category)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.menuGET = function menuGET (req, res, next) {
  Menu.menuGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.menuPOST = function menuPOST (req, res, next, body) {
  Menu.menuPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
