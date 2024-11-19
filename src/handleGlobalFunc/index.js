const limitedName = (str, len) => {
  let sArr = str.split(' ');
  let s = '';
  if (sArr.length >= len) {
    for (let index = 0; index < len; index++) {
      s += sArr[index] + ' ';
    }
  } else {
    return str;
  }
  return s + '...';
};

export { limitedName };
