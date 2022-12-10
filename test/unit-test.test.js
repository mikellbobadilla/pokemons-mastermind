import { assert } from 'chai'

function addValue(a, b){
  return a+b
}

describe('suite de prueba para el curso', () => {
  it('should return 2', ()=>{
    let vat = addValue(2, 2)
    assert.equal(vat, 4)
  })
})