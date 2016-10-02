var sanitized1
function palindrome(str) {
  // Good luck!
  regex = /(\s)|(_)|(\*)|(\#)|(\=)|(\&)|\/|\:|\(|\)|\-|\||\.|\,/g;
  regex1 = /[_*#=&\/\:-\|.,()-]/gi;
  var sanitized = str.replace(regex, '').toLowerCase();

  var reversed = sanitized.split('').reverse().join('');
  sanitized1 = sanitized + ':' + reversed;
  return sanitized === reversed;
}
