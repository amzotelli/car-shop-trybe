import { Request, Response } from 'express';

import Controller, {
  RequestWithBody, ResponseError,
} from './MongoController';

import CarService from '../services/CarService';
import { Car } from '../interfaces/CarInterface';

class CarController extends Controller<Car> {
  private _route: string;

  constructor(
    service = new CarService(),
    route = '/cars',
  ) {
    super(service);
    this._route = route;
  }

  get route() { return this._route; }

  // create = async (
  //   req: RequestWithBody<Car>,
  //   res: Response<Car | ResponseError>,
  // ): Promise<typeof res> => {
  //   try {
  //     const car = await this.service.create(req.body);
  //     if (!car) {
  //       return res.status(500).json({ error: this.errors.internal });
  //     }
  //     if ('error' in car) {
  //       return res.status(400).json(car);
  //     }
  //     return res.status(201).json(car);
  //   } catch (err) {
  //     return res.status(500).json({ error: this.errors.internal });
  //   }
  // };

  // read = async (
  //   _req: Request,
  //   res: Response<Car[] | ResponseError>,
  // ): Promise<typeof res> => {
  //   try {
  //     const car = await this.service.read();
  //     return res.status(200).json(car);
  //   } catch (err) {
  //     return res.status(500).json({ error: this.errors.internal });
  //   }
  // };

  // readOne = async (
  //   req: Request<{ id: string }>,
  //   res: Response<Car | ResponseError>,
  // ): Promise<typeof res> => {
  //   const { id } = req.params;
  //   try {
  //     const car = await this.service.readOne(id);
  //     if (!car) return res.status(500).json({ error: this.errors.notFound });
  //     return res.status(200).json(car);
  //   } catch (err) {
  //     return res.status(500).json({ error: this.errors.internal });
  //   }
  // };

  // update = async (
  //   req: Request<{ id: string }>,
  //   res: Response<Car | ResponseError>,
  // ): Promise<typeof res> => {
  //   const { id } = req.params;
  //   try {
  //     const car = await this.service.update(id, req.body);
  //     if (!car) return res.status(404).json({ error: this.errors.notFound });
  //     return res.status(200).json(car);
  //   } catch (err) {
  //     return res.status(500).json({ error: this.errors.internal });
  //   }
  // };

  // delete = async (
  //   req: Request<{ id: string }>,
  //   res: Response<Car | ResponseError>,
  // ): Promise<typeof res> => {
  //   const { id } = req.params;
  //   try {
  //     const car = await this.service.delete(id);
  //     if (!car) return res.status(404).json({ error: this.errors.notFound });
  //     return res.status(200).json(car);
  //   } catch (err) {
  //     return res.status(500).json({ error: this.errors.internal });
  //   }
  // };
}

export default CarController;
