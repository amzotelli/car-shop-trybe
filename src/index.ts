import CarController from './controllers/CarController';
import { Car } from './interfaces/CarInterface';
import CarRouter from './routes/Router';

import App from './server';

const server = new App();

const carController = new CarController();

const carRouter = new CarRouter<Car>();
carRouter.addRoute(carController);

server.addRouter(carRouter.router);

server.startServer();
