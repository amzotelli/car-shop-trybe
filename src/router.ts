import { Router } from 'express';
import MongoController from './controllers/MongoController';

class CustomRouter<T> {
  private router: Router;

  constructor() {
    this.router = Router();
  }

  public addRoute(
    controller: MongoController<T>,
    route: string = controller.route,
  ) {
    this.router.get(route, controller.read);
    this.router.get(`${route}/:id`, controller.readOne);
    this.router.post(route, controller.create);
    this.router.put(`${route}/:id`, controller.update);
    this.router.delete(`${route}/:id`, controller.delete);
  }

  public getRouter() {
    return this.router;
  }
}

export default CustomRouter;
