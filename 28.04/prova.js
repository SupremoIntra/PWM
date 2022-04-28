var foo = 23;
console.log(typeof foo);

//let rende scope locale
let user = {
    name: "paolo",
    age: 43,
    "is Teacher": true,
    isOld: function() {
        if (this.age > 40) {
            return true;
        }
    },
};

user.Admin = true;
arr = [];
for (key in user) { //stampo ogni campo oggetto e metto nell'array
    arr.push(key);
    console.log(key);
}
console.log(arr);
console.log(user);

let somma = function(x, y) {
    return x + y;
};

console.log(somma(3, 7));


//esempio calcolatrice
var numeri = {
    x: 12,
    y: 3,
    calcola: function(operazione) {
        var fn;
        switch (operazione) {
            case '+':
                fn = () => { return this.x + this.y; }
                break;

            case '-':
                fn = () => { return this.x - this.y; }
                break;


        }
        return fn();
    }
}
console.log(numeri.calcola('+'));
console.log(numeri.calcola('-'));