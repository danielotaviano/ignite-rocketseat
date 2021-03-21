import { Request, Response } from 'express';
import { ListCategoriesUseCase } from './list-categories-usecase';

export class ListCategoriesController {
  constructor(private readonly listCategoriesUseCase: ListCategoriesUseCase) {}
  handle(_request: Request, response: Response) {
    return response.json(this.listCategoriesUseCase.handle());
  }
}
