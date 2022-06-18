// @ts-ignore
const chaiHttp = require('chai-http');
import * as sinon from 'sinon';
import * as chai from 'chai';
import { Response } from 'superagent';

const { expect } = chai;

import { app } from '../app';
// import Example from '../database/models/ExampleModel';


chai.use(chaiHttp);


describe('Seu teste', () => {
  /**
   * Exemplo do uso de stubs com tipos
   */

  let chaiHttpResponse: Response;

  before(async () => {
    // sinon
    //   .stub(Example, "findOne")
    //   .resolves({
    //     ...<Seu mock>
    //   } as Example);
  });

  after(()=>{
    // (Example.findOne as sinon.SinonStub).restore();
  })

  it('endpoint / to verify if application is online', async () => {
    chaiHttpResponse = await chai
      .request(app).get('/login');
    
    console.log(chaiHttpResponse.body);
    expect(chaiHttpResponse.status).to.equal(200);
  });

  it('Seu sub-teste', () => {
    expect(false).to.be.eq(true);
  });
});
