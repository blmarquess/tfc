// @ts-ignore
import chaiHttp = require('chai-http');
import * as sinon from 'sinon';
import * as chai from 'chai';
import { Response } from 'superagent';

const { expect } = chai;

import { app } from '../app';
import User from '../database/models/User';
import { correctUserRequest, correctUserResponse, incorrectUserRequest, incorrectUserResponse, messagesError } from './mock/userMock';

chai.use(chaiHttp);

describe('Login Success cases', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon.stub(User, 'findOne')
    .returns(Promise.resolve(correctUserResponse as any));
  });

  after(()=>{
    (User.findOne as sinon.SinonStub).restore();
  })

  it('endpoint /login esperasse que seja possível efetuar login com sucesso se passado as credenciais corretas', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login').send(correctUserRequest);
    expect(chaiHttpResponse.status).to.equal(200);
  });

  it('Esperasse que ao efetuar o login seja retornado os dados do usuário com um token de sessão e sem o password', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send(correctUserRequest);
    expect(chaiHttpResponse.body.user).to.have.property('id');
    expect(chaiHttpResponse.body.user).to.have.property('username');
    expect(chaiHttpResponse.body.user).to.have.property('role');
    expect(chaiHttpResponse.body.user).to.have.property('email');
    expect(chaiHttpResponse.body.user).to.not.have.property('password');
    expect(chaiHttpResponse.body).to.have.property('token');
  });
});
describe('Login Failure cases', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon.stub(User, 'findOne')
    .returns(Promise.resolve(incorrectUserResponse));
  });

  after(()=> { (User.findOne as sinon.SinonStub).restore(); })

  it('endpoint /login esperasse que não seja possível efetuar login com sucesso se passado as credenciais incorretas', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login').send(incorrectUserRequest.allincorrect);
    expect(chaiHttpResponse.body).to.have.property('message');
  });

  it('Esperasse que ao tentar efetuar o login sem email retorna a mensagem de erro e status correto', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send(incorrectUserRequest.withoutemail);
    expect(chaiHttpResponse.body.message).to.be.equal(messagesError.withoutemail.msg);
    expect(chaiHttpResponse.status).to.be.equal(messagesError.withoutemail.status);
  });
  it('Esperasse que ao tentar efetuar o login sem senha retorna a mensagem de erro e status correto', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send(incorrectUserRequest.withoutpassword);
    expect(chaiHttpResponse.body.message).to.be.equal(messagesError.withoutpassword.msg);
    expect(chaiHttpResponse.status).to.be.equal(messagesError.withoutpassword.status);
  });
  it('Esperasse que retorne os statos e mensagens corretas ao tentar efetuar login com informações erradas', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send(incorrectUserRequest.allincorrect);
    expect(chaiHttpResponse.body.message).to.be.equal(messagesError.allincorrect.msg);
    expect(chaiHttpResponse.status).to.be.equal(messagesError.allincorrect.status);
  });
  it('Esperasse que retorne os statos e mensagens corretas ao tentar efetuar login com email errado', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send(incorrectUserRequest.invalidemail);
    expect(chaiHttpResponse.body.message).to.be.equal(messagesError.invalidemail.msg);
    expect(chaiHttpResponse.status).to.be.equal(messagesError.invalidemail.status);
  });
  it('Esperasse que retorne os statos e mensagens corretas ao tentar efetuar login com senha errada', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send(incorrectUserRequest.invalidpassword);
    expect(chaiHttpResponse.body.message).to.be.equal(messagesError.invalidpassword.msg);
    expect(chaiHttpResponse.status).to.be.equal(messagesError.invalidpassword.status);
  });
});
