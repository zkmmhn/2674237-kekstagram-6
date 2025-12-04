function checkLengthString (string, maxLength){
  return string.length <= maxLength;
}
checkLengthString('dhfbvhrbhgbhbfdh', 20);

function checkPalindrome (string) {
  const str = string.replaceAll(' ', '').toLowerCase();
  let line = '';
  for (let i = str.length - 1; i >= 0; i--) {
    line += str[i];
  }
  return (line === str);
}

checkPalindrome('Лёша на полке клопа нашёл ');
