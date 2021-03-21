import { CategoriesRepository } from '../../../repositories/categories-repository';
import { ListCategoriesController } from '../list-categories-controller';
import { ListCategoriesUseCase } from '../list-categories-usecase';

export function generateListCategoriesController() {
  const categoriesRepository = CategoriesRepository.getInstance();
  const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
  const listCategoriesController = new ListCategoriesController(
    listCategoriesUseCase
  );

  return listCategoriesController;
}
