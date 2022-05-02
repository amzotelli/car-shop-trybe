import { expect } from 'chai';
import { Types } from 'mongoose';
import Sinon from 'sinon';

import CarModel from '../../../models/CarModel';

describe("Car model Create", () => {
  const carModel = new CarModel();

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
    Sinon.stub(carModel, 'create').resolves(car);
  });

  after(() => {
    Sinon.restore();
  });

  it("retorna o objeto com os dados do carro", async () => {
    const result = await carModel.create(car);

    expect(result).to.be.an('object');
    expect(result).to.be.equal(car);
  
  })
})

