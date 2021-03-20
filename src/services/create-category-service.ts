import { CategoriesRepository } from '../repositories/categories-repository';

interface Request {
  name: string;
  description: string;
}

export class CreateCategoryService {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  handle({ name, description }: Request): void {
    const existsCategory = this.categoriesRepository.findByName(name);

    if (existsCategory)
      throw new Error('category with this name already exist');

    this.categoriesRepository.create({ name, description });
  }
}
