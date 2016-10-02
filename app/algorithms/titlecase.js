function titleCase(str) {
  var array = str.toLowerCase().split('');
  var space = false;
  for (var i = 0; i < array.length; i++) {
    if (i === 0) {
      array[i] = array[i].toUpperCase();
    } else if (array[i] === ' ') {
      space = true;
    } else if (space && array[i] !== ' ') {
      array[i] = array[i].toUpperCase();
      space = false;
    }
  }
  return array.join('');
}
