let ninjas = [];
console.assert(ninjas.length === 0, 'An array starts empty');
console.log(ninjas);

ninjas.push('Kuma');
console.assert(ninjas[0] === 'Kuma','Kuma is the first item int he array');
console.assert(ninjas.length === 1, 'We have one item in the array');
console.log(ninjas);

ninjas.push('Hattori');
console.assert(ninjas[0] === 'Kuma', 'Kuma is still first');
console.assert(ninjas[1] === 'Hattori', 'Hattori is added to the end of the array');
console.assert(ninjas.length === 2, 'We have two items in the array!');
console.log(ninjas);

ninjas.unshift('Yagyu');
console.assert(ninjas[0] === 'Yagyu', 'Now Yagyu is the first item');
console.assert(ninjas[1] === 'Kuma', 'Kuma moved to the second place');
console.assert(ninjas[2] === 'Hattori', 'And Hattori to the third place');
console.assert(ninjas.length === 3, 'We have three items in the array!');
console.log(ninjas);

const lastNinja = ninjas.pop();
console.assert(lastNinja === 'Hattori', 'We`ve removed Hattori from the end of the array');
console.assert(ninjas[0] === 'Yagyu', 'Now Yagyu is still the first item');
console.assert(ninjas[1] === 'Kuma', 'Kuma is still in second place');
console.assert(ninjas.length === 2, 'Now there are two items in the array');
console.log(ninjas);

const firstNinja = ninjas.shift();
console.assert(firstNinja === 'Yagyu', 'We`ve rmoved Yagyu from the beginning of the array');
console.assert(ninjas[0] === 'Kuma', 'Kuma has shifted to the first place');
console.assert(ninjas.length === 1, 'There`s only one ninja in the array');
console.log(ninjas);

ninjas = ['Yagyu', 'Kuma', 'Hattori', 'Fuma'];
delete ninjas[1];
console.assert(ninjas.length === 4, 'Length still reports that there are 4 items');
console.assert(ninjas[0] === 'Yagyu', 'First item is Yagyu');
console.assert(ninjas[1] === undefined, 'We`ve simply created a hole');
console.assert(ninjas[2] === 'Hattori', 'Hattori is still the third item');
console.assert(ninjas[3] === 'Fuma', 'And Fuma is the last item');
console.log(ninjas);

ninjas = ['Yagyu', 'Kuma', 'Hattori', 'Fuma'];
var removedItems = ninjas.splice(1, 1);
console.assert(removedItems.length === 1, 'One item was removed');
console.assert(removedItems[0] === 'Kuma');

console.assert(ninjas.length === 3, 'There are now three items in the array');
console.assert(ninjas[0] === 'Yagyu', 'The first item is still Yagyu');
console.assert(ninjas[1] === 'Hattori', 'Hattori is now in the second place');
console.assert(ninjas[2] === 'Fuma', 'And Fuma is ni the third place');
console.log(ninjas);

removedItems = ninjas.splice(1, 2, 'Mochizuki', 'Yoshi', 'Momochi');
console.assert(removedItems.length === 2, 'Now we`ve removed two items');
console.assert(removedItems[0] === 'Hattori', 'Hattori was removed');
console.assert(removedItems[1] === 'Fuma', 'Fuma was removed');
console.assert(ninjas.length === 4, 'We`ve inserted some new items');
console.assert(ninjas[0] === 'Yagyu', 'Yagyu is still here');
console.assert(ninjas[1] === 'Mochizuki', 'Mochizuki also');
console.assert(ninjas[2] === 'Yoshi', 'Yoshi also');
console.assert(ninjas[3] === 'Momochi', 'and Momochi');
console.log(ninjas);

//enumeration of array's elements



