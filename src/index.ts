import * as os from 'os';

let currPath = os.arch();

function hello(name: string) {
	console.log(`Hello ${name}: ${currPath}`);
}

hello('czećś');
