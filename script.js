var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';

var dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();

console.log(dinosaurUpperCased);

var change = text.replace('Velociraptor', dinosaurUpperCased);

console.log(change);

console.log(text.length/2);

partOfText = change.slice(0, 72);

console.log(partOfText);