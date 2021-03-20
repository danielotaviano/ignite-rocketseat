import { Router } from 'express';
import { CategoriesRepository } from '../repositories/categories-repository';

export const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const existsCategory = categoriesRepository.findByName(name);

  if (existsCategory)
    return response
      .status(409)
      .json({ error: 'category with this name already exists' });

  categoriesRepository.create({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  return response.json(categoriesRepository.list());
});
