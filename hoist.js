var hello;
console.log(hello);
hello = "world";
// output: undefined

var needle;
function test() {
  var needle = "magnet";
  console.log(needle);
}
needle = "haystack";
test();
// output: magnet

var brendan 
function print() {
  brendan = "only okay";
  console.log(brendan);
}
brendan = "super cool";
console.log(brendan);
// output: super cool

var food 
function eat() {
  var food;
  food = "half-chicken";
  console.log(food);
  food = "gone";
}
food = "chicken";
console.log(food);
eat();
// output: chicken, half-chicken

var mean;
mean();
console.log(food);
mean = function () {
  var food
  food = "chicken";
  console.log(food);
  food = "fish";
  console.log(food);
};
console.log(food);
// output: TypeError: mean is not a function

var genre;
function rewind() {
  var genre;
  genre = "rock";
  console.log(genre);
  genre = "r&b";
  console.log(genre);
}
console.log(genre);
genre = "disco";
rewind();
console.log(genre);
// output: undefined, rock, r&b, disco

function learn() {
  var dojo;
  dojo = "seattle";
  console.log(dojo);
  dojo = "burbank";
  console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);
// output: san jose, seattle, burbank, san jose


function makeDojo(name, students) {
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  } else if (dojo.students <= 0) {
    dojo = "closed for now";
  }
  return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
// output: { name: 'Chicago', students: 65, hiring: true }, TypeError: Assignment to constant variable


// Worked with red team!