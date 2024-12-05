// 1

const myMap = new Map();

myMap.set('name', 'Alex Ross');
myMap.set('age', 21);
myMap.set('city', 'Minsk');

const name = myMap.get('name');
console.log("Name:", name);

console.log("Ключь 'age' существует:", myMap.has('age'));

myMap.delete('city');
console.log("Map после удаления 'city':", myMap);


console.log("Map values:");
for (const value of myMap.values()) {
    console.log(value);
}


// 2

const mySet = new Set();

mySet.add('apple');
mySet.add('banana');
mySet.add('cherry');
mySet.add('banana');

console.log("Set содержит 'banana':", mySet.has('banana'));
mySet.delete('banana');
console.log("Set после удаления 'banana':", mySet);

console.log("Set values:");
for (const value of mySet) {
    console.log(value);
}

