// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
function theBeatlesPlay(musicians, instruments) {
  let list = [];
  for (let i = 0; i < musicians.length; i++)
  list.push(`${musicians[i]} plays ${instruments[i]}`);
  return list
}

function johnLennonFacts(facts) {
  let fact = [];
  let i = 0;
  while (i < facts.length) {
    fact.push(`${facts[i]}!!!`);
    i++;
  }
  return fact
}

function iLoveTheBeatles(number) {
  strings = [];
  function incrementVariable(i) {
    i = i + 1;
    return i;
  }
  do {
    strings.push("I love the Beatles!");
  } while (incrementVariable(number) < 15);
  return strings
}
