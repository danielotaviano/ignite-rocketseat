import { Router } from 'express';
import { CategoriesRepository } from '../repositories/categories-repository';
import { CreateCategoryService } from '../services/create-category-service';

export const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);
  createCategoryService.handle({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  return response.json(categoriesRepository.list());
});
