import { Router } from 'express';
import { SpecificationsRepository } from '../modules/cars/repositories/specifications-repository';
import { CreateSpecificationService } from '../modules/cars/services/create-specification-service';

export const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post('/', (request, response) => {
  const { name, description } = request.body;
  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository
  );

  createSpecificationService.handle({ name, description });

  return response.status(201).send();
});
