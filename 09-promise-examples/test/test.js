var assert = require('assert');

function promiseTimeout(){
  return new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve('Done!');
    }, 1000);
  });
}

describe('Promise', function() {
  describe('can be found ', function() {
    it('everywhere', function(done) {
      promiseTimeout().then(() => {
        done();
      })
    });
  });
});