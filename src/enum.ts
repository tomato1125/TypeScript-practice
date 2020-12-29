export {};

enum Months {
  January = 1,
  Febrary,
  Merch,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  Novenber,
  December
}

console.log(Months.January);
console.log(Months.Febrary);
console.log(Months.December);

// const MonthsJs = {
//   January: 0,
//   Febrary: 1
// };

// console.log(MonthsJs.January);
// console.log(MonthsJs.Febrary);


enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  BlACK = '#000000',
}

let green = COLORS.GREEN;
console.log({ green });

enum COLORS {
  YELLOW = '#FFFF00',
  GRAY = '#808080'
}

COLORS.YELLOW;