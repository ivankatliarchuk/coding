function mutation(arr) {

  first = arr[0].toLowerCase().split('');
  second = arr[1].toLowerCase().split('');

  for (var i = 0; i < second.length; i++) {
    for (var z = 0; z < first.length; z++) {
      if (first[z] === second[i]) {
        break;
      } else if (z === first.length - 1) {
        return false;
      }
    }
  }

  return true;
}
