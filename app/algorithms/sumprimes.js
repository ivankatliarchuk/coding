function sumPrimes(num) {
  // fint if two divisors
  count = 0;
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      count += i;
    }
  }
  if (count !== 0) {
    count += num;
  }
  return count;
}
