import { SpecificationsRepository } from '../../../repositories/specifications-repository';
import { CreateSpecificationController } from '../create-specification-controller';
import { CreateSpecificationUseCase } from '../create-specification-usecase';

export function generateCreateSpecificationController() {
  const specificationsRepository = SpecificationsRepository.getInstance();
  const createSpecificationUseCase = new CreateSpecificationUseCase(
    specificationsRepository
  );
  const createSpecificationController = new CreateSpecificationController(
    createSpecificationUseCase
  );

  return createSpecificationController;
}
