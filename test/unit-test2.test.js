import chai from 'chai'
import chaiHttp from 'chai-http'
chai.use(chaiHttp)

import { app } from '../app.js'

describe('Suite de prueba e2e para el curso', () => {
  it('should return Hola Mundo!', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        console.log('A')
        chai.assert.equal(res.text, 'Hola Mundo!')
        done()
      })
    console.log('B')
  })
})