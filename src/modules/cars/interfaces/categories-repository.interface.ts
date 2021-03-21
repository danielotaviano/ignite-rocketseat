import { CreateCategoryDTO } from '../dtos/create-category-dto';
import { Category } from '../model/category';

export interface CategoriesRepositoryInterface {
  findByName(name: string): Category;
  list(): Category[];
  create(data: CreateCategoryDTO): void;
}
