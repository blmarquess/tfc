import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { before } from 'mocha';


import { app } from '../app';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Leaderboard', () => {
  let chaiHttpResponse: Response;

  describe('Testar roda to leader board', () => {
    it('efetua login', async () => {      
      chaiHttpResponse = await chai.request(app).get('/leaderboard')
      console.log(chaiHttpResponse.body)
      chaiHttpResponse = await chai.request(app).get('/leaderboard/home')
      console.log(chaiHttpResponse.body)
      chaiHttpResponse = await chai.request(app).get('/leaderboard/away')
      console.log(chaiHttpResponse.body)
      expect(chaiHttpResponse.status).to.be.equal(200);
      // expect(user).deep.equal(adminDb.userData)
      // expect(token).not.equal(undefined);


    });
  });
});