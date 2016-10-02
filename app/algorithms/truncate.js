function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num && num > 0) {
    if (num > 3) {
      index = num - 3;
    } else {
      index = num;
    }
    sliced = str.slice(0, index);
    return sliced + '...';
  }
  return str;
}
