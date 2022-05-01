import { Router } from 'express';
import MongoController from '../controllers/MongoController';

import CarValidation from '../middlewares/CarValidation';

class CustomRouter<T> {
  public router: Router;

  constructor() {
    this.router = Router();
  }

  public addRoute(
    controller: MongoController<T>,
    route: string = controller.route,
  ) {
    this.router.get(route, controller.read);
    this.router.get(`${route}/:id`, controller.readOne);
    this.router.post(route, CarValidation.validateID, controller.create);
    this.router.put(`${route}/:id`, controller.update);
    this.router.delete(`${route}/:id`, controller.delete);
  }
}

export default CustomRouter;
