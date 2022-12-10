import express from 'express'
const app = express()
const port = 3000
import passport from './auth.js'

app.get('/', (req, res) => {
  res.status(200).send('Hola Mundo!')
})

app.post('/login', (req, res) => {
  res.status(200).json({
    token: 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIn0.mFNux38Z42AcuPHELwHia2lLAafO-qwEKbwGkKvvr5I'
  })
})

app.post('/team/pokemons', (req, res) => {
  res.status(200).send('Hola Mundo!')

})

app.get('/team', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.status(200).send('Hola Mundo!')
})

app.delete('/team/pokemons/:pokeid', (req, res) => {
  res.status(200).send('Hola Mundo!')

})

app.put('/team', (req, res) => {
  res.status(200).send('Hola Mundo!')

})

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`))

export { app }