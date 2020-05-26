// /*
// You will probably not have to take destructuring to such a level as this but this is for you to really wrap your brains around the mechanics.
// */
// /*
// 1. Name the third item 'three', the fourth item 'four' and the rest of the items thereafter 'rest'
// - Swap the third and fourth item variable values*/
// */
// let arr = [1,2,3,4,5,6]
// /*
// 2. Destructure this object literal so that each value can be called by its key. Re-name the array values for the 'names' key of the ocean object to AT, PA, IN, and AR
// */
//    const water = {
//    lake: {
//    description: 'surrounded by land',
//    popular: { state: 'Michigan', name: 'Lake Michigan' },
//    },
//    river: {
//    definition: 'flows towards ocean',
//    known: { place: 'New York', label: 'Hudson River' },
//    },
//    ocean: {
//    context: 'body of water that composes much of a planet hydrosphere',
//    names: ['Atlantic', 'Pacific', 'Indian', 'Arctic'],
//    },
//    };
// 3. Using destructuring create a new array that maps through the items array and returns for example 'blue circle' for each of the objects
//    let items = [
//    { color: 'blue', shape: 'circle' },
//    { color: 'orange', shape: 'triangle' },
//    { color: 'red', shape: 'square' },
//    ];
// 4. Deconstruct the complete car object literal
//    Find a way to call just one variable name for each of the carTypes
//    rename the array values inside the otherShops array to third, fourth, and for the last two values they should be in an array called fifth
//    const car = {
//    carTypes: {
//    one: { make: 'Mercedes', model: 'Meybach', year: 2020 },
//    two: {
//    make: 'toyota',
//    model: 'Landcruiser',
//    year: 2018,
//    },
//    },
//    numWheels: 4,
//    gps: true,
//    autoSteer: true,
//    repairPlaces: {
//    main: 'Dealership',
//    second: 'Roe Park Car Shop',
//    otherShops: [
//    'Bozo Repair',
//    'Johnson Body',
//    'Fixer Upper Central',
//    'Last Chance Repairs',
//    ],
//    },
//    };
// 5. Write a function called displayStudentInfo which accepts an object and returns the string "Your full name is" concatenated with the value of the first key and a space and then the value of the last key. See if you can destructure this object inside of the function.
// Output:
// displayStudentInfo({first: 'Elie', last:'Schoppik'}) // 'Your full name is Elie Schoppik'
// 6. Write a function called printFullName which accepts an object and returns the string "Your full name is" concatenated with the value of the first key and a space and then the value of the last key. See if you can destructure this object DIRECTLY from the parameters. The output of the printFullName function should be the exact same as the displayStudentInfo function.
// Output:
// printFullName({first: 'Elie', last:'Schoppik'}) // 'Your full name is Elie Schoppik'
// // you will have to pass in the correct parameters for this function!
// 7. Write a function called createStudent which accepts as a parameter, a default parameter which is a destructured object with the key of likesProgramming and value of true, and key of likesVideoGames and value of true.
// If both the values of likesVideoGames and likesProgramming are true, the function should return the string 'The student likes Programming and Video Games'.
// If the value of likesProgramming is false the function should return the string 'The student likes Programming!'
// If the value of likesVideoGames is false the function should return the string 'The student likesProgramming!'
// If both the value of likesVideoGames and likesProgramming are false, the function should return the string 'The student does not like much...'
// Output:
// createStudent() // 'The student likes Programming and Video Games'
// createStudent({likesProgramming:false}) // 'The student likes Video Games!'
// createStudent({likesVideoGames:false}) // 'The student likes Programming!'
// createStudent({likesVideoGames:false, likesProgramming:false}) // 'The student does not like anything...'
