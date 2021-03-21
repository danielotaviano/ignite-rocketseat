import { Router } from 'express';
import { generateCreateSpecificationController } from '../modules/cars/use-cases/create-specification/generators/generate-create-specification-controller';

export const specificationsRoutes = Router();

specificationsRoutes.post('/', (request, response) =>
  generateCreateSpecificationController().handle(request, response)
);
