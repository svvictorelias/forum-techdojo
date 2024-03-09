import { app } from '../../../../app'
import request from 'supertest'
import { execSync } from 'child_process'

beforeEach(() => {
  execSync('ts-node resetDatabaseAndMigrate.ts')
})

describe('update User', () => {
  it('should be able to update a user', async () => {
    await request(app).post('/user').send({
      email: 'testeUn@gg.com',
      name: 'Teste teste',
      password: 'Test123',
    })
    const tokenRequest = await request(app).post('/auth').send({
      email: 'testeUn@gg.com',
      password: 'Test123',
    })

    const token = tokenRequest.text

    await request(app)
      .put('/user/me')
      .set('Authorization', `Bearer ${token}`)
      .send({ email: 'novoEmail@gg.com' })

    const user = await request(app)
      .get('/user/me')
      .set('Authorization', `Bearer ${token}`)
    expect(user.body.email).toEqual('novoEmail@gg.com')
  })
})
