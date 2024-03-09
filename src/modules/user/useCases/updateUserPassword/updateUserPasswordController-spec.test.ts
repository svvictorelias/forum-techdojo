import { app } from '../../../../app'
import request from 'supertest'
import { execSync } from 'child_process'

beforeEach(() => {
  execSync('ts-node resetDatabaseAndMigrate.ts')
})

describe('update password User e2e', () => {
  it('should be able to update a password user', async () => {
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
      .patch('/user/me/password')
      .set('Authorization', `Bearer ${token}`)
      .send({ password: 'Test123', newPassword: '1234' })

    const user = await request(app).post('/auth').send({
      email: 'testeUn@gg.com',
      password: '1234',
    })
    expect(user.status).toBe(200)
  })
})
