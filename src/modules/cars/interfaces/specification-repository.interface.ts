import { CreateSpecificationDTO } from '../dtos/create-specification-dto';
import { Specification } from '../model/specification';

export interface SpecificationsRepositoryInterface {
  create({ description, name }: CreateSpecificationDTO);
  findByName(name: string): Specification;
}
