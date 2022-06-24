// @ts-ignore
import chaiHttp = require('chai-http');
import * as sinon from 'sinon';
import * as chai from 'chai';
import Match from '../database/models/Match';
import { Response } from 'superagent';

import { resultGetMatchInProgressTrue, resultGetMatchInProgressFalse, resultGetMatch } from './mock/getMatchMock';

const { expect } = chai;

import { app } from '../app';

chai.use(chaiHttp);

describe('Teams Success cases all matches', () => {
  let chaiHttpResponse: Response;
  describe('Get All Matches', () => {
    before(async () => {
      sinon.stub(Match, 'findAll').returns(Promise.resolve(resultGetMatch as any))
    });

    after(() => {
      (Match.findAll as sinon.SinonStub).restore();
    });
    it('Esperasse que ao efetuar um request GET par a rota /matches seja retornado todas as partidas', async () => {
      chaiHttpResponse = await chai.request(app).get('/matches');
      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.eql(resultGetMatch);
    });
  });

  describe('Get Matches By Param True', () => {
    before(async () => {
      sinon.stub(Match, 'findAll').returns(Promise.resolve(resultGetMatchInProgressTrue as any))
    });

    after(() => {
      (Match.findAll as sinon.SinonStub).restore();
    })
    it('Esperasse que ao efetuar um request GET par a rota /match?inProgress=true seja retornado todas as partidas em andamento', async () => {
      chaiHttpResponse = await chai.request(app).get('/matches?inProgress=true');
      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equals(resultGetMatchInProgressTrue);
    });
  });
  describe('Get Matches By Param False', () => {
    before(async () => {
      sinon.stub(Match, 'findAll').returns(Promise.resolve(resultGetMatchInProgressFalse as any))
    });

    after(() => {
      (Match.findAll as sinon.SinonStub).restore();
    })
    it('Esperasse que ao efetuar um request GET par a rota /matches?inProgress=true seja retornado todas as partidas em andamento', async () => {
      chaiHttpResponse = await chai.request(app).get('/matches?inProgress=false');
      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equals(resultGetMatchInProgressFalse);
    });
  });
});

describe('Teams Failure cases all matches', () => {
  let chaiHttpResponse: Response;
  before(async () => {
    sinon.stub(Match, 'findAll').returns(Promise.resolve(null as any))
  })

  after(() => {
    (Match.findAll as sinon.SinonStub).restore();
  })
  it('Esperasse que ao efetuar um request GET par a rota /matches seja retornado todas as partidas', async () => {

  });
});