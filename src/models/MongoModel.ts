// ref https://app.betrybe.com/course/back-end/mongodb-com-nodejs-e-poo/mongodb-e-poo/91006798-2877-4004-9cf5-d2d72a859272/conteudos/97dcab50-9d78-4df7-b0e2-27b529f6d277/models/9751928c-9ea0-43cf-a988-17471cd1e3f7?use_case=side_bar

import { Model as M, Document } from 'mongoose';
import { Model } from '../interfaces/ModelInterface';

abstract class MongoModel<T> implements Model<T> {
  constructor(protected model: M<T & Document>) { }

  create = async (obj: T): Promise<T> => this.model.create(obj);

  read = async (): Promise<T[]> => this.model.find();

  readOne = async (id: string): Promise<T | null> =>
    this.model.findOne({ _id: id });
  
  update = async (id: string, obj: T): Promise<T | null> =>
    this.model.findByIdAndUpdate(id, obj, { new: true });

  delete = async (id: string): Promise<T | null> =>
    this.model.findByIdAndDelete(id);  
}

export default MongoModel;
