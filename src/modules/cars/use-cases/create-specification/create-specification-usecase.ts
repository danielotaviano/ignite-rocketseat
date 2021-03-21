import { SpecificationsRepositoryInterface } from '../../interfaces/specification-repository.interface';

export interface Request {
  name: string;
  description: string;
}
export class CreateSpecificationUseCase {
  constructor(
    private readonly specificationsRepository: SpecificationsRepositoryInterface
  ) {}

  handle({ name, description }: Request) {
    const existsSpecification = this.specificationsRepository.findByName(name);

    if (existsSpecification)
      throw new Error('specficiatio with this name already exists');

    this.specificationsRepository.create({ name, description });
  }
}
