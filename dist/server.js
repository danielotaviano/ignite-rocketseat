"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var categories_routes_1 = require("./routes/categories.routes");
var app = express_1.default();
app.use(express_1.default.json());
app.use(categories_routes_1.categoriesRoutes);
app.listen(3000, function () { return console.log('Server is running'); });
