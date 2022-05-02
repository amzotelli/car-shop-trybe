import { expect } from 'chai';
import Sinon from 'sinon';
import { Types } from 'mongoose';

import CarService from '../../../services/CarService';

describe("Car Service Create", () => {
  const carService = new CarService();

  const car = {
    _id: new Types.ObjectId(),
    model: 'Teste',
    year: 2020,
    color: 'teste cor',
    buyValue: 1000,
    seatsQty: 5,
    doorsQty: 4,
  };

  before(() => {
    Sinon.stub(carService, 'create').resolves(car);
  });

  after(() => {
    Sinon.restore();
  });

  it("retorna o objeto com os dados do carro", async () => {
    const result = await carService.create(car);

    expect(result).to.be.an('object');
    expect(result).to.be.equal(car);
  
  })
})
