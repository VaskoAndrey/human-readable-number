module.exports = function toReadable (number) {
  let strNum = String(number).split('');
  const nums = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: "four",
    5: 'five',
    6: 'six',
    7: "seven",
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
};
const dozens = {
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
if (number <= 20) {
  if ( number == 20) return 'twenty';
    return nums[number];
}
if(number % 10 == 0) {
  return dozens[number];
}
if (number < 100) {
  let key = +(strNum[0] + '0');
  return (dozens[key] + ' ' + nums[+strNum[1]]);
  }

if (number % 100 == 0) return (nums[+strNum[0]] + ' hundred');
if (number > 100) {
  if (strNum[1] == '0') {
    return (nums[+strNum[0]] + ' hundred ' + nums[+strNum[2]])
  }
  return (nums[strNum[0]] + ' hundred')
}


}
