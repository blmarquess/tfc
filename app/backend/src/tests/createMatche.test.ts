// @ts-ignore
import chaiHttp = require('chai-http');
import * as sinon from 'sinon';
import * as chai from 'chai';
import Match from '../database/models/Match';
import { Response } from 'superagent';

import { resultsCreate, failureResulteCreate } from './mock/getMatchMock';

const { expect } = chai;

import { app } from '../app';

chai.use(chaiHttp);

describe('Teams Success cases Create Matches', () => {
  let chaiHttpResponse: Response;
  describe('Create new Matches', () => {
    before(async () => {
      sinon.stub(Match, 'findAll').returns(Promise.resolve(resultsCreate as any))
    });

    after(() => {
      (Match.findAll as sinon.SinonStub).restore();
    });
    it('Esperasse que ao efetuar um request PUT par a rota /matches seja retornado todas a cadastrada com sucesso', async () => {
      chaiHttpResponse = await chai.request(app)
        .post('/matches')
        .send({ homeTeam: 1, awayTeam: 8, homeTeamGoals: 2, awayTeamGoals: 2 });
      // expect(chaiHttpResponse.status).to.be.equal(200);
      // expect(chaiHttpResponse.body).to.be.eql(resultsCreate);
    });
  });

});

describe('Teams Failure cases all Create new Matches', () => {
  let chaiHttpResponse: Response;
  before(async () => {
    sinon.stub(Match, 'findAll').returns(Promise.resolve(failureResulteCreate.ErroINfo as any))
  })

  after(() => {
    (Match.findAll as sinon.SinonStub).restore();
  })
  it('Esperasse que ao efetuar um request POST para a rota /matches retorne um erro caso não tenha todos os campos', async () => {
    chaiHttpResponse = await chai.request(app).post('/matches').query({"awayTeam": 8, "homeTeamGoals": 2,});
    expect(chaiHttpResponse.status).to.be.equal(failureResulteCreate.ErroINfo.statusCode);
    expect(chaiHttpResponse.body.message).to.be.deep.equals(failureResulteCreate.ErroINfo.message);
  });
  it('Esperasse que ao efetuar um request POST para a rota /matches retorne um erro caso não tenha todos os campos', async () => {
    chaiHttpResponse = await chai.request(app).post('/matches')
      .send({ homeTeam: 122, awayTeam: 1 });
    chaiHttpResponse = await chai.request(app).post('/matches/5')
    chaiHttpResponse = await chai.request(app).post('/matches/5/finish')
      // expect(chaiHttpResponse.status).to.be.equal(failureResulteCreate.ErroINfo.statusCode);
      // expect(chaiHttpResponse.body.message).to.be.deep.equals(failureResulteCreate.ErroINfo.message);
  });
});