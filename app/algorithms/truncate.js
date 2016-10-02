function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num && num > 0) {
    if (num > 3) {
      count = num - 3;
    } else {
      count = num;
    }
    sliced = str.slice(0, count);
    return sliced + '...';
  }
  return str;
}
