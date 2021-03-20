import { Router } from 'express';
import { CategoriesRepository } from '../repositories/categories-repository';

export const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  categoriesRepository.create({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  return response.json(categoriesRepository.list());
});
