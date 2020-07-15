// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
function theBeatlesPlay(musicians, instruments) {
  var list = [];
  for (let i = 0; i < musicians.length; i++)
  list.push(`${musicians[i]} plays ${instruments[i]}`);
  return list
}

const facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];

function johnLennonFacts(list) {
  list = [];
  let i = 0;
  while (i < facts.length) {
    list.push(`${facts[i]} !!!`);
    return list
  }
}

function iLoveTheBeatles(number) {
  number = [];
  function incrementVariable(i) {
    i = i + 1;
    return i;
  }
  do {
    number.push("I love the Beatles!");
  } while (incrementVariable(number) < 15);
  return number
}
