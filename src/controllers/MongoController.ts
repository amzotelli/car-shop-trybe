import { Request, Response } from 'express';

import Service from '../services/MongoService';

export type ResponseError = {
  error: unknown;
};

export interface RequestWithBody<T> extends Request {
  body: T;
}

enum ControllerErrors {
  internal = 'Internal Server Error',
  notFound = 'Object not found',
  requiredId = 'Id is required',
  badRequest = 'Bad request',
}

abstract class Controller<T> {
  abstract route: string;

  protected errors = ControllerErrors;

  constructor(public service: Service<T>) { }

  create = async (
    req: RequestWithBody<T>,
    res: Response<T | ResponseError>,
  ) => {
    try {
      const car = await this.service.create(req.body);
      if (!car) return res.status(400).json({ error: this.errors.badRequest });
      if ('error' in car) {
        return res.status(400).json({ error: this.errors.badRequest });
      }
      return res.status(201).json(car);
    } catch (err) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  read = async (
    _req: Request,
    res: Response<T[] | ResponseError>,
  ) => {
    try {
      const cars = await this.service.read();
      if (!cars) return res.status(404).json({ error: this.errors.notFound });
      return res.status(200).json(cars); 
    } catch (err) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  readOne = async (
    req: Request<{ id: string; }>,
    res: Response<T | ResponseError>,
  ) => {
    try {
      if (req.params.id.length < 24) {
        return res.status(400)
          .json({ error: 'Id must have 24 hexadecimal characters' });
      }
      const car = await this.service.readOne(req.params.id);
      if (!car) return res.status(404).json({ error: this.errors.notFound });
      
      return res.status(200).json(car);
    } catch (err) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  update = async (
    req: Request<{ id: string; }>,
    res: Response<T | ResponseError>,
  ) => {
    const { id } = req.params;
    if (id.length !== 24) {
      return res.status(400)
        .json({ error: 'Id must have 24 hexadecimal characters' });
    }
    try {
      const { body } = req;
      const car = await this.service.update(id, body);
      if (!car) return res.status(404).json({ error: this.errors.notFound });
      return res.status(200).json(car);
    } catch (err) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };
  
  delete = async (
    req: Request<{ id: string; }>,
    res: Response<T | ResponseError>,
  ) => {
    try {
      const car = await this.service.delete(req.params.id);
      if (!car) return res.status(404).json({ error: this.errors.notFound });
      return res.status(204).end();
    } catch (err) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };
}
export default Controller;
