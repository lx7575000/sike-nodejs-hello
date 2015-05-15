module.exports = function greet (name, drunk) {
	if(drunk){
		return 'Hello ' + name + ', 你看起来很吸引人。 不好意思我喝多了，如果我前一句说的很奇怪，那一定是假话。你来打呀。^_^';
	}else{
		return 'Hello, ' + name;
	}
}