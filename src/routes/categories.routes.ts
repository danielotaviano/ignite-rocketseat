import { Router } from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/categories-repository';
import { generateCreateCategoryController } from '../modules/cars/use-cases/create-category/generators/generate-create-category-controller';

export const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) =>
  generateCreateCategoryController().handle(request, response)
);

categoriesRoutes.get('/', (request, response) => {
  return response.json(categoriesRepository.list());
});
