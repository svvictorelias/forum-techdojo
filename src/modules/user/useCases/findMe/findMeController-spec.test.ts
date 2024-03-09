import { app } from '../../../../app'
import request from 'supertest'
import { execSync } from 'child_process'

beforeEach(() => {
  execSync('ts-node resetDatabaseAndMigrate.ts')
})

describe('Find me e2e', () => {
  it('should be able to find me', async () => {
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
    const response = await request(app)
      .get('/user/me')
      .set('Authorization', `Bearer ${token}`)
    expect(response.body).toHaveProperty('email')
  })
})
