var longest;
function findLongestWord(str) {
  var arra= str.split(' ');
  var text = '';
  for (var i = 0; i < arra.length; i++) {
    if (arra[i].length > text.length) {
      text = arra[i];
    }
  }
  return text.length;
}
