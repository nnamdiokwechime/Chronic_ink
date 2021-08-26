export function getFibonacciUntil(n) {
	let temp = [];
    for( i = 0; i < n; i++ ){
        temp.push(getFibonacci(i));
    }
    return temp
}
getFibonacci = n => { // recursive function 
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return getFibonacci(n - 2) + getFibonacci(n - 1)
}
