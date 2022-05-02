import App from './app';
import CustomRouter from './router';

import { Car } from './interfaces/CarInterface';
import CarController from './controllers/CarController';

const server = new App();

const carController = new CarController();
const carRouter = new CustomRouter<Car>();
carRouter.addRoute(carController);

server.addRouter(carRouter.getRouter());

export default server;
