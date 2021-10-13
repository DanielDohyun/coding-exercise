const person: {
  name: string;
  age: number;
  //array of str
  hobbies: string[];
} = {
  name: "kim",
  age: 30,
  hobbies: ["sports", "cooking"],
};

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
