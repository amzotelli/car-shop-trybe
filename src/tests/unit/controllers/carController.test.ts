import * as sinon from 'sinon';
import chai from 'chai';

import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import CarController from '../../../controllers/CarController';

import server from '../../../server';

import chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

describe("Car controller Create", () => {
  const carModel = new CarModel();
  const carServices = new CarService(carModel);
  new CarController(carServices);

  const car = {
    _id: "19asa9856sdtg1234gh52a63",
    model: 'Teste',
    year: 2020,
    color: 'teste cor',
    buyValue: 1000,
    seatsQty: 5,
    doorsQty: 4,
  };
  
  before(async () => {
    sinon
      .stub(carModel.model, 'create')
      .resolves(car);
  });

  after(()=>{
    sinon.restore();
  })

  it("Retorna o carro criado", async () => {
    const newCar = await chai.request(server.getApp())
      .post('/cars')
      .send(car);

    expect(newCar).to.have.status(201);
    expect(newCar.body).to.be.deep.equal(car);

  });
});  
