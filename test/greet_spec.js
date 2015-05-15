var greet = require('greet');

describe('greet', function(){
	it('should greet a person by name', function(){
		expect(greet('liuxin')).to.eql('Hello, liuxin');
	});
	it('should greet a person flirtatiously if drunk', function(){
		expect(greet('liu', true)).to.not.eql('liu');
	});
	it('Output is right', function(){
		expect(greet('liuxin', true)).to.eql('Hello liuxin, you look sexy today');
	});
	it('Yes i am drunk, this test should be error', function  () {
		expect(greet('liuxin', false)).to.not.eql('Hello liuxin, you look sexy today');
	})
});