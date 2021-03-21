import { CategoriesRepositoryInterface } from '../../interfaces/categories-repository.interface';
import { Category } from '../../model/category';

export class ListCategoriesUseCase {
  constructor(
    private readonly categoriesRepository: CategoriesRepositoryInterface
  ) {}

  handle(): Category[] {
    return this.categoriesRepository.list();
  }
}
