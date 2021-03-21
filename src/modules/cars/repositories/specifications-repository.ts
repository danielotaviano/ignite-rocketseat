import { CreateSpecificationDTO } from '../dtos/create-specification-dto';
import { SpecificationsRepositoryInterface } from '../interfaces/specification-repository.interface';
import { Specification } from '../model/specification';

export class SpecificationsRepository
  implements SpecificationsRepositoryInterface {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  findByName(name: string): Specification {
    return this.specifications.find(
      (specification) => specification.name === name
    );
  }

  create({ description, name }: CreateSpecificationDTO) {
    const specification = new Specification();
    Object.assign(specification, { name, description, created_at: new Date() });
    this.specifications.push(specification);
  }
}
