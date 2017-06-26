var num = 9;
var arr = [4,4,5,12];
var res = arr.reduce(producto,num);

function producto(anterior,actual){
    return  anterior *  actual;
}

console.log( producto(2,3));
console.log(res);
