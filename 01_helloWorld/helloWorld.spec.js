const helloWorld = require('./helloWorld');

describe('Hello World', function() {
  test('yell "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
