import { CreateCategoryDTO } from '../dtos/create-category-dto';
import { CategoriesRepositoryInterface } from '../interfaces/categories-repository.interface';
import { Category } from '../model/category';

export class CategoriesRepository implements CategoriesRepositoryInterface {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: CreateCategoryDTO): void {
    const category = new Category();
    Object.assign(category, { name, description, created_at: new Date() });
    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    return this.categories.find((category) => category.name === name);
  }
}
