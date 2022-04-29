import { Car, CarType } from '../interfaces/CarInterface';
import Service, { ServiceError } from './MongoService';
import CarModel from '../models/CarModel';

class CarService extends Service<Car> {
  constructor(model = new CarModel()) {
    super(model);
  }

  create = async (obj: Car): Promise<Car | ServiceError | null> => {
    const parsed = CarType.safeParse(obj);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this.model.create(obj);
  };

  read = async (): Promise<Car[]> => this.model.read();

  readOne = async (id: string): Promise<Car | ServiceError | null> => {
    const car = this.model.readOne(id);
    if (!car) throw new Error('Car not found');
    return car;
  };

  update = async (id: string, obj: Car): Promise<Car | ServiceError | null> => {
    const parsed = CarType.safeParse(obj);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    
    const car = this.model.update(id, obj);
    if (!car) throw new Error('Car not found');
    return car;
  };

  delete = async (id: string): Promise<Car | ServiceError | null> => 
    this.model.delete(id);
}

export default CarService;
