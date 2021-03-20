"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
var express_1 = require("express");
exports.categoriesRoutes = express_1.Router();
var categories = [];
exports.categoriesRoutes.post('/categories', function (request, response) {
    var _a = request.body, name = _a.name, description = _a.description;
    categories.push({ name: name, description: description });
    return response.status(201);
});
