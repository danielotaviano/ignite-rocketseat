import { Request, Response } from 'express';
import { CreateCategoryUseCase } from './create-category-usecase';

export class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    this.createCategoryUseCase.handle({ name, description });

    return response.status(201).send();
  }
}
