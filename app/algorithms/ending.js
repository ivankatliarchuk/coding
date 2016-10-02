function confirmEnding(str, target) {
  sanitized = str.substr(str.length  - target.length);
  return sanitized === target;
}
