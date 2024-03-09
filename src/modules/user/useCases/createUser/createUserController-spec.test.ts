import { app } from '../../../../app'
import request from 'supertest'
import { execSync } from 'child_process'

beforeEach(() => {
  execSync('ts-node resetDatabaseAndMigrate.ts')
})

describe('Create user e2e', () => {
  it('shoud be able to create a user', async () => {
    const response = await request(app).post('/user').send({
      email: 'testeUn@gg.com',
      name: 'Teste teste',
      password: 'Test123',
    })

    expect(response.status).toBe(201)
  })

  it('shoud not be able to create a user with already exist email', async () => {
    await request(app).post('/user').send({
      email: 'testeUn@gg.com',
      name: 'Teste teste',
      password: 'Test123',
    })
    const response = await request(app).post('/user').send({
      email: 'testeUn@gg.com',
      name: 'Teste teste',
      password: 'Test123',
    })

    expect(response.status).toBe(401)
  })
})
