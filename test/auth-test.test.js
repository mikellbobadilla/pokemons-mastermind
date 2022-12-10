import chai from 'chai'
import chaiHttp from 'chai-http'
import { app } from '../app.js'
chai.use(chaiHttp)

describe('Suite de pruebas de auth', () => {
  it('should return 401 when no jwt token available', (done) => {
    // Cuando la llamada no tiene correctamente la llave
    chai.request(app)
      .get('/team')
      .end((err, res) => {
        chai.assert.equal(res.statusCode, 401)
        done()
      })
  })

  it('should return 200 when jwt is valid', (done) => {
    // Primero el usuario debe estar logeado
    chai.request(app)
      .post('/login')
      .end((err, res) => {
        chai.request(app)
          .get('/team')
          .set('Authorization', res.body.token)
          .end((err, res) => {
            console.log(res.status)
            chai.assert.equal(res.status, 200)
            done()
          })
      })
  })
})