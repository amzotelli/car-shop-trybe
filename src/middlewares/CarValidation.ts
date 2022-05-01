import { Request, Response, NextFunction } from 'express';
import { ResponseError } from '../controllers/MongoController';

const validateID = async (
  req: Request<{ id: string }>,
  res: Response<ResponseError>,
  next: NextFunction,
) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: 'Missing ID' });
  }
  if (id.length < 24) {
    return res.status(400).json({ error: 'Invalid ID' });
  }
  next();
};

export default { validateID };
