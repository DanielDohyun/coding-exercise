//sorting arr of objects

var People = [
  { Name: "Name", Surname: "Surname" },
  { Name: "AAA", Surname: "ZZZ" },
  { Name: "Name", Surname: "AAA" },
];

// sort by Name
People.sort(function (a, b) {
  return a.Name - b.Name;
});

//case insensitive
People.sort((a, b) => (a.Name.toLowerCase() > b.Name.toLowerCase() ? 1 : -1));

People.sort((a, b) => a.Name.localeCompare(b.Name));

// The letter "a" is before "c" yielding a negative value
"a".localeCompare("c"); // -2 or -1 (or some other negative value)

// Alphabetically the word "check" comes after "against" yielding a positive value
"check".localeCompare("against"); // 2 or 1 (or some other positive value)

// "a" and "a" are equivalent yielding a neutral value of zero
"a".localeCompare("a"); // 0
