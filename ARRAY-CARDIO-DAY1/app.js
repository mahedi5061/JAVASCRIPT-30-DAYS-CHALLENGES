const inventors = [
  {
    first: "Albert",
    last: "Einstein",
    year: 1889,
    passed: 1955,
  },
  {
    first: "Issac",
    last: "Newton",
    year: 1643,
    passed: 1727,
  },
  {
    first: "Galilio",
    last: "Galilie",
    year: 1564,
    passed: 1642,
  },
  {
    first: "Marie",
    last: "Curie",
    year: 1867,
    passed: 1934,
  },
  {
    first: "Johannes",
    last: "Kapler",
    year: 1571,
    passed: 1630,
  },
  {
    first: "Nicolaus",
    last: "Copernicus",
    year: 1473,
    passed: 1543,
  },
  {
    first: "Max",
    last: "Plack",
    year: 1858,
    passed: 1943,
  },
];

const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddos, Mike",
  "Beccher, Henrey",
  "Beethoven,Ludwig",
  "Begin, Menachem",
  "Belloc, Helire",
  "Bellow, Saul",
  "Benchy, Robert",
];

//fillter
const inventorFillter = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year <= 1599
);
//map
const inventorMap = inventors.map(
  (inventor) => inventor.first + " " + inventor.last
);

//sort

// const inventorSort = inventors.sort(function (a, b) {
//   if (a.year > b.year) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.table(inventorSort);

// const inventorSort = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));

//Reduce..

// let totalYear = 0;

// for (let i = 0; i < inventors.length; i++) {
//   totalYear += inventors[i].passed - inventors[i].year;
// }
// console.log(totalYear);

// const totalYear = inventors.reduce(
//   (total, inventor) => total + inventor.passed - inventor.year,
//   0
// );
// console.log(totalYear);

// oldest

const oldest = inventors.sort((a, b) => {
  const oldestGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;
  if (oldestGuy > nextGuy) {
    return -1;
  } else {
    return 1;
  }
});
console.table(oldest);
