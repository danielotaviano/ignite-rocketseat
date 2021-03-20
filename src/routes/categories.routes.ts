import { Router } from 'express';
import { v4 as uuid } from 'uuid';

export const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const categorie = {
    id: uuid(),
    name,
    description,
  };

  categories.push(categorie);

  return response.status(201).send();
});
