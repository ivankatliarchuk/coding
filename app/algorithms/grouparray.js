function chunkArrayInGroups(arr, size) {

  result = [];

  num = arr.length / size;

  for (var i = 0, count = 0; i < num, count < arr.length; i++) {
    temp = [];
    for (var n = 0; n < size; n++) {
      item = arr[count++];
      if (item !== undefined)
      temp.push(item);
    }
    result.push(temp);
  }
  return result;
}
