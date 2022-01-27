let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array[3]);

array.forEach(function(item, index){console.log(item, index)});

array.push([]);
console.log(array);

array.pop();
console.log(array);

array.shift();
console.log(array);

array.unshift('Novo item inicio');
console.log(array);

console.log(array.indexOf(true));

array.splice(0, 3);
console.log(array);

novoarray=array.slice(0, 3);
console.log(novoarray);

let object = { string: 'string', number: 1, boolean: true, array: ['array'], objectInterno:{objectInterno:'objeto interno'}};

console.log(object.objectInterno);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var{string, boolean, objectInterno} = object;
console.log(string, boolean,objectInterno);
