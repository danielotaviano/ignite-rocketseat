import { Request, Response } from 'express';
import { CreateSpecificationUseCase } from './create-specification-usecase';

export class CreateSpecificationController {
  constructor(
    private readonly createSpecificationUseCase: CreateSpecificationUseCase
  ) {}

  handle(request: Request, response: Response) {
    const { name, description } = request.body;

    this.createSpecificationUseCase.handle({ name, description });

    return response.status(201).send();
  }
}
