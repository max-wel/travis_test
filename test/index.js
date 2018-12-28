const expect = require('chai').expect;
const envTest = require('../index');

describe('test', function(){
  it('should return a string', function(){
    expect('boy').to.equal('boy');
  })

  it('should return a secret string', function(){
    expect(envTest()).to.equal('yah');
  })
})