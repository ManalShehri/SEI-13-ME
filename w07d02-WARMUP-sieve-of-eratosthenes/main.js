// the range
const primeNumbers = (a,b) => {
    // arr to hold results
    primeArr = []
    for (i=a; i<=b; i++)
    {
        if(checkIfPrime(i))
            primeArr.push(i)
    }
    return primeArr
}

// check the prime number
const checkIfPrime = num => {
    // by default it is true unless the num is not prime 
    isPrime = true;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}