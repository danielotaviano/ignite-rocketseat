import { CategoriesRepositoryInterface } from '../../interfaces/categories-repository.interface';

interface Request {
  name: string;
  description: string;
}

export class CreateCategoryUseCase {
  constructor(
    private readonly categoriesRepository: CategoriesRepositoryInterface
  ) {}

  handle({ name, description }: Request): void {
    const existsCategory = this.categoriesRepository.findByName(name);

    if (existsCategory)
      throw new Error('category with this name already exist');

    this.categoriesRepository.create({ name, description });
  }
}
