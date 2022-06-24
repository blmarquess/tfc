// @ts-ignore
import chaiHttp = require('chai-http');
import * as sinon from 'sinon';
import * as chai from 'chai';
import Team from '../database/models/Teams';
import { Response } from 'superagent';

import { resultTeams } from './mock/teamsMock';

const { expect } = chai;

import { app } from '../app';

chai.use(chaiHttp);

describe('Teams Success cases all teams', () => {
  let chaiHttpResponse: Response;
  before(async () => {
    sinon.stub(Team, 'findAll').returns(Promise.resolve(resultTeams as any))
  })

  after(() => {
    (Team.findAll as sinon.SinonStub).restore();
  })
  it('Esperasse que ao efetuar um request par a rota /teams retorne todos os times cadastrados', async () => {
    chaiHttpResponse = await chai.request(app).get('/teams/');
    expect(chaiHttpResponse.status).to.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equals(resultTeams);
  });
});

describe('Teams Success cases single teams', () => {
  let chaiHttpResponse: Response;
  before(async () => {
    sinon.stub(Team, 'findOne').returns(Promise.resolve(resultTeams[0] as any))
  })

  after(() => {
    (Team.findOne as sinon.SinonStub).restore();
  })
  it('Esperasse que ao efetuar um request par a rota /teams retorne todos os times cadastrados', async () => {
    chaiHttpResponse = await chai.request(app).get('/teams/1');
    expect(chaiHttpResponse.status).to.equal(200);
    expect(chaiHttpResponse.body.id).to.be.equal(1);
    expect(chaiHttpResponse.body.teamName).to.be.equal('Avaí/Kindermann');
  });

});
describe('Teams Failure cases', () => {
  describe('Teams Failure cases all teams', () => {
  let chaiHttpResponse: Response;
  before(async () => {
    sinon.stub(Team, 'findAll').returns(Promise.resolve(null as any))
  })

  after(() => {
    (Team.findAll as sinon.SinonStub).restore();
  })
  it('Esperasse que ao efetuar um request par a rota /teams retorne todos os times cadastrados', async () => {
    chaiHttpResponse = await chai.request(app).get('/teams');
    expect(chaiHttpResponse.status).to.equal(200);
    expect(chaiHttpResponse.body).to.be.equal(null);
    });
  });
  
  describe('Teams Failure cases single teams', () => {
  let chaiHttpResponse: Response;
  before(async () => {
    sinon.stub(Team, 'findOne').returns(Promise.resolve(null))
  })

  after(() => {
    (Team.findOne as sinon.SinonStub).restore();
  })
  it('Esperasse que ao efetuar um request par a rota /teams retorne todos os times cadastrados', async () => {
    chaiHttpResponse = await chai.request(app).get('/teams/numero1');
    expect(chaiHttpResponse.status).to.equal(400);
    expect(chaiHttpResponse.body.message).to.be.equal(' this ID is invalid');
  });
});
});