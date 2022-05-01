import App from './app';
import CarRouter from './routes/Router';

const server = new App();

const carRouter = new CarRouter();

server.addRouter(carRouter.router);

export default server;
