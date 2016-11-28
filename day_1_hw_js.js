//Section 1

//what types are these? Write your answer in a comment beside it.

1; // number
"cat"; // string
true; // boolean
[]; // array
{}; // object
1.1; // number
undefined; // undefined

//Section 2

// what is the truthy/falsiness values of the following
// write your answer in a comment beside it
// you can use an if to test this...
1; //true
"cat"; // true
true; // true
NaN; // false
[]; // true
{}; // true
undefined; // false
""; // false
0; // false


//Section 3

//Using examples that are different from above...

//3.1 Assign a variable that is a number
var myNumber = 4.7;

//3.2 Assign a variable that is a string
var myString = "thisisastringwithnospaces";

//3.3 Assign a variable that is a boolean
var oneEqualsOne = 1 === 1;

//3.4 Assign a variable that is an object
var myObject = {
  name: "Frank",
  age: 57,
  favouriteColour: "blue",
  likesTheColourPurple: false,
  favouriteNumbers: [ 1, 2, 3, 4, 5, 19 ],
  clothesBranding: {
    jeans: "Wrangler",
    tShirt: "Nike",
    shoes: "Puma"
  }
}

//Section 4

console.log();
console.log("---------------------");
console.log("-     Section 4     -");
console.log("---------------------");

//4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false

function itsTrueOrFalse() {

  if ( its ) {

    console.log( "hello" );

  } else {

    console.log( "bye" );
  }
}

console.log();

var its = true;
console.log( "When 'its' is true my function says:" );
itsTrueOrFalse();

its = false;
console.log( "When 'its' is false my function says:" );
itsTrueOrFalse();

//Section 5

var animals = ["raccoon","hedgehog","mouse","gerbil"];

//5.1. Assign the first element to a variable
var firstAnimal = animals[0];

//5.2. Assign the last element to a variable
var lastAnimal = animals.slice(-1)[0];

//5.3. Assign the length of an array to a variable
var arrayLength = animals.length;

//5.4. Add an item to the end of the array
animals.push( "unicorn" );

//5.5. Add an item to the start of the array
animals.unshift( "bear" );

//5.6. Assign the index of hedgehog to a variable
var hedgehogIndex = animals.indexOf( "hedgehog" );

//Section 6

console.log();
console.log("---------------------");
console.log("-     Section 6     -");
console.log("---------------------");

//6.1 Create an array of 5 vegetables
var myVeggies = [
  "carrots",
  "peas",
  "sweetcorn",
  "artichoke",
  "green beans"
];

//6.2 Loop over the array and write to the console using a "while"

function veggieWhileLooper( veggies ) {

  var i = 0;

  while ( i < veggies.length ) {

    console.log( myVeggies[i] );
    i++;
  }
}

console.log();
console.log( "My veggies while looped are: " );
veggieWhileLooper( myVeggies );

//6.3 Loop again using a "for" with a counter

function oldStyleVeggieLooper( veggies ) {

  for ( var i = 0; i < veggies.length; i++ ) {

    console.log( veggies[i] );
  }
}

console.log();
console.log( "My veggies old style looped are: " );
oldStyleVeggieLooper( myVeggies );

//6.4 Loop again using a "for in"
function forOfVeggieLooper( veggies ) {

  for ( var veggie of veggies ) {

    console.log( veggie );
  };
}

console.log();
console.log( "My veggies for in looped are: " );
forOfVeggieLooper( myVeggies );

//Section 7
var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
];

console.log();
console.log("---------------------");
console.log("-     Section 7     -");
console.log("---------------------");

//7.1 Calculate the total cash in accounts
function totalAmount( accounts ) {

  var total = 0;

  for ( var account of accounts ) {

    total += account.amount;
  }

  return total;
}

console.log();
console.log( "The total amount is £" + totalAmount( accounts ) );

//7.2 Find the amount of money in the account with the largest balance
function largestBalance( accounts ) {

  var maxAmount = accounts[0].amount;
  var accountAmount;

  for ( var account of accounts ) {

    accountAmount = account.amount;
    maxAmount = accountAmount > maxAmount ? accountAmount : maxAmount;
  }

  return maxAmount;
}

console.log();
console.log( "The largest balance is £" + largestBalance( accounts ) );

//7.3 Find the name of the account with the smallest balance
function smallestBalanceHolder( accounts ) {

  var initialAccount = accounts[0];
  var minAmount = initialAccount.amount;
  var minAccountHolder = initialAccount.name;

  var accountAmount;

  for ( var account of accounts ) {

    accountAmount = account.amount;

    if ( accountAmount < minAmount ) {

      minAmount = accountAmount;
      minAccountHolder = account.name;
    }
  }

  return minAccountHolder;
}

console.log();
console.log( "The smallest balance holder is", smallestBalanceHolder( accounts ) );

//7.4 Calculate the average bank account value

function averageAccountValue( accounts ) {

  return totalAmount( accounts ) / accounts.length;
}

//7.5 Find the value of marcs bank account
var marksAccounts = accounts.filter( function( account ) {

  return account.name === "marc";
});

console.log();
console.log( "Marc's balance is £" + marksAccounts[0].amount );

//7.6 Find the holder of the largest bank account
function holderOfLargestAccount( accounts ) {

  accounts.sort( function( accountA, accountB ) {

    var amountA = accountA.amount;
    var amountB = accountB.amount;

    if ( amountA > amountB ) { return -1 };
    if ( amountA < amountB ) { return 1 };
    return 0;
  } );

  return accounts[0].name;
}

console.log();
console.log( "Holder of the largest account is", holderOfLargestAccount( accounts ) );

//7.7 Calculate the total cash in business accounts
function businessAccountsTotal( accounts ) {

  var businessTotal = 0;

  for ( var account of accounts ) {

    if ( account.type === "business" ) businessTotal += account.amount;
  }

  return businessTotal;
}

console.log();
console.log( "Total cash in business accounts is £" + businessAccountsTotal( accounts ) );

//7.8 Find the largest personal account owner
function largestPersonalAccountHolder( accounts ) {

  var personalAccounts = accounts.filter( function( account ) {

    return account.type === "personal";
  });

  return holderOfLargestAccount( personalAccounts );
}

console.log();
console.log( "The largest personal account holder is", largestPersonalAccountHolder( accounts ) );

//Section 8

console.log();
console.log("---------------------");
console.log("-     Section 7     -");
console.log("---------------------");

//Assign a variable myPerson to a hash, giving them a name, height, favourite food and an eat method
var eatFunction = function( foodString ) {

  if ( foodString === this.favouriteFood ) {

    console.log( "Wow I love", this.favouriteFood );

  } else {

    console.log( "Oh " + foodString + ", great... I guess I can eat that..." );
  }
}

var myPerson = {
  name: "Cedric",
  height: 1.85,
  favouriteFood: "bananas",
  eat: eatFunction
};

console.log();
myPerson.eat( "toast" );
myPerson.eat( "bananas" );
