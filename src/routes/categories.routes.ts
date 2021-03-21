import { Router } from 'express';
import { generateCreateCategoryController } from '../modules/cars/use-cases/create-category/generators/generate-create-category-controller';
import { generateListCategoriesController } from '../modules/cars/use-cases/list-categories/generators/generate-list-categories-controller';

export const categoriesRoutes = Router();
categoriesRoutes.post('/', (request, response) =>
  generateCreateCategoryController().handle(request, response)
);

categoriesRoutes.get('/', (request, response) =>
  generateListCategoriesController().handle(request, response)
);
